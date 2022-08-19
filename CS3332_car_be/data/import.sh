#! /bin/bash
mongoimport --host mongodb --db car_ecommerce --collection car --type=csv --headerline --file=/data/car.csv