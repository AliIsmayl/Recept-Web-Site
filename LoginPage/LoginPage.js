document.addEventListener("DOMContentLoaded", function() {
    var loginForm = document.querySelector(".loginForm");
    var registerForm = document.querySelector(".registerForm");

    var toggleToRegister = document.querySelector(".toggleToRegister");
    var toggleToLogin = document.querySelector(".toggleToLogin");

    toggleToRegister.addEventListener("click", function() {
        loginForm.style.display = "none";
        registerForm.style.display = "flex";
    });

    toggleToLogin.addEventListener("click", function() {
        loginForm.style.display = "flex";
        registerForm.style.display = "none";
    });
});
