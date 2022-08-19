var form = document.getElementById('formLogin')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(form)
    var email = document.getElementById('form1Example1').value
    var password = document.getElementById('form1Example2').value
    console.log(email, password)
    if (email == '') {
        return console.log('email cannot be empty')
    }
    if (password == '') {
        return document.getElementById("error-login").innerHTML =
        `
        <i class="fas fa-user-circle fa-2xl"></i>
        <span>
          <h7 class="d-flex justify-content-center fw-bold mt-4" style="color: red;">Password cannot empty</h7>
        </span>
        `    }

    fetch('http://localhost:8082/api/auth/sign-in', {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
        .then(function (response) {
            return response.json()
        }).then(function (message) {
            console.log(message)
            var token = message.token;
            var id = message.id;
            console.log(token)
            localStorage.setItem('token', token)
            localStorage.setItem('id', id)
            if(message.token != undefined){
                document.getElementById("close").click();
                location.reload()
            }else{
                return document.getElementById("error-login").innerHTML =
                `
                <i class="fas fa-user-circle fa-2xl"></i>
                <span>
                  <h7 class="d-flex justify-content-center fw-bold mt-4" style="color: red;">Password or email is incorrect</h7>
                </span>
                `
            }
            // location.reload()
            // window.location.href="./index.html"

        }).catch(error => console.error('Error:', error))
})

