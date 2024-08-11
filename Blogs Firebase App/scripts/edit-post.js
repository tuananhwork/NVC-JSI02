import { checkUserAuthentication } from './utils/utils.js';
import { handleLogout } from './auth.js';

document.addEventListener('DOMContentLoaded', checkUserAuthentication);

const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', handleLogout);

// Thực hiện chức năng edit post cho edit-post.html
