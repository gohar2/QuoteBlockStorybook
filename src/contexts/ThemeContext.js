import React from 'react';

const themes = {
  brandA: {
    containerBackground: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    texBoxBackground: '#ffffff',
    textColor: '#282828',
    ctaColor: '#D2B99B',
    ctaTextColor: '#ffffff'

  },
  brandB: {
    containerBackground: '#F6F6F6',
    fontFamily: 'Arial, sans-serif',
    texBoxBackground: '#ffffff',
    textColor: '#0057B7  ',
    ctaColor: '#0057B7',
    ctaTextColor: '#ffffff'

  },
};

export const ThemeContextBrandA = React.createContext(themes.brandA);
export const ThemeContextBrandB = React.createContext(themes.brandB);


