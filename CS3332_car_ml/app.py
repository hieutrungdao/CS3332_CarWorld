from email import header
from flask import Flask, jsonify, request
from flask_restful import Api
from flask_cors import CORS
import flask_cors
import numpy as np
import lightgbm as lgb
import pandas as pd
from loguru import logger


app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)


clf = lgb.Booster(model_file="lgb.txt")

cat = ['fuel', 'type', 'transmission', 'owner', 'name', 'brand']
num = ['year', 'kmdriven', 'mileage', 'engine', 'maxpower', 'seats', 'torqueNm', 'torquerpm']

@app.route("/api/predict", methods=['POST'])
def predict():
    data = request.get_json()
    print(data)
    car = pd.DataFrame(data, index=[0])
    car[num] = car[num].astype(float)
    car[cat] = car[cat].astype("category")
    output = clf.predict(car, num_iteration=clf.best_iteration)[0]
    car["price"] = output
    logger.info("\n"+str(car.iloc[0]))
    res = jsonify(int(output))
    res.headers.add("Access-Control-Allow-Origin", "*")
    return res



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8888, debug=True)