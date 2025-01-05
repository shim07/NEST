document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form from reloading the page

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Get the stored credentials from localStorage
        const storedUserData = JSON.parse(localStorage.getItem(username));

        // Check if the user exists and the password matches
        if (storedUserData && storedUserData.password === password) {
            // Save the username in localStorage for future sessions
            localStorage.setItem('loggedInUser', username);
            window.location.href = 'home.html';  // Redirect to the main page after successful login
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});
