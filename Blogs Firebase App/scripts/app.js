import { checkUserAuthentication } from './utils/utils.js';
import { handleLogout } from './auth.js';
import { auth } from './firebase-config.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js';

document.addEventListener('DOMContentLoaded', checkUserAuthentication);

const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', handleLogout);

// Hiển thị tất cả các bài viết trong collection "posts" (cho trang index.html):
