getTokenCheck = localStorage.getItem("token")
getIdCheck = localStorage.getItem("id")
console.log(getTokenCheck, getIdCheck)

var check = document.getElementById("check-user")
check.addEventListener("click",()=>{
    if(getTokenCheck == null || getIdCheck == null){
        alert("You have to login to use this feature")

    }else{
        window.location.href="./sell.html"
    }
});