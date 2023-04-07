import React, { Fragment, useContext } from 'react';
import '../css/QuoteBlock.css';
import { ThemeContextBrandA, ThemeContextBrandB } from '../contexts/ThemeContext';
import { boolean, number, text } from '@storybook/addon-knobs';

const QuoteBlock = ({ story, title, subTitle, quote, ctaText,
  underline, containerBackground, texBoxBackground, textColor, ctaTextColor, ctaColor }) => {
  const ThemeBrandA = useContext(ThemeContextBrandA);
  const ThemeBrandB = useContext(ThemeContextBrandB);

  const theme = story === 'BrandA' ? ThemeBrandA : ThemeBrandB;

  const styles = {
    container: {
      backgroundColor: containerBackground || theme.containerBackground,
      fontFamily: theme.fontFamily,
    },
    textBox: {
      backgroundColor: texBoxBackground || theme.texBoxBackground,
      color: textColor || textColor,
    },
    ctaPrimary: {
      backgroundColor: ctaColor || theme.ctaColor,
      color: theme.ctaTextColor,
      border: `1px solid ${ctaColor || theme.ctaColor}`,
    },
    ctaSecondary: {
      border: `1px solid ${ctaColor || theme.ctaColor}`,
      color: ctaColor || theme.ctaColor,
      backgroundColor: "#ffffff"
    },
  };

  return (
    <Fragment>
      <div className="quoteBlock" style={styles.container}>
        <div className='headingSection'>
          <h2 style={styles.textBox} >{title}</h2>
          <p style={styles.textBox}>{subTitle}</p>
          {underline && <span className="headingSectionUnderline"></span>}
        </div>
        <div className='contentSection'>
          <p style={styles.textBox}>{quote}</p>
          <button className="actionFilled" style={styles.ctaPrimary}>
            {ctaText}
          </button> <button className="actionBordered " style={styles.ctaSecondary}>
            {ctaText}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default QuoteBlock;