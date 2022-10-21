let $ = document;
const email = $.getElementById("emailBox");
const submit = $.getElementsByTagName("button");

let emailvalidate = false;

email.addEventListener('input', emailValidation);

function emailValidation() {
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]+');
    if (regex.test(email.value)) {
        email.style.border = "3px solid green";
        emailvalidate = true;
    } else {
        email.style.border = "3px solid red";
        emailvalidate = false;
    }
}

submit.addEventListener('click', submitElem);

function submitElem() {
    if (emailvalidate) {
        alert('ok');
    } else {
        alert('no');
    }
}