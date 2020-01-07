let loginButton = document.querySelector('.btn-primary');
let displayIncorrect = document.querySelector('.incorrect');
let usernameSpace = document.getElementById('username');
let passwordSpace = document.getElementById('password');

localStorage.setItem('username', 'johndoe');
localStorage.setItem('password', 'boogle');

let usernameState = localStorage.getItem('username');
let passwordState = localStorage.getItem('password')

function checkUser() {
    let usernameInput = usernameSpace.value;
    let passwordInput = passwordSpace.value;
    if (usernameInput == usernameState && passwordInput == passwordState) {
        window.location.href = 'home.html';
    } else {
        displayIncorrect.textContent = 'Invalid Account';
        displayIncorrect.style.color = 'red';
    }
}

loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    checkUser();
});

document.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkUser();
    }
});


