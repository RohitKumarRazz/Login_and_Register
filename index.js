const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

form.addEventListener('submit', function(event) {
    let isValid = true;

    // Validate username
    if (username.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        isValid = false;
    } else {
        usernameError.textContent = '';
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Validate password
    if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    // Validate confirm password
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = 'Passwords do not match';
        isValid = false;
    } else {
        confirmPasswordError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
