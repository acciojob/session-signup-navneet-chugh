//your JS code here. If required.
const signupForm = document.getElementById('signupForm');

        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Create an object to store user information
            const user = {
                firstName,
                lastName,
                email,
                password
            };

            // Store user information in session storage
            sessionStorage.setItem('user', JSON.stringify(user));

            // Redirect to a new page or perform any other action here
            // For example, you can redirect to a welcome page:
            window.location.href = 'welcome.html';
        });