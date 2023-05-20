import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.css';

const Options = () => {
  return (
    <div className={styles.options_container}>
      <Link id={styles.login} href="/"><Image src="/dash.png" className={styles.signupblue} alt="" width={30} height={30} quality={100}/>Dashboard</Link>
      <br />
      <Link id={styles.login} href="/"><Image src="/calendar.png" className={styles.signupblue} alt="" width={30} height={30} quality={100}/>Calendar</Link>
      <br />
      <Link id={styles.login} href="/"><Image src="/report.png" className={styles.signupblue} alt="" width={25} height={30} quality={100}/>Reports</Link>
      <br />
      <Link id={styles.login} href="/"><Image src="/goal.png" className={styles.signupblue} alt="" width={30} height={30} quality={100}/>Goals</Link>
      <br />
      <Link id={styles.login} href="/"><Image src="/new.png" className={styles.signupblue} alt="" width={30} height={30} quality={100}/>New Budget</Link>
      <br />
    </div>
  );
};

export default Options;
