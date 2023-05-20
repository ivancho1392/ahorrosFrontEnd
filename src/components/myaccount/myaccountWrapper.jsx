import React from 'react';
import Myaccount from './myaccount';
import styles from './index.module.css';

const MyaccountWrapper = ({ showMyaccount }) => {
  if (!showMyaccount) {
    return null;
  }

  return (
    <div className={styles.myaccount_wrapper}>
        <Myaccount />
    </div>
  );
};

export default MyaccountWrapper;
