import { auth } from './firebase-config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js';

const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

console.log(loginForm, registerForm);

registerForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  const name = registerForm.registerName.value;
  const username = registerForm.registerUsername.value;
  const email = registerForm.registerEmail.value;
  const password = registerForm.registerPassword.value;
  const repeatPassword = registerForm.registerRepeatPassword.value;
  console.log(name, username, email, password, repeatPassword);
});
