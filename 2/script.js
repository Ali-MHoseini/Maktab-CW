let $ = document;
const email = $.getElementById("userPassword");
const password = $.getElementById("userEmail");
const submit = $.getElementById("submit");

let emailvalidate = false;
let passwordvalidate = false;

email.addEventListener('input', emailValidation);

function emailValidation() {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]+');
    if (regex.test(email.value)) {
        email.style.border = "3px solid green"
        emailvalidate = true
    } else {
        email.style.border = "3px solid red"
        emailvalidate = false
    }
}

password.addEventListener('input', passwordElem);

function passwordElem() {

    let minMaxLength = /^[\s\S]{8,32}$/,
        upper = /[A-Z]/,
        lower = /[a-z]/,
        number = /[0-9]/,
        special = /[ !"#$%&'()*+,\-./:;?@[\\\]^_`{|}~]/;
    if (minMaxLength.test(password.value) &&
        upper.test(password.value) &&
        lower.test(password.value) &&
        number.test(password.value) &&
        special.test(password.value)
    ) {
        password.style.border = '3px solid green';
        passwordvalidate = true;
    } else {
        password.style.border = '3px solid red';
        passwordvalidate = false;
    }
}

submit.addEventListener('click', submitElem);

function submitElem() {
    if (emailvalidate && passwordvalidate) {
        alert('sign up')
    } else {
        alert('please nedonam chishi')
    }
}