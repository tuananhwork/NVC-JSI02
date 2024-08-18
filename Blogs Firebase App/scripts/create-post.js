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

handleImagePreview('image', 'imagePreview');

onAuthStateChanged(auth, (user) => {
  if (user) {
    // Có thể tạo bài viết mới
    const createPost = async (postForm) => {
      postForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const title = postForm.title.value;
        const content = postForm.content.value;
        const image = postForm.image.files[0];

        console.log(title, content, image);
      });
    };

    const postForm = document.getElementById('createPostForm');
    createPost(postForm);
  } else {
  }
});
