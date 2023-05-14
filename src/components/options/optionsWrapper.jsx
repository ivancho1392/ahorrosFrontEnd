import React from 'react';
import Options from './options';

const OptionsWrapper = ({ showOptions }) => {
  if (!showOptions) {
    return null;
  }

  return (
    <div className='options-wrapper'>
        <Options />
    </div>
  );
};

export default OptionsWrapper;
