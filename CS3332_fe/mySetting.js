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
    console.log(data.data.firstName)

    document.getElementById("update-firstName").innerHTML = 
    `
        <input type="text" id="typeText1" class="form-control" />
        <label class="form-label" for="typeText1">${data.data.firstName}</label>
    `
    document.getElementById("update-lastName").innerHTML = 
    `
        <input type="text" id="typeText2" class="form-control" />
        <label class="form-label" for="typeText2">${data.data.lastName}</label>
    `
    document.getElementById("update-email").innerHTML = 
    `
        <input type="text" id="typeText3" class="form-control" />
        <label class="form-label" for="typeText3">${data.data.email}</label>
    `
    document.getElementById("update-phone").innerHTML = 
    `
        <input type="text" id="typeText4" class="form-control" />
        <label class="form-label" for="typeText4">${data.data.phone}</label>
    `
    document.getElementById("update-password").innerHTML = 
    `
        <input type="text" id="typeText5" class="form-control" />
        <label class="form-label" for="typeText5">password</label>
    `
})

//submit update form
var form = document.getElementById('formUpdate')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(form)
    var firstName = document.getElementById('typeText1').value
    var lastName = document.getElementById('typeText2').value
    var email = document.getElementById('typeText3').value
    var phone = document.getElementById('typeText4').value
    var pass = document.getElementById('typeText5').value
    console.log(firstName, lastName, email, phone, pass)
    if (firstName == '') {
        return document.getElementById('error-update').innerHTML = 
        `
            <h7 class="d-flex justify-content-center fw-"bold" style="color: red;">first name cannot be empty</h7>
        `
    }
    if (lastName == '') {
        return document.getElementById('error-update').innerHTML = 
        `
            <h7 class="d-flex justify-content-center fw-"bold" style="color: red;">last name cannot be empty</h7>
        `    }
    if (email == '') {
        return document.getElementById('error-update').innerHTML = 
        `
            <h7 class="d-flex justify-content-center fw-"bold" style="color: red;">email cannot be empty</h7>
        `    }
    if (phone == '') {
        return document.getElementById('error-update').innerHTML = 
        `
            <h7 class="d-flex justify-content-center fw-"bold" style="color: red;">phone cannot be empty</h7>
        `    }
    if (pass == '') {
        return document.getElementById('error-update').innerHTML = 
        `
            <h7 class="d-flex justify-content-center fw-"bold" style="color: red;">password cannot be empty</h7>
        `    }
    if (pass.length < 8) {
        return document.getElementById('error-update').innerHTML = 
        `
            <h7 class="d-flex justify-content-center fw-"bold" style="color: red;">password is too weak</h7>
        `    }


    fetch(`http://localhost:8082/api/users/update/${id}`, {
        method: 'PUT',
        headers: {
            "content-type": "application/json",
            Authorization: "Bearer" +" "+ localStorage.getItem("token")
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: pass,
        }),
    })
        .then(function (response) {
            console.log(response)
            return response.json()
        }).then(function (message) {
            console.log(message.status)
            if(message.status != "OK"){
                return document.getElementById('error-update').innerHTML = 
                `
                    <h7 class="d-flex justify-content-center fw-"bold" style="color: red;">${message.message}</h7>
                `

            }if(message.status == "OK"){
            location.reload()
            window.location.href="./user.html"
            }
        }).catch(error => console.error('Error:', error))
})







