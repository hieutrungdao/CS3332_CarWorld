package com.cs3332.car_be;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.domain.Sort;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

public interface CarRepository
        extends MongoRepository<Car, String> {

    List<Car> findCarById(String id);


    Car findFirstByOrderByKmdrivenAsc();

    Car findFirstByOrderByKmdrivenDesc();

    Car findFirstByOrderByMileageAsc();

    Car findFirstByOrderByMileageDesc();

    Car findFirstByOrderByEngineAsc();

    Car findFirstByOrderByEngineDesc();

    Car findFirstByOrderByMaxpowerAsc();

    Car findFirstByOrderByMaxpowerDesc();

    Car findFirstByOrderByTorqueNmAsc();

    Car findFirstByOrderByTorqueNmDesc();

    Car findFirstByOrderByTorquerpmAsc();

    Car findFirstByOrderByTorquerpmDesc();

    Car findFirstByOrderByPriceAsc();

    Car findFirstByOrderByPriceDesc();



}
