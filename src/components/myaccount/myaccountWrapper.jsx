import React from 'react';
import Myaccount from './myaccount';

const MyaccountWrapper = ({ showMyaccount }) => {
  if (!showMyaccount) {
    return null;
  }

  return (
    <div className='myaccount-wrapper'>
        <Myaccount />
    </div>
  );
};

export default MyaccountWrapper;
