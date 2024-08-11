import { auth } from '../firebase-config.js';

import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js';

export const redirect = (target = 'index.html', time = 1000) => {
  setTimeout(() => {
    window.location.href = target;
  }, time);
};

export const checkUserAuthentication = () => {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      console.log('User is not signed in, redecting to login...');
      redirect('login.html');
    } else {
      console.log('User is signed in:', user);
    }
  });
};
