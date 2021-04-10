let error = document.getElementsByClassName("error");
let fname = document.getElementById("fname");
let email = document.getElementById("email");
let passw = document.getElementById("passw");
let rpassw = document.getElementById("rpassw");

fname.onblur = function() {
    validateFname(fname.value);
};
fname.onfocus = function() {
    hideError(0);
};
function validateFname(fnameInput){
    var fnameFormat = /[A-Za-z ].{6,}/;
    if (!fnameInput.match(fnameFormat)) {
        changeErrorStyle(0);
        return false;
    }
    return true;
};

email.onblur = function(){
    validateEmail(email.value);
};
email.onfocus = function(){
    hideError(1);
};
function validateEmail(emailInput){
    var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailInput.match(emailformat)) {
        changeErrorStyle(1);
        return false;
    }
    return true;
};

passw.onblur = function() {
    validatePassw(passw.value);
};
passw.onfocus =function() {
    hideError(2);
};
function validatePassw(passwInput) {
    var passwformat = /[a-z]+[0-9]/;
    if (!passwInput.match(passwformat)) {
        changeErrorStyle(2);
        return false;
    }
    return true
};

rpassw.onblur = function() {
    validateRpassw(rpassw.value);
};
rpassw.onfocus = function() {
    hideError(3);
};
function validateRpassw(rpasswInput) {
    if(rpasswInput !== passw.value){
        changeErrorStyle(3);
        return false;
    }
    return true;
};


function changeErrorStyle(index) {
    error[index].style.display = 'unset';  
};
function hideError(index) {
     error[index].style.display = 'none'
};


