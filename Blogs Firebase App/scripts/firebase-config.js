// Import các hàm cần thiết từ CDN: initializeApp, getAuth, getFirestore, getStorage
// Firebase Version: 10.12.5
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js';
import { getStorage } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js';

// Firebase Config
const firebaseConfig = {
  apiKey: 'AIzaSyA_291YNPwHlbNZJ51SnH0NbbiLiatwrDI',
  authDomain: 'blogs-firebase-app-nvc-jsi02.firebaseapp.com',
  projectId: 'blogs-firebase-app-nvc-jsi02',
  storageBucket: 'blogs-firebase-app-nvc-jsi02.appspot.com',
  messagingSenderId: '974400360715',
  appId: '1:974400360715:web:d396684b1dd1d9fbf7d20e',
};

// Khởi tạo ứng dụng, export auth, db, storage
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
