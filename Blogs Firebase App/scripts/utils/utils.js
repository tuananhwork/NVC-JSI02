export const redirect = (target = 'index.html', time = 1000) => {
  setTimeout(() => {
    window.location.href = target;
  }, time);
};
