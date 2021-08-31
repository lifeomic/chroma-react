export const canAccessLocalStorage = () => {
  try {
    localStorage.getItem('chroma-react-storage');
    return true;
  } catch {
    return false;
  }
};
