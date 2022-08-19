var form = document.getElementById('sell-form')


form.addEventListener('submit', function (e) {
    e.preventDefault()
    var imagesinput = document.getElementById('imagesinput');
    var type = document.getElementById('type-input').value;
    var nameInput = document.getElementById('name-input').value;
    var brand = document.getElementById('brand-input').value;
    var fuel = document.getElementById('fuel-input').value;
    var transmission = document.getElementById('transmission-input').value;
    var owner = document.getElementById('owner-input').value;
    var year = document.getElementById('year-input').value;
    var seats = document.getElementById('seats-input').value;
    var kmdriven = document.getElementById('kmdriven-input').value;
    var mileage = document.getElementById('mileage-input').value;
    var engine = document.getElementById('engine-input').value;
    var maxpower = document.getElementById('maxpower-input').value;
    var torqueNm = document.getElementById('torquenm-input').value;
    var torquerpm = document.getElementById('torquerpm-input').value;
    var price = document.getElementById('price-input').value;
    console.log(type, nameInput, brand, year, seats, kmdriven, mileage, engine, maxpower, torqueNm, torquerpm, price, imagesinput.files)
    fetch('http://localhost:8080/api/cars', {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify(
            {   
                userid: localStorage.getItem('id'),
                type: type,
                name: nameInput,
                brand: brand,
                fuel: fuel,
                transmission: transmission,
                owner: owner,
                year: parseFloat(year),
                seats: parseFloat(seats),
                kmdriven: parseFloat(kmdriven),
                mileage: parseFloat(mileage),
                engine: parseFloat(engine),
                maxpower: parseFloat(maxpower),
                torqueNm: parseFloat(torqueNm),
                torquerpm: parseFloat(torquerpm),
                price: price
            }
        ),
    })
        .then(function (response) {

            return response.text()
        }).then(function (message) {
            console.log(message)
                        // console.log(response)
            var id = message;
            console.log(id)
            var formdata = new FormData();
            formdata.append("id", id);
            formdata.append("files", imagesinput.files[0])
            console.log(imagesinput.files)

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };
            fetch("http://localhost:8080/api/cars/uploadimage", requestOptions)
                .then(response => response.text())
                .then(result => window.location.href = 'product-detail.html?id=' + result)
                .catch(error => console.log('error', error));
        }).catch(error => console.error('Error:', error))



})


form.addEventListener('reset', function (e) {
    e.preventDefault()
    var type = document.getElementById('type-input').value;
    var nameInput = document.getElementById('name-input').value;
    var brand = document.getElementById('brand-input').value;
    var fuel = document.getElementById('fuel-input').value;
    var transmission = document.getElementById('transmission-input').value;
    var owner = document.getElementById('owner-input').value;
    var year = document.getElementById('year-input').value;
    var seats = document.getElementById('seats-input').value;
    var kmdriven = document.getElementById('kmdriven-input').value;
    var mileage = document.getElementById('mileage-input').value;
    var engine = document.getElementById('engine-input').value;
    var maxpower = document.getElementById('maxpower-input').value;
    var torqueNm = document.getElementById('torquenm-input').value;
    var torquerpm = document.getElementById('torquerpm-input').value;
    console.log(nameInput, brand, year, seats, kmdriven, mileage, engine, maxpower, torqueNm, torquerpm)
    type = type.toLowerCase();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(
        {   
            type: type,
            name: nameInput,
            brand: brand,
            fuel: fuel,
            transmission: transmission,
            owner: owner,
            year: parseFloat(year),
            seats: parseFloat(seats),
            kmdriven: parseFloat(kmdriven),
            mileage: parseFloat(mileage),
            engine: parseFloat(engine),
            maxpower: parseFloat(maxpower),
            torqueNm: parseFloat(torqueNm),
            torquerpm: parseFloat(torquerpm),
        });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      

    fetch('//localhost:8888/api/predict', requestOptions)
        .then(function (response) {
            return response.text()
        }).then(function (message) {
            console.log(message)
            $("#prediction").remove();
            $(".price").append(
                `
                <div class="card text-center border border-dark shadow-0" id="prediction">
                    <div class="card-body text-dark">
                        <h6 class="card-title">Price Predction: ${message}</h6>
                    </div>
                </div>
               `
            )

        }).catch(error => console.error('Error:', error))

})
