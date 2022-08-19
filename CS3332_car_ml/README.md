# Getting Started

## Run

Normal env

```bash
pip install -r requirements.txt
python app.py
```


For amd64:

```bash
docker run --rm -it -p 8888:8888 hieutrungdao/car_ml:amd64
```

For arm:

```bash
docker run --rm -it -p 8888:8888 hieutrungdao/car_ml:arm
```

## Docker build

Build:

```bash
docker build -t car_ml -f dockerfile .
```
