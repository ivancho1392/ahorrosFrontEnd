import React from 'react';
import styles from './signUp.module.css'

const SignupPage = () => {
  return (
    <div>
      <div className={styles.container_sign_up}>
      <div className={styles.overlay}></div>
        <div>
          
          <form className={styles.content}>
          <h2>Create a new account</h2>
            <label className={styles.label} htmlFor="email">
              Your email:
            </label>
            <input type="text" id="email" name="email" placeholder="name@email.com" />
            <br />
            <label className={styles.label} htmlFor="password">
              Password:
            </label>
            <input type="password" id="password" name="password" placeholder="*********" />
            <br />
            <label className={styles.label} htmlFor="password" >
              Repet Password:
            </label>
            <input type="password" id="password" name="password" placeholder="*********"  />
            <br />
            <input className={styles.boton_signup} type="submit" value="Sign up"  />
          </form>
        </div>
        </div>
    </div>
  );
};

export default SignupPage;
