/* 
    step-1: add click event handler with the submit button
    step-2: get the email address inside the email input field
    step-3: get password
    step-4: verify email and password check whether valid user or not
*/

document.getElementById("submit-btn").addEventListener("click", function() {
    // always remember to use .value to get text form an input field
    const emailField = document.getElementById("user-email");
    const inputEmail = emailField.value;
    
    const passwordField = document.getElementById("user-password");
    const inputPassword = passwordField.value;
    
    // DANGER: DO NOT VERIFY email & password on the client side
    if(inputEmail === 'bank@gmail.com' && inputPassword === "bank123") {
        window.location.href = "bank.html"
    }
    else {
        alert("Invalid User");
    }
})