import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

const useTheme = () => {
  // eslint-disable-next-line no-undef
  const value = useContext(ThemeContext);

  return value;
};

export default useTheme;
