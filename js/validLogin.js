const email = document.getElementById("email");
const passw = document.getElementById("password");
const submit = document.getElementsByClassName("submit")[0];
;


email.onblur = function() {
    validateEmail(email.value);
};
email.onfocus = function() {
    hideError('emailError');
};

function validateEmail(emailInput){
    var emailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailInput.match(emailformat)) {
        showError('emailError');
        return false;
    }
    return true;
};

passw.onblur = function() {
    validatePassw(passw.value);
};
passw.onfocus =function() {
    hideError('passwError');
};

function validatePassw(passwInput) {
    var passwformat = /[a-z]+[0-9]/;
    if (!passwInput.match(passwformat)) {
        showError('passwError');
        return false;
    }
    return true
};




function showError(id) {
    const errorElement = document.getElementById(id);
    errorElement.className = 'showError';  
};
function hideError(id) {
    const errorElement = document.getElementById(id);
    errorElement.className = 'hideError';
};


