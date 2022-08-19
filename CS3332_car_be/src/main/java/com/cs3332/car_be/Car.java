package com.cs3332.car_be;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.TextIndexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
public class Car {
    @Id
    private String id;
    private String userid;
    private String fuel;
    private String type;
    private String transmission;
    private String owner;
    @TextIndexed
    private String name;

    private String brand;
    private Double year;
    private Double kmdriven;
    private Double mileage;
    private Double engine;
    private Double maxpower;
    private Double seats;
    private Double torqueNm;
    private Double torquerpm;
    private Double price;
    private String images;


    public Car(String userid,
               String fuel,
               String type,
               String transmission,
               String owner,
               String name,
               String brand,
               Double year,
               Double seats,
               Double kmdriven,
               Double mileage,
               Double engine,
               Double maxpower,
               Double torqueNm,
               Double torquerpm,
               Double price,
               String images) {
        this.userid = userid;
        this.fuel = fuel;
        this.type = type;
        this.transmission = transmission;
        this.owner = owner;
        this.name = name;
        this.brand = brand;
        this.year = year;
        this.seats = seats;
        this.kmdriven = kmdriven;
        this.mileage = mileage;
        this.engine = engine;
        this.maxpower = maxpower;
        this.torqueNm = torqueNm;
        this.torquerpm = torquerpm;
        this.price = price;
        this.images = images;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getFuel() {
        return fuel;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Double getYear() {
        return year;
    }

    public void setYear(Double year) {
        this.year = year;
    }

    public Double getSeats() {
        return seats;
    }

    public void setSeats(Double seats) {
        this.seats = seats;
    }

    public Double getKmdriven() {
        return kmdriven;
    }

    public void setKmdriven(Double kmdriven) {
        this.kmdriven = kmdriven;
    }

    public Double getMileage() {
        return mileage;
    }

    public void setMileage(Double mileage) {
        this.mileage = mileage;
    }

    public Double getEngine() {
        return engine;
    }

    public void setEngine(Double engine) {
        this.engine = engine;
    }

    public Double getMaxpower() {
        return maxpower;
    }

    public void setMaxpower(Double maxpower) {
        this.maxpower = maxpower;
    }

    public Double getTorqueNm() {
        return torqueNm;
    }

    public void setTorqueNm(Double torqueNm) {
        this.torqueNm = torqueNm;
    }

    public Double getTorquerpm() {
        return torquerpm;
    }

    public void setTorquerpm(Double torquerpm) {
        this.torquerpm = torquerpm;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getImages() {
        return images;
    }

    public void setImages(String images) {
        this.images = images;
    }

}

