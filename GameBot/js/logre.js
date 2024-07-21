import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js';
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

// Handle Toast
const handleToast = (content, bgColor) => {
  toast.style.display = 'block';
  toast.style.backgroundColor = bgColor;
  toast.textContent = content;
  setTimeout(() => {
    toast.style.display = 'none';
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
    handleToast('Register Success!', 'green');
  } catch (error) {
    handleToast(error.message, 'red');
  }
});

// Login User
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    handleToast('Login Success!', 'green');
  } catch (error) {
    handleToast(error.message, 'red');
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
