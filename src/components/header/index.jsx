import React, { useState } from 'react';
import Image from 'next/image';
import MyaccountWrapper from '../myaccount/myaccountWrapper';
import OptionsWrapper from '../options/optionsWrapper';
import styles from './index.module.css';

const Header = () => {
  const [showMyaccount, setShowMyaccount] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const handledMyaccount = () => {
    setShowOptions(false);
    setShowMyaccount((prev) => !prev);
  };

  const handledOptions = () => {
    setShowMyaccount(false);
    setShowOptions((prev) => !prev);
  };

  return (
    <header className={styles.headerContainer}>
      <div id={styles.P1}>
      <OptionsWrapper showOptions={showOptions} />
        <Image src="/threelines.png" onClick={handledOptions} className={styles.threelines} alt="" width={20} height={20} quality={100} />
      </div>
      <div id={styles.P2}>
        <a href="/" className={styles.psp}>
          Personal Savings Planner
        </a>
      </div>
      <div id={styles.P3}>
        <a href="/" className={styles.navBar}>
          History
        </a>
        <a href="/" className={styles.navBar}>
          Progress
        </a>
        <a href="/" className={styles.navBar}>
          Goals
        </a>
      </div>
      <div id={styles.P4}>
        <Image src="/usuario.jpg" className={styles.user} alt="" width={30} height={30} quality={100} onClick={handledMyaccount} />
      </div>
      <div id={styles.P5}>
        <a className={styles.account} onClick={handledMyaccount}>My Account</a>
        <MyaccountWrapper showMyaccount={showMyaccount} />
      </div>
    </header>
  );
};

export default Header;
