import React, { createContext, useMemo, useState } from 'react';

export const ThemeContext = createContext({ isDark: false });

// eslint-disable-next-line react/prop-types
export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
