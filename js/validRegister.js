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

document.getElementsByTagName('form')[0].addEventListener('submit', (e) => {
    e.preventDefault();
    showValues();
    handleRegister();
});

function showValues() {
    const fnameValue = document.getElementById('fname').value
    const emailValue = document.getElementById('email').value;
    const passwValue = document.getElementById('passw').value;
    const rpasswValue = document.getElementById('rpassw').value;
    const valuesToShow = document.getElementsByClassName('validationContent')[0];
    valuesToShow.innerHTML =
        `<ul>
            <li>Full Name: ${fnameValue}</li>
            <li>Email: ${emailValue}</li>
            <li>Password: ${passwValue}</li>
            <li>Repeat Password: ${rpasswValue}</li>
        </ul>`;
};

function handleRegister() {
    const fnameValue = document.getElementById("fname").value;
    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("passw").value;
    fetch(`http://localhost:4000/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fname: fnameValue,
            email: emailValue,
            password: passwordValue
        })
    })
    .then(res => res.json())
    .then(response => console.log('Success:', response));
};

