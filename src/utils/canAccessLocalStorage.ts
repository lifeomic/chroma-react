export const canAccessLocalStorage = () => {
  try {
    localStorage.getItem('test');
    return true;
  } catch {
    return false;
  }
};
