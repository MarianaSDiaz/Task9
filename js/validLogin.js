const error = document.getElementsByClassName("error");
const email = document.getElementById("email");
const passw = document.getElementById("password");
const submit = document.getElementsByClassName("submit")[0];

email.onblur = function() {
    validateEmail(email.value);
};
email.onfocus = function() {
    hideError(0)
};

function validateEmail(emailInput){
    var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailInput.match(emailformat)) {
        changeErrorStyle(0);
        return false;
    }
    return true;
};

passw.onblur = function() {
    validatePassw(passw.value);
};
passw.onfocus =function() {
    hideError(1);
};

function validatePassw(passwInput) {
    var passwformat = /[a-z]+[0-9]/;
    if (!passwInput.match(passwformat)) {
        changeErrorStyle(1);
        return false;
    }
    return true
};




function changeErrorStyle(index) {
    error[index].style.display = 'unset';  
};
function hideError(index) {
     error[index].style.display = 'none'
};


