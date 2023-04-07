import React from 'react';

const themes = {
  brandA: {
    background: '#0000FF',
    fontFamily: 'Arial, sans-serif',
    cta: { background: '#D2B99B', color: '#FFFFFF' },
  },
  brandB: {
    background: '#FF0000',
    fontFamily: 'Times New Roman, serif',
    cta: { background: '#0057B7', color: '#FFFFFF' },
  },
};

export const ThemeContext = React.createContext(themes.brandA);
