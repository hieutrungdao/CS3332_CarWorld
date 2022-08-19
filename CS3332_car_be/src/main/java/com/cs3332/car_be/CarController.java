package com.cs3332.car_be;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.result.DeleteResult;
import lombok.AllArgsConstructor;
import org.apache.tomcat.util.codec.binary.Base64;
import org.apache.tomcat.util.json.JSONParser;
import org.json.JSONObject;
import org.springframework.boot.json.GsonJsonParser;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.OptionalInt;

@RestController
@RequestMapping("api/cars")
@AllArgsConstructor
public class CarController {

    private final CarService carService;



    @GetMapping
    public List<Car> getCars(
            @RequestParam(value = "id", required = false) String id,
            @RequestParam(value = "offset", defaultValue = "0") int offset,
            @RequestParam(value = "limit", defaultValue = "20") int limit,
            @RequestParam(value = "userid", required = false) String userid,
            @RequestParam(value = "name", required = false) String name,
            @RequestParam(value = "fuel", required = false) String fuel,
            @RequestParam(value = "type", required = false) String type,
            @RequestParam(value = "transmission", required = false) String transmission,
            @RequestParam(value = "brand", required = false) String brand,
            @RequestParam(value = "owner", required = false) String owner,
            @RequestParam(value = "year", required = false) Double year,
            @RequestParam(value = "seats", required = false) Double seats,
            @RequestParam(value = "kmdriven", required = false) Double kmdriven,
            @RequestParam(value = "mileage", required = false) Double mileage,
            @RequestParam(value = "engine", required = false) Double engine,
            @RequestParam(value = "maxpower", required = false) Double maxpower,
            @RequestParam(value = "torqueNm", required = false) Double torqueNm,
            @RequestParam(value = "torquerpm", required = false) Double torquerpm,
            @RequestParam(value = "price", required = false) Double price
    ) {
        if (id != null) {
            return carService.getSingleCar(id);
        }
        return carService.filterCar(offset, limit, userid, name, fuel, type, transmission, brand, owner,
                year, seats, kmdriven, mileage, engine, maxpower, torqueNm, torquerpm, price);
    }

    @PostMapping
    public String createCar(@RequestBody Car car){
        return carService.modCar(car);
    }

    @PutMapping
    public String updateCar(@RequestBody Car car){
        return carService.modCar(car);
    }

    @DeleteMapping
    public DeleteResult deleteCar(@RequestParam(value = "id") String id) {
        return carService.deleteCar(id);
    }

    @PostMapping("/uploadimage")
    public String uploadImage(
            @RequestParam(value = "id") String id,
            @RequestParam(value = "files", required = false) MultipartFile[] files
    ) {
        return carService.uploadImage(id, files);
    }

    @GetMapping("/getfuel")
    public List<String> getFuel(){
        return carService.getFuel();
    }

    @GetMapping("/gettype")
    public List<String> getType(){
        return carService.getType();
    }

    @GetMapping("/gettransmission")
    public List<String> getTransmission(){
        return carService.getTransmission();
    }

    @GetMapping("/getbrand")
    public List<String> getBrand(){
        return carService.getBrand();
    }

    @GetMapping("/getowner")
    public List<String> getOwner(){
        return carService.getOwner();
    }

    @GetMapping("/getkmdriven")
    public List<Double> getKmdriven(){
        return carService.getKmdriven();
    }

    @GetMapping("/getmileage")
    public List<Double> getMileage(){
        return carService.getMileage();
    }

    @GetMapping("/getengine")
    public List<Double> getEngine(){
        return carService.getEngine();
    }

    @GetMapping("/getmaxpower")
    public List<Double> getMaxpower(){
        return carService.getMaxpower();
    }

    @GetMapping("/gettorquemm")
    public List<Double> getTorqueNm(){
        return carService.getTorqueNm();
    }

    @GetMapping("/gettorquerpm")
    public List<Double> getTorquerpm(){
        return carService.getTorquerpm();
    }

    @GetMapping("/getprice")
    public List<Double> getPrice(){
        return carService.getPrice();
    }


}
