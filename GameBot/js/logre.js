import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js';
import { auth } from './firebase-config.js';

const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const container = document.querySelector('.container');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const toast = document.querySelector('.toast');

(function handleUI() {
  signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
  });

  signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
  });
})();

// Handle go to Home page
const redirectHome = () => {
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1000);
};

// Register User
registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('registerName').value;
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  console.log(email, password);

  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    toast.innerHTML = 'Login Success!';
    toast.style.display = 'block';
    toast.style.backgroundColor = 'green';
    redirectHome();
  } catch (error) {
    toast.innerHTML = error.message;
    toast.style.display = 'block';
    toast.style.backgroundColor = 'red';
  }
});

// Login User
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Retrieve stored users data
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

  // Check if user exists and password matches
  const user = storedUsers.find((user) => user.email === email && user.password === password);
  if (user) {
    alert('Login successful');
    // Save user object with login status
    user.isLoggedIn = true;
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    // Redirect to the main page after successful login
    window.location.href = 'index.html';
  } else {
    alert('Invalid email or password');
  }
});

// Check login status
window.addEventListener('load', () => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  if (loggedInUser && loggedInUser.isLoggedIn) {
    // If logged in, redirect to main page
    window.location.href = 'index.html';
  }
});

// Clear old data
localStorage.removeItem('loggedInUser');
