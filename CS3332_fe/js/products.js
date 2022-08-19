function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function move2MyPosts(){
  window.location.href = 'product.html' + '?userid=' + localStorage.getItem('id');
}

function deleteCar() {
  var url = "http://localhost:8080/api/cars?id="+urlParam("id")

  var settings = {
    "url": url,
    "method": "DELETE",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    window.location.href = 'product.html'
  });

}




class Products {
  constructor() {
    this.apiUrl = 'http://localhost:8080/api/cars'
  }
  getAllProducts(offset, userid, namecar, fuel, type, transmission, brand, owner,
    year, seats, kmdriven, mileage, engine, maxpower, torqueNm, torquerpm, price) {
    var settings = {
      "url": `http://localhost:8080/api/cars?offset=${offset}&userid=${userid}&name=${namecar}&fuel=${fuel}&type=${type}&transmission=${transmission}&brand=${brand}&owner=${owner}&year=${year}&seats=${seats}&kmdriven=${kmdriven}&mileage=${mileage}&engine=${engine}&maxpower=${maxpower}&torqueNm=${torqueNm}&torquerpm=${torquerpm}&price=${price}`,
      "method": "GET",
      "timeout": 0,
    };

    $.ajax(settings).done(function (data) {
      $(data).each(function (index, product) {
        console.log(data)
        const imgs = product.images.replace(/[\[\]']/g, '');
        const img = imgs.split(',');
        $(".product").append(
          ' <a class="d-lg-flex justify-content-between align-items-center d-sm-block sm-flex-column d-md-block md-flex-column text-dark" href="/product-detail.html?id='
          + encodeURIComponent(product.id) + '">' +
          '<div class="col-lg-6 col-sm-12 col-md-12 me-5 mt-4">' +
          '<img src="' + img[0] + '" alt="" class="img-thumbnail w-100 ">'
          + '</div>' +
          ' <div class="col-lg-6 col-sm-12 col-md-12">' +
          '<h4>' + product.name + '</h4>' +
          '<h5>$' + product.price + '</h5>' +
          '<h4 style="color: green">' + 'Type:  ' + capitalizeFirstLetter(product.type) + '</h4>' +
          '<h6>Year:' + product.year + '</h6>' +
          "</div></a>"
        );

      });
    });

    if (localStorage.getItem("id") != null){
      $("#myposts").append(
        `
          <a> <button type="submit" class="btn btn-dark" onclick="move2MyPosts();">My Post</button> </a>
        `
      )
    }

    $("#page").append(
      `
        <li class="page-item"><a class="page-link" href="#">${offset}</a></li>
      `
    )



  }

  getSingleProducts(id) {
    $.ajax({
      type: 'GET',
      url: this.apiUrl + '?id=' + id,
      success: function (data) {
        const imgs = data[0].images.replace(/[\[\]']/g, '');
        const img = imgs.split(',');
        $(".product-detail").html(
          `<div class="col-lg-6 col-sm-12">
              <h2 id="name"> ${data[0].name}</h2>
              <h5 id="price">$ ${data[0].price}</h5>
              <div id="carouselExampleControls" class="carousel slide rounded-4 pb-5" data-mdb-ride="carousel">
                <div class="carousel-inner rounded-6">
                  <div class="carousel-item active rounded-6">
                    <img
                      src="${img[0]}"
                      class="d-block w-100 rounded-6" alt="Wild Landscape" />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="${img[2]}"
                      class="d-block w-100 rounded-6" alt="Camera" />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="${img[3]}"
                      class="d-block w-100 rounded-6" alt="Exotic Fruits" />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="${img[4]}"
                      class="d-block w-100 rounded-6" alt="Exotic Fruits" />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="${img[5]}"
                      class="d-block w-100 rounded-6" alt="Exotic Fruits" />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="${img[6]}"
                      class="d-block w-100 rounded-6" alt="Exotic Fruits" />
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls"
                  data-mdb-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls"
                  data-mdb-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <h2>Specification</h2>
              <table class="table border">
              <tbody>
              <tr>
                <th scope="row">Brand</th>
                <td id="km_driven">${data[0].brand}</td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <th scope="row">Name</th>
                <td id="km_driven">${data[0].name}</td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <th scope="row">Fuel</th>
                <td id="km_driven">${data[0].fuel}</td>
              </tr>
              </tbody>
              <tbody>
              <tr>
                <th scope="row">Owner</th>
                <td id="km_driven">${data[0].owner}</td>
              </tr>
              </tbody>
                <tbody>
                  <tr>
                    <th scope="row">Number of km driven</th>
                    <td id="km_driven">${data[0].kmdriven}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th scope="row">Mileage</th>
                    <td id="mileage">${data[0].mileage}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th scope="row">Engine</th>
                    <td id="engine">${data[0].engine}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th scope="row">Max power</th>
                    <td id="max_power">${data[0].maxpower}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th scope="row">Seats</th>
                    <td id="seats">${data[0].seats}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th scope="row">Torque Nm</th>
                    <td id="torque_Nm">${data[0].torqueNm}</td>
                  </tr>
                </tbody>
                <tbody>
                  <tr>
                    <th scope="row">Torque rpm</th>
                    <td id="torque_rpm">${data[0].torquerpm}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-lg-6 col-sm-12 ms-lg-5 border rounded-6 h-50 sticky-top">
              <div class="p-4">
                <h5>Type: ${capitalizeFirstLetter(data[0].type)} </h5>
                <hr>
                <h5 class="mt-0" id="price_show">Price: $${data[0].price}</h5>
              </div>
            </div>`
        )
        if (data[0]["userid"] == "id"+localStorage.getItem('id')){
          $("#delete").append(
            `
            <a> <button type="submit" class="btn btn-danger" onclick="deleteCar();">DELETE</button> </a>
          `
          )
        }
      }
    })
  }

}

function next() {

  if(urlParam("userid")){
    userid = decodeURIComponent(urlParam("userid"))
  }else{
      userid = ""
  }

  if(urlParam("year")){
      year = decodeURIComponent(urlParam("year"))
  }else{
      year = ""
  }

  if(urlParam("seats")){
      seats = decodeURIComponent(urlParam("seats"))
  }else{
      seats = ""
  }

  if(urlParam("kmdriven")){
      kmdriven = decodeURIComponent(urlParam("kmdriven"))
  }else{
      kmdriven = ""
  }

  if(urlParam("mileage")){
      mileage = decodeURIComponent(urlParam("mileage"))
  }else{
      mileage = ""
  }

  if(urlParam("engine")){    
      engine = decodeURIComponent(urlParam("engine"))

  }else{
      engine = ""
  }

  if(urlParam("maxpower")){    
      maxpower = decodeURIComponent(urlParam("maxpower"))

  }else{
      maxpower = ""
  }

  if(urlParam("torqueNm")){    
      torqueNm = decodeURIComponent(urlParam("torqueNm"))

  }else{
      torqueNm = ""
  }

  if(urlParam("torquerpm")){    
      torquerpm = decodeURIComponent(urlParam("torquerpm"))

  }else{
      torquerpm = ""
  }


  if(urlParam("price")){    
      price = decodeURIComponent(urlParam("price"))

  }else{
    price = ""
  }

  if(urlParam("offset")){    
      offset = decodeURIComponent(urlParam("offset"))

  }else{
    offset = 0
  }
  if(urlParam("name")){    
      namecar = decodeURIComponent(urlParam("name"))

  }else{
      namecar = ""
  }
  if(urlParam("fuel")){    
      fuel = decodeURIComponent(urlParam("fuel"))

  }else{
      fuel = ""
  }
  if(urlParam("transmission")){    
      transmission = decodeURIComponent(urlParam("transmission"))

  }else{
      transmission = ""
  }
  if(urlParam("brand")){    
      brand = decodeURIComponent(urlParam("brand"))

  }else{
      brand = ""
  }
  if(urlParam("owner")){    
      owner = decodeURIComponent(urlParam("owner"))

  }else{
      owner = ""
  }
  if(urlParam("type")){    
      type = decodeURIComponent(urlParam("type"))

  }else{
      type = ""
  }

  // checkAgain(type, brand, fuel, transmission, owner)
  offset=parseInt(offset)+1

  window.location.href = '/product.html'  + '?offset=' + offset + '&?brand=' + brand + '&name=' + namecar + '&price=' + price  + '&maxpower=' + maxpower + '&year=' + year + '&kmdriven=' + kmdriven + '&mileage=' + mileage + '&engine=' + engine + '&seats=' + seats + '&torqueNm=' + torqueNm + '&torquerpm=' + torquerpm + '&type=' + type + '&fuel=' + fuel + '&transmision=' + transmission + '&owner=' + owner + '&userid=' + userid;
}

function prev() {

  if(urlParam("userid")){
    userid = decodeURIComponent(urlParam("userid"))
  }else{
      userid = ""
  }

  if(urlParam("year")){
      year = decodeURIComponent(urlParam("year"))
  }else{
      year = ""
  }

  if(urlParam("seats")){
      seats = decodeURIComponent(urlParam("seats"))
  }else{
      seats = ""
  }

  if(urlParam("kmdriven")){
      kmdriven = decodeURIComponent(urlParam("kmdriven"))
  }else{
      kmdriven = ""
  }

  if(urlParam("mileage")){
      mileage = decodeURIComponent(urlParam("mileage"))
  }else{
      mileage = ""
  }

  if(urlParam("engine")){    
      engine = decodeURIComponent(urlParam("engine"))

  }else{
      engine = ""
  }

  if(urlParam("maxpower")){    
      maxpower = decodeURIComponent(urlParam("maxpower"))

  }else{
      maxpower = ""
  }

  if(urlParam("torqueNm")){    
      torqueNm = decodeURIComponent(urlParam("torqueNm"))

  }else{
      torqueNm = ""
  }

  if(urlParam("torquerpm")){    
      torquerpm = decodeURIComponent(urlParam("torquerpm"))

  }else{
      torquerpm = ""
  }


  if(urlParam("price")){    
      price = decodeURIComponent(urlParam("price"))

  }else{
    price = ""
  }

  if(urlParam("offset")){    
      offset = decodeURIComponent(urlParam("offset"))

  }else{
    offset = 0
  }
  if(urlParam("name")){    
      namecar = decodeURIComponent(urlParam("name"))

  }else{
      namecar = ""
  }
  if(urlParam("fuel")){    
      fuel = decodeURIComponent(urlParam("fuel"))

  }else{
      fuel = ""
  }
  if(urlParam("transmission")){    
      transmission = decodeURIComponent(urlParam("transmission"))

  }else{
      transmission = ""
  }
  if(urlParam("brand")){    
      brand = decodeURIComponent(urlParam("brand"))

  }else{
      brand = ""
  }
  if(urlParam("owner")){    
      owner = decodeURIComponent(urlParam("owner"))

  }else{
      owner = ""
  }
  if(urlParam("type")){    
      type = decodeURIComponent(urlParam("type"))

  }else{
      type = ""
  }

  // checkAgain(type, brand, fuel, transmission, owner)
  if (offset > 0) {
    offset=parseInt(offset)-1
    window.location.href = '/product.html'  + '?offset=' + offset + '&?brand=' + brand + '&name=' + namecar + '&price=' + price  + '&maxpower=' + maxpower + '&year=' + year + '&kmdriven=' + kmdriven + '&mileage=' + mileage + '&engine=' + engine + '&seats=' + seats + '&torqueNm=' + torqueNm + '&torquerpm=' + torquerpm + '&type=' + type + '&fuel=' + fuel + '&transmision=' + transmission + '&owner=' + owner + '&userid=' + userid;
  }

}