let errorArray = [];


function formCheck() {
    const formElement = document.getElementsByTagName("form")[0];
    if (!formElement) {
        errorArray.push("Form does not exist");
    };
};

function checkLabelEmail() {
    const labelEmail = document.querySelector(['label[for="email"]']);
    if(!labelEmail) {
        errorArray.push('Email label is missing');
    }
};

function checkInputEmail() {
    const inputEmail = document.querySelector(['input[type="email"][name=email][required]']);
    if(!inputEmail) {
        errorArray.push('E-mail input is missing or incorrect');
    }
};

function checkLabelPassword() {
    const labelPassword = document.querySelector(['label[for="password"]']);
    if(!labelPassword) {
        errorArray.push('Password label is missing');
    }
};

function checkInputPassword() {
    const inputPassword = document.querySelector(['input[type="password"][name="passw"][required]']);
    if(!inputPassword) {
        errorArray.push('Password input is missing or incorrect');
    }
};

function checkLoginButton() {
    const loginButton = document.querySelector(['button[type="submit"]']);
    if(!loginButton) {
        errorArray.push('Missing submit button');
    }
};

function check(){
    const ValidationsResults = document.getElementsByClassName("validationContent")[0];
    if(errorArray.length === 0) {
        ValidationsResults.innerHTML += '<p>Every validation has passed</p>';
    } else {
        for (let i = 0; i < errorArray.length; i++) {
            console.log(errorArray[i]);
            ValidationsResults.innerHTML += '<p>' + errorArray[i] + '</p>';
        }
    }
};
formCheck();
checkLabelEmail();
checkInputEmail();
checkLabelPassword();
checkInputPassword();
check();


// document.getElementsByTagName('form')[0].addEventListener('submit', (e) => {
//     e.preventDefault();
//     showValues();
//     // sendRequest();
//     handleLogin();
// });


// function showValues() {
//     const emailValue = document.getElementById('email').value;
//     const passwValue = document.getElementById('password').value;
//     const valuesToShow = document.getElementsByClassName('validationContent')[0];
//     valuesToShow.innerHTML =
//         `<ul>
//             <li>Email: ${emailValue}</li>
//             <li>Password: ${passwValue}</li>
//         </ul>`;
// };

// function sendRequest() {
//     const emailvalue = document.getElementById('email').value;
//     if(errorArray.length === 0) {
//         fetch(`https://jsonplaceholder.typicode.com/users?email=${emailvalue}`, {
//             method: 'GET'
//         })
//         .then((e) => console.log(e));   
//     } else {
//         console.log('Something is missing')
//     }
// };

// function handleLogin() {
//     const emailValue = document.getElementById("email").value;
//     const passwordValue = document.getElementById("password").value;
//     if(errorArray.length === 0) {
//         fetch(`http://localhost:4000/login`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 email: emailValue,
//                 password: passwordValue
//             })
//         })
//         .then(res => res.json())
//         .then(response => console.log('Success:', response));
//     }
// };