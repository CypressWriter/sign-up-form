let passwordField = document.querySelector("#user_password");
let passwordConfirmField = document.querySelector("#confirm_password");

let submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", () => {
    check(passwordField.value, passwordConfirmField.value);
});

function check(val1, val2) {
    if (val1 === val2) return;
    else {
        alert("Passwords do not match");
    }
};