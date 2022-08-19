var id = localStorage.getItem("id")
fetch (`http://localhost:8082/api/users/${id}`,{
    // method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer" +" "+ localStorage.getItem("token")
    }
}).then(function(response){
    console.log(response)
    return response.json()
}).then(function(data){
    console.log(data.data.avatar)

    document.getElementById("loginChange").innerHTML = data.data.firstName.charAt(0).toUpperCase()+data.data.firstName.slice(1)
    document.getElementById("registerChange").innerHTML = ""

    document.getElementById("user-name").innerHTML =
    `
    <div id="user-name" class="col-lg-12 d-flex justify-content-center mt-3">
        <h2>${data.data.lastName.charAt(0).toUpperCase()+data.data.lastName.slice(1) +" "+data.data.firstName.charAt(0).toUpperCase()+data.data.firstName.slice(1)} </h2>
    </div>
    `
    if(data.data.avatar == null){
        document.getElementById('img-container').innerHTML = 
        `
        <div id="img-container" class="col-lg-12 d-flex justify-content-center">
            <img src="https://png.pngtree.com/png-vector/20200614/ourlarge/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg" 
            class="d-inline-block rounded-circle d-flex justify-content-center img-thumbnail" style="width: 220px;height:220px" alt="..." />
        </div>
        `
        document.getElementById("img-default").innerHTML =
        `
        <div id="img-default" style="width:25px ;">
        <img src="https://png.pngtree.com/png-vector/20200614/ourlarge/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg" class="rounded-circle" height="25"
          alt="Black and White Portrait of a Man" loading="lazy" />
        </div>
        `
    }else{
        document.getElementById('img-container').innerHTML = 
        `
        <div id="img-container" class="col-lg-12 d-flex  justify-content-center">
            <img src="./img/image/${data.data.avatar}" 
            class="d-inline-block rounded-circle d-flex justify-content-center img-thumbnail" style="width: 220px;height:220px" alt="..." />
        </div>
        `
        document.getElementById("img-default").innerHTML = 
        `
        <div id="img-default" style="width:25px ;">
        <img src="./img/image/${data.data.avatar}" class="rounded-circle" height="25"
          alt="Man" loading="lazy" />
        </div>
        `
    }
    

    document.getElementById('infor-container').innerHTML = 
    `
    <div class="row mt-3" id="infor-container">
    <div class="col-lg-3">

    </div>

    <div class="col-lg-6">
      <ul class="list-group list-group-light ">
        <li class="list-group-item">First Name: &emsp; <span class="tile">${data.data.firstName}</span></li>
          <li class="list-group-item">Last Name:&emsp; <span class="tile">${data.data.lastName}</span> </li>
          <li class="list-group-item">Email:&emsp; <span class="tile">${data.data.email}</span></li>
          <li class="list-group-item">Phone: &emsp; <span class="tile">${data.data.phone}</span> </li>
        </ul>
    </div>

    <div class="col-lg-3">

    </div>
  </div>
    `
      
})




