import { useState } from 'react';

const useTheme = () => {
  const [localTheme, _setLocalTheme] = useState(!!localStorage.localTheme);
  const setLocalTheme = (value) => {
    localStorage.localTheme = value ? 1 : '';
    _setLocalTheme(value);
  };
  return {
    localTheme,
    setLocalTheme,
  };
};

export default useTheme;
