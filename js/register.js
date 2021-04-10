let errorArray = [];
let hidden = document.getElementsByClassName("hidden");

function formCheck() {
    let elements = ["fname", "email", "passw", "rpassw", "button1", "button2"];
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (!document.getElementsByClassName("elem")) {
            errorArray.push("Element " + element + " does not exists");
            hidden.append("Element " + element + " does not exists");
        }
    }
};

function checkLabelFullName() {
    const labelFullName = document.querySelector('label[for="fname"]');
    if (!labelFullName) {
        errorArray.push('Full name label is missing');
    }
};

function checkInputFullName() {
    const inputFullName = document.querySelector(['input[type="text"][name="fname"][required]']);
    if (!inputFullName) {
        errorArray.push('Full name input is missing or is incorrect');
    }
};

function checkLabelEmail() {
    const labelEmail = document.querySelector(['label[for="email"]']);
    if (!labelEmail) {
        errorArray.push('Email label is missing');
    }
};

function checkInputEmail() {
    const inputEmail = document.querySelector(['input[type="email"][name="email"][required]']);
    if (!inputEmail) {
        errorArray.push('Email input is missing or is incorrect');
    }
};

function checkLabelPassword() {
    const labelPassword = document.querySelector(['label[for="passw"]']);
    if (!labelPassword) {
        errorArray.push('Password label is missing');
    }
};

function checkInputPassword() {
    const inputPassword = document.querySelector(['input[type="password"][name="passw"][required]']);
    if (!inputPassword) {
        errorArray.push('Password input is missing or is incorrect');
    }
};

function checkLabelRepeatPassword() {
    const labelRepeatPassword = document.querySelector(['label[for="rpassw"]']);
    if (!labelRepeatPassword) {
        errorArray.push('Repeat password label is missing');
    }
};

function checkInputRepeatPassword() {
    const inputRepeatPassword = document.querySelector(['input[type="password"][name="rpassw"][required]']);
    if (!inputRepeatPassword) {
        errorArray.push('Repeat password input is missing or is incorrect');
    }
};

function checkSubmitButton() {
    const submitButton = document.querySelector(['button[type="submit"]']);
    if (!submitButton) {
        errorArray.push('Missing submit button')
    }
};

function checkResetButton() {
    const checkResetButton = document.querySelector(['button[type="reset"]']);
    if (!checkResetButton) {
        errorArray.push('Missing reset button');
    }
};

function checkSubmitFormBtn() {
    const checkSubmitForm = document.querySelector(['button[type="button"]']);
    if (!checkSubmitForm) {
        errorArray.push('Missing submit button');
    }
};

function setValidationsResult() {
    const validationsResults = document.getElementsByClassName("validationContent");
    if (errorArray.length === 0) {
        validationsResults.innerHTML += '<p>Every validation has passed</p>';
    } else {
        for (let i = 0; i < errorArray.length; i++) {
            validationsResults.innerHTML += '<p>' + errorArray[i] + '</p>';
        }
    }
};

formCheck();
checkLabelFullName();
checkInputFullName();
checkLabelEmail();
checkInputEmail();
checkLabelPassword();
checkInputPassword();
checkLabelRepeatPassword();
checkInputRepeatPassword();
checkSubmitButton();
checkResetButton();
setValidationsResult();