import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './index.module.css';

const Myaccount = () => {
  return (
    <div className={styles.myaccount_container}>
      <Link id={styles.config} href="/"><Image src="/config.png" className={styles.config} alt="" width={30} height={30} quality={100}/></Link>
      <Link id={styles.login} href="/logIn"><Image src="/userblue.png" className={styles.userblue} alt="" width={30} height={30} quality={100}/>LogIn </Link>
      <br />
      <Link id={styles.signup} href="./signUp"><Image src="/signup.png" className={styles.signupblue} alt="" width={30} height={30} quality={100}/>SignUp</Link>
      <br />
      <Link id={styles.notification} href="/"><Image src="/notification.png" className={styles.notification} alt="" width={30} height={30} quality={100}/>Notifications</Link>
      <br />
    </div>
  );
};

export default Myaccount;
