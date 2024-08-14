import { auth, db, storage } from './firebase-config.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js';
import {
  doc,
  addDoc,
  collection,
  updateDoc,
  arrayUnion,
} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js';
import { getDownloadURL, ref, uploadBytes } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js';

import { handleImagePreview, redirect } from './utils/utils.js';
import { handleLogout } from './auth.js';

const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', handleLogout);
