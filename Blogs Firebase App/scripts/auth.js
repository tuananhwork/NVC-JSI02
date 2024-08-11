// Import auth và các hàm cần thiết
import { auth } from './firebase-config.js';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
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
const handleGoogleLogin = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log('Login with Google Success!');
      redirect();
    })
    .catch((e) => {
      console.log(e.message);
    });
};

const handleGithubLogin = () => {
  const provider = new GithubAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log('Login with Github Success!');
      redirect();
    })
    .catch((e) => {
      console.log(e.message);
    });
};

// Viết hàm xử lý đăng xuất
export const handleLogout = () => {
  signOut(auth)
    .then(() => {
      console.log('Logout Success!');
      redirect();
    })
    .catch((e) => {
      console.log('Logout Error:', e.message);
    });
};

// Xử lý với DOM
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const googleButton = document.getElementById('googleLogin');
const githubButton = document.getElementById('githubLogin');

if (loginForm) handleLoginWithEmailAndPassword(loginForm);
if (signupForm) handleSignupWithEmailAndPassword(signupForm);
if (googleButton) googleButton.addEventListener('click', handleGoogleLogin);
if (githubButton) githubButton.addEventListener('click', handleGithubLogin);
