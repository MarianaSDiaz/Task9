let fname = document.getElementById("fname");
let email = document.getElementById("email");
let passw = document.getElementById("passw");
let rpassw = document.getElementById("rpassw");
let submit = document.getElementsByClassName("submit");

fname.onblur = function() {
    validateFname(fname.value);
};
fname.onfocus = function() {
    hideError("fnameError");
};
function validateFname(fnameInput){
    var fnameFormat = /[A-Za-z ].{6,}/;
    if (!fnameInput.match(fnameFormat)) {
        showError("fnameError");
        return false;
    }
    return true;
};

email.onblur = function(){
    validateEmail(email.value);
};
email.onfocus = function(){
    hideError("emailError");
};
function validateEmail(emailInput){
    var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailInput.match(emailformat)) {
        showError("emailError");
        return false;
    }
    return true;
};

passw.onblur = function() {
    validatePassw(passw.value);
};
passw.onfocus =function() {
    hideError("passwError");
};
function validatePassw(passwInput) {
    var passwformat = /[a-z]+[0-9]/;
    if (!passwInput.match(passwformat)) {
        showError("passwError");
        return false;
    }
    return true
};

rpassw.onblur = function() {
    validateRpassw(rpassw.value);
};
rpassw.onfocus = function() {
    hideError("rpasswError");
};
function validateRpassw(rpasswInput) {
    if(rpasswInput !== passw.value){
        showError("rpasswError");
        return false;
    }
    return true;
};


function showError(id) {
    const errorElement = document.getElementById(id)
    errorElement.className = "showError";  
};
function hideError(id) {
    const errorElement = document.getElementById(id)
    errorElement.className = "hideError";
};

async function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users?email=randomEmail@gmail.com")
    .then(Response => Response.json())
    .then(data => console.log(data))
    .catch()
};

submit.onclick = function(){
    getUsers();
};


