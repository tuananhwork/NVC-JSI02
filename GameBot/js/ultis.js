// Handle Toast
export const handleToast = (content, bgColor) => {
  toast.style.display = 'block';
  toast.style.backgroundColor = bgColor;
  toast.textContent = content;
  setTimeout(() => {
    toast.style.display = 'none';
  }, 1000);
};

// Redirect
export const handleRedirect = (target) => {
  setTimeout(() => {
    window.location.href = target;
  });
};
