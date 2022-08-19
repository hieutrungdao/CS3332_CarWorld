package com.cs3332.car_be;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.result.DeleteResult;
import lombok.AllArgsConstructor;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.TextCriteria;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;
import java.util.List;

@AllArgsConstructor
@Service
public class CarService {

    private final CarRepository carRepository;

    @Autowired
    private MongoTemplate carTemplate;
    private final ObjectMapper objectMapper = new ObjectMapper();

    private boolean checkString(String x){
        if (x != null){
            if (x != ""){
                if (!(x.equals("null"))){
                    return true;
                }
            }
        }
        return false;
    }

    public List<Car> getSingleCar(String id) {
        return carRepository.findCarById(id);
    }

    public List<Car> filterCar(int offset,
                               int limit,
                               String userid,
                               String name,
                               String fuel,
                               String type,
                               String transmission,
                               String brand,
                               String owner,
                               Double year,
                               Double seats,
                               Double km_driven,
                               Double mileage,
                               Double engine,
                               Double maxpower,
                               Double torqueNm,
                               Double torquerpm,
                               Double price) {
        Query query = new Query();
        if (checkString(name)){
            query.addCriteria(TextCriteria.forLanguage("en").matching(name));
        }
        if (checkString(userid)){
            userid = "id" + userid;
            query.addCriteria(Criteria.where("userid").is(userid));
        }
        if (checkString(transmission)){
            query.addCriteria(Criteria.where("transmission").is(transmission));
        }
        if (checkString(type)){
            query.addCriteria(Criteria.where("type").is(type.toLowerCase()));
        }
        if (checkString(fuel)){
            query.addCriteria(Criteria.where("fuel").is(fuel));
        }
        if (checkString(brand)){
            query.addCriteria(Criteria.where("brand").is(brand));
        }
        if (checkString(owner)){
            query.addCriteria(Criteria.where("owner").is(owner));
        }
        if (year != null){
            if (year != 0){
                query.addCriteria(Criteria.where("year").gte(year));
            }
        }
        if (km_driven != null){
            if (km_driven != 0){
                query.addCriteria(Criteria.where("km_driven").lte(km_driven));
            }
        }
        if (mileage != null){
            if (mileage != 0){
                query.addCriteria(Criteria.where("mileage").lte(mileage));
            }

        }
        if (engine != null){
            if (engine != 0){
                query.addCriteria(Criteria.where("engine").gte(engine));
            }
        }
        if (maxpower != null){
            if (maxpower != 0){
                query.addCriteria(Criteria.where("maxpower").gte(maxpower));
            }
        }
        if (seats != null){
            if (seats != 0){
                query.addCriteria(Criteria.where("seats").is(seats));
            }
        }
        if (torqueNm != null){
            if (torqueNm != 0){
                query.addCriteria(Criteria.where("torqueNm").gte(torqueNm));
            }
        }
        if (torquerpm != null){
            if (torquerpm != 0){
                query.addCriteria(Criteria.where("torquerpm").gte(torquerpm));
            }
        }
        if (price != null){
            if (price != 0){
                query.addCriteria(Criteria.where("price").lte(price));
            }
        }
        query.limit(limit);
        query.skip((long) offset *limit);
        return carTemplate.find(query, Car.class);
    }

    public String modCar(Car car) {
        car.setUserid("id"+car.getUserid());
        carRepository.save(car);
        return car.getId();
    }

    public String uploadImage(String id, MultipartFile[] files) {
        String[] images = new String[files.length];

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.MULTIPART_FORM_DATA);

        String url = "https://api.imgbb.com/1/upload";
        RestTemplate restTemplate = new RestTemplate();

        for (int i = 0; i < files.length; i++) {
            MultiValueMap<String, Object> body
                    = new LinkedMultiValueMap<>();
            body.add("key", "1f41a59bca7a853103ba8e3c96fd382a");

            try{
                byte[] image = Base64.encodeBase64(files[i].getBytes());
                String result = new String(image);
                body.add("image", result);
                HttpEntity<MultiValueMap> requestEntity = new HttpEntity<>(body, headers);
                ResponseEntity<String> response = restTemplate.postForEntity(url, requestEntity, String.class);
                JsonNode root = objectMapper.readTree(response.getBody());
                images[i] = root.at("/data/url").asText();
            } catch(Exception e) {
                e.printStackTrace();
            }
        }
        List<Car> cars = getSingleCar(id);
        cars.get(0).setImages(Arrays.toString(images));
        carRepository.save(cars.get(0));
        return cars.get(0).getId();
    }

    public DeleteResult deleteCar(String id) {
        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        return carTemplate.remove(query, Car.class);
    }

    public List<String> getFuel(){
        return carTemplate.query(Car.class).distinct("fuel").as(String.class).all();
    }

    public List<String> getType(){
        return carTemplate.query(Car.class).distinct("type").as(String.class).all();
    }

    public List<String> getTransmission(){
        return carTemplate.query(Car.class).distinct("transmission").as(String.class).all();
    }

    public List<String> getBrand(){
        return carTemplate.query(Car.class).distinct("brand").as(String.class).all();
    }

    public List<String> getOwner(){
        return carTemplate.query(Car.class).distinct("owner").as(String.class).all();
    }


    public List<Double> getKmdriven() {
        Double min = carRepository.findFirstByOrderByKmdrivenAsc().getKmdriven();
        Double max = carRepository.findFirstByOrderByKmdrivenDesc().getKmdriven();
        return List.of(min, max);
    }

    public List<Double> getMileage() {
        Double min = carRepository.findFirstByOrderByMileageAsc().getMileage();
        Double max = carRepository.findFirstByOrderByMileageDesc().getMileage();
        return List.of(min, max);
    }

    public List<Double> getEngine() {
        Double min = carRepository.findFirstByOrderByEngineAsc().getEngine();
        Double max = carRepository.findFirstByOrderByEngineDesc().getEngine();
        return List.of(min, max);
    }

    public List<Double> getMaxpower() {
        Double min = carRepository.findFirstByOrderByMaxpowerAsc().getMaxpower();
        Double max = carRepository.findFirstByOrderByMaxpowerDesc().getMaxpower();
        return List.of(min, max);
    }

    public List<Double> getTorqueNm() {
        Double min = carRepository.findFirstByOrderByTorqueNmAsc().getTorqueNm();
        Double max = carRepository.findFirstByOrderByTorqueNmDesc().getTorqueNm();
        return List.of(min, max);
    }

    public List<Double> getTorquerpm() {
        Double min = carRepository.findFirstByOrderByTorquerpmAsc().getTorquerpm();
        Double max = carRepository.findFirstByOrderByTorquerpmDesc().getTorquerpm();
        return List.of(min, max);
    }

    public List<Double> getPrice() {
        Double min = carRepository.findFirstByOrderByPriceAsc().getPrice();
        Double max = carRepository.findFirstByOrderByPriceDesc().getPrice();
        return List.of(min, max);
    }



}

