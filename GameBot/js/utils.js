const toast = document.querySelector('.toast');

// Handle Toast
export const handleToast = (content, bgColor, timeEnd = 1000) => {
  toast.style.display = 'block';
  toast.style.backgroundColor = bgColor;
  toast.textContent = content;
  setTimeout(() => {
    toast.style.display = 'none';
  }, timeEnd);
};

// Redirect
export const handleRedirect = (target, timeEnd = 1000) => {
  setTimeout(() => {
    window.location.href = target;
  }, timeEnd);
};
