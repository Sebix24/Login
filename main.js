//Transicion de formularios
const btnsignin = document.getElementById("sign-in");
const btnsignup = document.getElementById("sign-up");
const register = document.querySelector(".register");
const login = document.querySelector(".login");

//Funciones
btnsignin.addEventListener("click", e=> {
    register.classList.add("hide"),
    login.classList.remove("hide");
});

btnsignup.addEventListener("click", e=>{
    register.classList.remove("hide"),
    login.classList.add("hide");
});

//Modo Oscuro
const swith = document.querySelector(".switch");

swith.addEventListener("click", e => {
    swith.classList.toggle("active");
    document.body.classList.toggle("active");
});
