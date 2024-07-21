// Firebase Version: 10.12.4 !important
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCHlPkTVQrZfbFQuJzhuET8e6ji9xQl_mU',
  authDomain: 'gamebot-jsi02.firebaseapp.com',
  projectId: 'gamebot-jsi02',
  storageBucket: 'gamebot-jsi02.appspot.com',
  messagingSenderId: '266885043425',
  appId: '1:266885043425:web:7cdfd57b16606a34ffd3a0',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
