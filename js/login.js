let errorArray = [];

function formCheck() {
    let elements = ["email", "passw", "buttons"];
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (!document.getElementById(element)) {
            errorArray.push("Element " + element + " does not exists");
        }
    }

    //THIS IS ANOTHER WAY TO DO IT BUT YOU DON'T KNOW WHICH IS THE MISSING ELEMENT
    // const formElements = document.getElementsByTagName("form")[0];
    // if (formElements.length != 3) {
    //     errorArray.push("form is not complete");
    // }; 
    console.log(errorArray);
};
formCheck();


