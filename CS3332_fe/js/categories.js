function selectOnlyThis(boxvalue, api) {
    $("input[name='checkbox_"+api+"']").each(function (index, obj) {
        $(this).prop('checked', false);
        if ($(this).val() == boxvalue)
            $(this).prop('checked', true);
    });
}
function getChecked(api) {
    var value;
    $("input[name='checkbox_"+api+"']:checked").each(function (index, obj) {
        value = $(this).prop('value')
    });
    if (value === undefined){
        return ""
    }

    return value
}


document.body.onkeydown = function(e) {
    if (e.keyCode == 13)
        document.getElementById("search-btn").click()
};

document.getElementById("search-btn").addEventListener("click", function(){
    let inputPrice = document.querySelector(".price-input").value;
    let inputMax = document.querySelector(".max-input").value;
    let inputName = document.querySelector(".name-input").value;
    let inputYear = document.querySelector(".year-input").value;
    let inputKm = document.querySelector(".km-input").value;
    let inputMileage = document.querySelector(".mileage-input").value;
    let inputEngine = document.querySelector(".engine-input").value;
    let inputSeats = document.querySelector(".seats-input").value;
    let inputTorquenm = document.querySelector(".torquenm-input").value;
    let inputTorquerpm = document.querySelector(".torquerpm-input").value;
    let inputType = getChecked("gettype")
    let inputBrand = getChecked("getbrand")
    let inputFuel = getChecked("getfuel")
    let inputTransmisison = getChecked("gettransmision")
    let inputOwner = getChecked("getowner")

    // window.location.href = '/product.html'  + '?brand=' + inputBrand + '&price=' + inputPrice  + '&maxpower=' + inputMax + '&year=' + inputYear + '&kmdriven=' + inputKm + '&mileage=' + inputMileage + '&engine=' + inputEngine + '&seats=' + inputSeats + '&torqueNm=' + inputTorquenm + '&torquerpm=' + inputTorquerpm + '&type=' + inputType + '&fuel=' + inputFuel + '&transmision=' + inputTransmisison + '&owner=' + inputOwner ;

    window.location.href = '/product.html'  + '?brand=' + inputBrand + '&name=' + inputName + '&price=' + inputPrice  + '&maxpower=' + inputMax + '&year=' + inputYear + '&kmdriven=' + inputKm + '&mileage=' + inputMileage + '&engine=' + inputEngine + '&seats=' + inputSeats + '&torqueNm=' + inputTorquenm + '&torquerpm=' + inputTorquerpm + '&type=' + inputType + '&fuel=' + inputFuel + '&transmision=' + inputTransmisison + '&owner=' + inputOwner ;
  
})

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class Categories {
    constructor() {
        this.apiUrl = "http://localhost:8080/api/cars";
    }

    callAPI(api) {
        $.ajax({
            type: "GET",
            url: this.apiUrl + "/" + api,
            success: function (data) {
                $(data).each(function (index, value) {
                    value = capitalizeFirstLetter(value)
                    $("."+api).append(
                        `
                       <div class="form-check">
                            <input class="form-check-input" name="checkbox_${api}" type="checkbox" value=${value} onclick="selectOnlyThis(this.value, '${api}')" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">${value}</label>
                        </div>
                       `
                    )

                })
            }
        })
        
    }

    getCategories() {
        this.callAPI("getfuel")
        this.callAPI("gettype")
        this.callAPI("gettransmission")
        this.callAPI("getbrand")
        this.callAPI("getowner")
    }


    // getSingleCategory(slug) {
    //     $.ajax({
    //         type: 'GET',
    //         url: this.apiUrl + "?brand=" + slug,
    //         success: function (data) {
    //             $(data).each(function (index, product) {
    //                 const imgs = product.images.replace(/[\[\]']/g, '');
    //                 const img = imgs.split(',');
    //                 $(".products").append(
    //                     ' <a class="d-lg-flex justify-content-between align-items-center d-sm-block sm-flex-column d-md-block md-flex-column text-dark" href="/product-detail.html?id='
    //                     + encodeURIComponent(product.id) + '">' +
    //                     '<div class="col-lg-6 col-sm-12 col-md-12 me-5 mt-4">' +
    //                     '<img src="' + img[0] + '" alt="" class="img-thumbnail w-100 ">'
    //                     + '</div>' +
    //                     ' <div class="col-lg-6 col-sm-12 col-md-12">' +
    //                     '<h4>' + product.name + '</h4>' +
    //                     '<h5>$' + product.price + '</h5>' +
    //                     '<h6>Owner: Cuong Dinh</h6>' +
    //                     '<h6>Year:' + product.year + '</h6>' +
    //                     '<p>Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since simply dummy text of the printing and typesetting industry</p>' +
    //                     "</div></a>"
    //                 )
    //             }
    //             )
    //         }
    //     })
    //     $.ajax({
    //         type: 'GET',
    //         url: this.apiUrl + "?price=" + slug,
    //         success: function (data) {
    //             console.log(data)
    //             $(data).each(function (index, product) {

    //                 const imgs = product.images.replace(/[\[\]']/g, '');
    //                 const img = imgs.split(',');
    //                 $(".products").append(
    //                     ' <a class="d-lg-flex justify-content-between align-items-center d-sm-block sm-flex-column d-md-block md-flex-column text-dark" href="/product-detail.html?id='
    //                     + encodeURIComponent(product.id) + '">' +
    //                     '<div class="col-lg-6 col-sm-12 col-md-12 me-5 mt-4">' +
    //                     '<img src="' + img[0] + '" alt="" class="img-thumbnail w-100 ">'
    //                     + '</div>' +
    //                     ' <div class="col-lg-6 col-sm-12 col-md-12">' +
    //                     '<h4>' + product.name + '</h4>' +
    //                     '<h5>$' + product.price + '</h5>' +
    //                     '<h6>Owner: Cuong Dinh</h6>' +
    //                     '<h6>Year:' + product.year + '</h6>' +
    //                     '<p>Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since simply dummy text of the printing and typesetting industry</p>' +
    //                     "</div></a>"
    //                 )
    //             }
    //             )
    //         }
    //     })
    //     $.ajax({
    //         type: 'GET',
    //         url: this.apiUrl + "?maxpower=" + slug,
    //         success: function (data) {
    //             $(data).each(function (index, product) {
    //                 const imgs = product.images.replace(/[\[\]']/g, '');
    //                 const img = imgs.split(',');
    //                 $(".products").append(
    //                     ' <a class="d-lg-flex justify-content-between align-items-center d-sm-block sm-flex-column d-md-block md-flex-column text-dark" href="/product-detail.html?id='
    //                     + encodeURIComponent(product.id) + '">' +
    //                     '<div class="col-lg-6 col-sm-12 col-md-12 me-5 mt-4">' +
    //                     '<img src="' + img[0] + '" alt="" class="img-thumbnail w-100 ">'
    //                     + '</div>' +
    //                     ' <div class="col-lg-6 col-sm-12 col-md-12">' +
    //                     '<h4>' + product.name + '</h4>' +
    //                     '<h5>$' + product.price + '</h5>' +
    //                     '<h6>Owner: Cuong Dinh</h6>' +
    //                     '<h6>Year:' + product.year + '</h6>' +
    //                     '<p>Description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since simply dummy text of the printing and typesetting industry</p>' +
    //                     "</div></a>"
    //                 )
    //             }
    //             )
    //         }
    //     })

    // }

}
