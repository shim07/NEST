document.addEventListener('DOMContentLoaded', function() {
    const signupForm = document.getElementById('signupForm');
    
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form from reloading the page

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        // Save the username and password in localStorage (for demonstration purposes)
        const userCredentials = { username: username, password: password };
        localStorage.setItem(username, JSON.stringify(userCredentials));  // Store user data in localStorage

        // Redirect to login page after successful sign-up
        alert('Account created successfully! Please log in.');
        window.location.href = 'login.html';
    });
});
