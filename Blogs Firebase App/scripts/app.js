import { checkUserAuthentication } from './utils/utils.js';
import { handleLogout } from './auth.js';

document.addEventListener('DOMContentLoaded', checkUserAuthentication);

const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', handleLogout);

// Hiển thị tất cả các bài viết trong collection "posts" (cho trang index.html):
