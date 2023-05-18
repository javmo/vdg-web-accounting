import React from 'react';

const TextSnippet = ({ text, firstChars, lastChars }) => {
  const truncatedText = `${text.substring(0, firstChars)}...${text.substring(text.length - lastChars)}`;

  return (
    <span className='div-wallet-info-p'>
      Wallet: {truncatedText}
    </span>
  );
};

export default TextSnippet;
