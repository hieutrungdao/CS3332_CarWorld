$(function(){
    loadScript('js/products.js', productsSetup);
    loadScript('js/categories.js', categoriesSetup);
})

function deleteCar() {
    console.log(urlParam("id"))
}

function checkAgain(type, brand, fuel, transmision, owner) {
    $("input[name='checkbox_gettype']").each(function (index, obj) {
        if ($(this).val() == type)
            $(this).prop('checked', true);
    });
    $("input[name='checkbox_getbrand']").each(function (index, obj) {
        if ($(this).val() == brand)
            $(this).prop('checked', true);
    });
    $("input[name='checkbox_getfuel']").each(function (index, obj) {
        if ($(this).val() == fuel)
            $(this).prop('checked', true);
    });
    $("input[name='checkbox_gettransmision']").each(function (index, obj) {
        if ($(this).val() == transmision)
            $(this).prop('checked', true);
    });
    $("input[name='checkbox_getowner']").each(function (index, obj) {
        if ($(this).val() == owner)
            $(this).prop('checked', true);
    });
}

var productsSetup = function(){
    
    let products = new Products();

    if(urlParam("id")){    
        products.getSingleProducts(urlParam("id"))
    }
   

    if(urlParam("year")){
        year = decodeURIComponent(urlParam("year"))
    }else{
        year = 0
    }

    if(urlParam("seats")){
        seats = decodeURIComponent(urlParam("seats"))
    }else{
        seats = 0
    }

    if(urlParam("kmdriven")){
        kmdriven = decodeURIComponent(urlParam("kmdriven"))
    }else{
        kmdriven = 0
    }

    if(urlParam("mileage")){
        mileage = decodeURIComponent(urlParam("mileage"))
    }else{
        mileage = 0
    }

    if(urlParam("engine")){    
        engine = decodeURIComponent(urlParam("engine"))

    }else{
        engine = 0
    }

    if(urlParam("maxpower")){    
        maxpower = decodeURIComponent(urlParam("maxpower"))

    }else{
        maxpower = 0
    }

    if(urlParam("torqueNm")){    
        torqueNm = decodeURIComponent(urlParam("torqueNm"))

    }else{
        torqueNm = 0
    }

    if(urlParam("torquerpm")){    
        torquerpm = decodeURIComponent(urlParam("torquerpm"))

    }else{
        torquerpm = 0
    }

    
    if(urlParam("price")){    
        price = decodeURIComponent(urlParam("price"))

    }else{
       price = 0
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

    if(urlParam("userid")){
        userid = decodeURIComponent(urlParam("userid"))
    }else{
        userid = ""
    }
    
    checkAgain(type, brand, fuel, transmission, owner)
    // namecar = decodeURIComponent(urlParam("name"))
    // fuel = decodeURIComponent(urlParam("fuel"))
    // type = decodeURIComponent(urlParam("type"))
    // transmission = decodeURIComponent(urlParam("transmission"))
    // brand = decodeURIComponent(urlParam("brand"))
    // owner = decodeURIComponent(urlParam("owner"))
    products.getAllProducts(offset, userid, namecar, fuel, type, transmission, brand, owner,
        year, seats, kmdriven, mileage, engine, maxpower, torqueNm, torquerpm, price);
    
}

var categoriesSetup = function(){
    let categories = new Categories();
    categories.getCategories();
}

function loadScript(url, callback){
    var head = document.head
    var script = document.createElement("script")
    script.type = "text/javascript"
    script.src = url
    script.onreadystatechange = callback
    script.onload = callback
    head.appendChild(script)
}

function urlParam(name) {
	var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
		window.location.href
	);
	if (results == null) {
		return null;
	} else {
		return results[1] || 0;
	}
}

