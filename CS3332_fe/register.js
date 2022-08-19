var form = document.getElementById('formRegister')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(form)
    var firstName = document.getElementById('form3Example1').value
    var lastName = document.getElementById('form3Example2').value
    var email = document.getElementById('form3Example3').value
    var phone = document.getElementById('form3Example4').value
    var pass = document.getElementById('form3Example5').value
    var confirmPass = document.getElementById('form3Example6').value
    console.log(firstName, lastName, email, phone, pass, confirmPass)
    if (firstName == '') {
        return document.getElementById("catch-error").innerHTML = 
        `
        <h7 id="catch-error" class="d-flex justify-content-center fw-bold" style="color:red">First Name cannot be empty</h7>
        `
    }
    if (lastName == '') {
        return document.getElementById("catch-error").innerHTML = 
        `
        <h7 class="d-flex justify-content-center fw-bold" style="color:red">Last Name cannot be empty</h7>
        `
    }
    if (email == '') {
        return document.getElementById("catch-error").innerHTML = 
        `
        <h7 class="d-flex justify-content-center fw-bold" style="color:red">Email cannot be empty</h7>
        `
    }
    if (phone == '') {
        return document.getElementById("catch-error").innerHTML = 
        `
        <h7 class="d-flex justify-content-center fw-bold" style="color:red">Phone cannot be empty</h7>
        `
    }
    if (pass == '') {
        return document.getElementById("catch-error").innerHTML = 
        `
        <h7 class="d-flex justify-content-center fw-bold" style="color:red">Password cannot be empty</h7>
        `
    }
    if (pass.length < 8) {
        return document.getElementById("catch-error").innerHTML = 
        `
        <h7 class="d-flex justify-content-center fw-bold" style="color:red">Password too weak</h7>
        `
    }
    if (pass !== confirmPass) {
        return document.getElementById("catch-error").innerHTML = 
        `
        <h7 class="d-flex justify-content-center fw-bold" style="color:red">Password and Confirm Password do not match</h7>
        `
    }

    fetch('http://localhost:8082/api/auth/sign-up', {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            password: pass,
            roles:["USER"]
        }),
    })
        .then(function (response) {
            console.log(response)
            return response.json()
        }).then(function (message) {
            console.log(message)
            var check =message.status
            console.log(message.status)
            console.log(typeof message.status)

            if(check !== 'OK'){
                document.getElementById("catch-error").innerHTML = 
                `
                <h7 class="d-flex justify-content-center fw-bold" style="color:red">Mail or Phone already register</h7>
                `
            }
            if(check === 'OK'){
                location.reload()
                window.location.href="./index.html"
            }
        }).catch(error => console.error('Error:', error))
    
})


