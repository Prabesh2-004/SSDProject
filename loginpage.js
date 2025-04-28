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


//selecting login data and storing in local storage

const signupUsername = document.getElementById('signup-username');
const signupEmail = document.getElementById('signup-email');
const signupPassword = document.getElementById('signup-password');
const signupButton = document.querySelector('.signup-button');
const display = document.querySelector('.display');

let userData = [];
const saveddataget = JSON.parse(localStorage.getItem('userData'));

// try{
//     const savedData = localStorage.getItem('userData');
//     userData = JSON.parse(savedData);

//     if (!userData || typeof userData !== 'object') {
//         throw new Error('Invalid userData');
//     }
// } catch (error) {
//     // Reset localStorage and initialize userData with default values
//     userData = {
//         Username: '',
//         Email: '',
//         Password: '',
//     };
//     localStorage.removeItem('userData');
//     console.error('Error parsing userData from localStorage:', error);
// }
signupButton.addEventListener('click', () => {
    const signupUsernameValue = signupUsername.value;
    const signupEmailValue = signupEmail.value;
    const signupPasswordValue = signupPassword.value;
    for(let i=0;i<userData.length;i++){
        const {Username, Email, Password} = userData[i];
        return Username, Email, Password;
    }

    // userData.Username += signupUsernameValue;
    // userData.Email += signupEmailValue;
    // userData.Password += signupPasswordValue;

    userData.push({Username:signupUsernameValue, Email:signupEmailValue,Password:signupPasswordValue});

    // localStorage.setItem('userData', JSON.stringify(userData));
    localStorage.setItem('userData', JSON.stringify(userData));

    console.log(saveddataget);
});

// selecting sign in inputs
const signinUsername = document.getElementById('signin-username');
const signinPassword = document.getElementById('signin-password');
const signinButton = document.querySelector('.signin-button');

// console.log(localStorage);

signinButton.addEventListener('click', () => {
    const signinUsernameValue = signinUsername.value;
    const signinPasswordValue = signinPassword.value;
    if(userData.Username === signinUsernameValue && userData.Password === signinPasswordValue){
        console.log(signinUsernameValue);
    }
    else{
        console.log('Username or password is incorrect');
    }
});
// console.log(saveddataget)
