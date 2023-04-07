import React, { useContext } from 'react';
import './QuoteBlock.css';
import { ThemeContext } from '../../contexts/ThemeContext';

const QuoteBlock = ({ title, quote, ctaText, underline, bgConfig, textBoxBgColor, textColor }) => {
  const theme = useContext(ThemeContext);

  const styles = {
    container: {
      backgroundColor: bgConfig || theme.background,
      fontFamily: theme.fontFamily,
    },
    textBox: {
      backgroundColor: textBoxBgColor,
      color: textColor,
    },
    cta: {
      backgroundColor: theme.cta.background,
      color: theme.cta.color,
    },
  };

  return (
    <div className="quote-block" style={styles.container}>
      <h2 className={`title ${underline ? 'underline' : ''}`}>{title}</h2>
      <div className="quote-text" style={styles.textBox}>
        {quote}
      </div>
      <button className="cta" style={styles.cta}>
        {ctaText}
      </button>
    </div>
  );
};

export default QuoteBlock;