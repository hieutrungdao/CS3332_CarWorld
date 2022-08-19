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
    
    // document.getElementById("img-default").innerHTML =
    // `
    // <div id="img-default" style="width:25px ;">
    // <img src="./img/image/anonymousAvt.png" class="rounded-circle" height="25"
    //   alt="Black and White Portrait of a Man" loading="lazy" />
    // </div>
    // `

    if(data.data.avatar == null){
        document.getElementById("img-default").innerHTML =
        `
        <div id="img-default" style="width:25px ;">
        <img src="https://png.pngtree.com/png-vector/20200614/ourlarge/pngtree-businessman-user-avatar-character-vector-illustration-png-image_2242909.jpg" class="rounded-circle" height="25"
          alt="Black and White Portrait of a Man" loading="lazy" />
        </div>
        `
    }else{
        document.getElementById("img-default").innerHTML =
        `
        <div id="img-default" style="width:25px ;">
        <img src="./img/image/${data.data.avatar}" class="rounded-circle" height="25"
          alt="Black and White Portrait of a Man" loading="lazy" />
        </div>
        `
    }
    
})
