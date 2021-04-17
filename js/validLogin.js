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

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    showValues();
    handleLogin();
});

function showValues() {
    const emailValue = document.getElementById('email').value;
    const passwValue = document.getElementById('password').value;
    const valuesToShow = document.getElementsByClassName('validationContent')[0];
    valuesToShow.innerHTML =
        `<ul>
            <li>Email: ${emailValue}</li>
            <li>Password: ${passwValue}</li>
        </ul>`;
};

function handleLogin() {
    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;
    fetch(`http://localhost:4000/login`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: emailValue,
            password: passwordValue
        })
    })
    .then(res => res.json())
    .then(response => console.log('Success:', response));
};

