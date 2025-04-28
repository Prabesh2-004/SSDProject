const signupBtn = document.querySelectorAll('.signup-button-js');
const signupBox = document.querySelector('.signup-box-container');
const signupLink = document.querySelector('.signup-link-js');
const signinLink = document.querySelector('.signin-link-js');
const signinBox = document.querySelector('.signin-box-container');

signupBtn.forEach((button) => {
    button.addEventListener('click', () => {
        signupBox.classList.add('active');
        signinBox.classList.remove('active');
        signupBox.style.display = 'flex';
        signinBox.style.display = 'none';
    });
});

signupLink.addEventListener('click', () => {
    signupBox.classList.add('active');
    signinBox.classList.remove('active');
    signupBox.style.display = 'flex';
    signinBox.style.display = 'none';
});

signinLink.addEventListener('click', () => {
    signinBox.classList.add('active');
    signupBox.classList.remove('active');
    signinBox.style.display = 'flex';
    signupBox.style.display = 'none';
});

// Close Containers When Clicking Outside Login Box
signupBox.addEventListener('click', (e) => {
    if (!e.target.closest('.login-box')) {
        signupBox.style.display = 'none';
    }
});

signinBox.addEventListener('click', (e) => {
    if (!e.target.closest('.login-box')) {
        signinBox.style.display = 'none';
    }
});


// Selecting login data and storing in local storage

const signupUsername = document.getElementById('signup-username');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupButton = document.querySelector('.signup-button');
const display = document.querySelector('.display');

// Initialize userData array from localStorage or as an empty array
let userData = JSON.parse(localStorage.getItem('userData')) || [];

// Event listener for the signup button
signupButton.addEventListener('click', () => {
    const signupUsernameValue = signupUsername.value.trim();
    const signupEmailValue = signupEmail.value.trim();
    const signupPasswordValue = signupPassword.value.trim();

    // Validate input fields
    if (!signupUsernameValue || !signupEmailValue || !signupPasswordValue) {
        alert('All fields are required!');
        return;
    }

    // Check if the email is already registered
    const isEmailRegistered = userData.some(user => user.Email === signupEmailValue);
    if (isEmailRegistered) {
        alert('This email is already registered!');
        return;
    }

    // Add new user data to the array
    userData.push({
        Username: signupUsernameValue,
        Email: signupEmailValue,
        Password: signupPasswordValue
    });

    // Save updated userData array to localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Clear input fields
    signupUsername.value = '';
    signupEmail.value = '';
    signupPassword.value = '';

    alert('Sign-up successful!');
    console.log('Updated userData:', userData);
});

const signinEmail = document.getElementById('signin-email');
const signinpassword = document.getElementById('signin-password');
const signinButton = document.querySelector('.signin-button');

signinButton.addEventListener('click', () => {
    const signinEmailValue = signinEmail.value.trim();
    const signinPasswordValue = signinpassword.value.trim();

    // Check if the email and password match any user in the userData array
    const isValidUser = userData.some(user => 
        user.Email === signinEmailValue && user.Password === signinPasswordValue
    );

    if (isValidUser) {
        console.log("Yoo what's up!");
    } else {
        console.log("Invalid email or password");
    }
    signinBox.style.display = 'none';
});