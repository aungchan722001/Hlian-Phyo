document.addEventListener('DOMContentLoaded', function () {
    const signupButton = document.getElementById('signupButton');

    signupButton.addEventListener('click', function () {
        // Redirect to login.html
        window.location.href = 'login.html';
    });
});