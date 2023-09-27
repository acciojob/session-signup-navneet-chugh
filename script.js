// script.js
document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Create an object to store user information
        const user = {
            name,
            email,
            password
        };

        // Store user information in session storage
        sessionStorage.setItem('user', JSON.stringify(user));

        // Redirect to a new page or perform any other action here
        // For example, you can redirect to a welcome page:
        window.location.href = 'welcome.html';
    });
});
