import { checkUserAuthentication } from './utils/utils.js';
import { handleLogout } from './auth.js';

document.addEventListener('DOMContentLoaded', checkUserAuthentication);

const logoutButton = document.getElementById('logout');
logoutButton.addEventListener('click', handleLogout);
