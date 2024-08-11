import { checkUserAuthentication } from './utils/utils.js';
import { handleLogout } from './auth.js';

document.addEventListener('DOMContentLoaded', checkUserAuthentication);

const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', handleLogout);

// Thực hiện các tính năng sau cho dashboard.html và create-post.html

// Tạo bài viết mới

// Hiển thị danh sách bài viết

// Xóa bài viết
