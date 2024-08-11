// Import auth và các hàm cần thiết
import { auth } from './firebase-config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js';
import { redirect } from './utils/utils.js';

// Viết hàm xử lý đăng nhập
const handleLoginWithEmailAndPassword = (loginForm) => {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log('Login Success!');
      redirect();
    } catch (error) {
      console.error('Login Error:', error.message);
    }
  });
};

// Viết hàm xử lý đăng ký tài khoản (bằng email-password)
const handleSignupWithEmailAndPassword = (signupForm) => {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = signupForm.email.value;
    const password = signupForm.password.value;
    const confirmPassword = signupForm['confirm-password'].value;
    if (confirmPassword === password) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Signup Success!');
        redirect();
      } catch (error) {
        console.error('Signup Error:', error.message);
      }
    } else {
      console.log('Password does not match!');
    }
  });
};

// Viết hàm đăng nhập bằng Google, Github

// Viết hàm xử lý đăng xuất

// Xử lý
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

if (loginForm) handleLoginWithEmailAndPassword(loginForm);
if (signupForm) handleSignupWithEmailAndPassword(signupForm);
