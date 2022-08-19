var logout = document.getElementById("logout")
logout.addEventListener("click",()=>{
    localStorage.removeItem("token")
    localStorage.removeItem("id")
    location.reload()
});