let loginButton = document.querySelector('.btn-primary');
let displayIncorrect = document.querySelector('.incorrect');
let usernameSpace = document.getElementById('username');
let passwordSpace = document.getElementById('password');

let loginDetails = {username: 'johndoe', password: 'boogle'};

function checkUser(){
    let usernameInput = usernameSpace.value;
    let passwordInput = passwordSpace.value;
    if (usernameInput == loginDetails.username && passwordInput == loginDetails.password) {
        window.location.href = 'home.html';
    } else {
        displayIncorrect.textContent = 'Invalid Account';
        displayIncorrect.style.color = 'red';
    }
}

loginButton.addEventListener('click', checkUser);




