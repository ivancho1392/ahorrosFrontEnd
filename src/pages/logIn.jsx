import React from 'react';
import styles from './logIn.module.css'

const SignInPage = () => {
  return (
    <div>
      <div className={styles.container_sign_in}>
      <div className={styles.overlay}></div>
        <div>
          
          <form className={styles.content}>
          <h2>Log In to your account</h2>
            <label className={styles.label} htmlFor="email" >
              Your email:
            </label>
            <input type="text" id="email" name="email" placeholder="name@email.com" />
            <br />
            <label className={styles.label} htmlFor="password" >
              Password:
            </label>
            <input type="password" id="password" name="password" placeholder="*********" />
            <br />
            <input className={styles.boton_signup} type="submit" value="Sign In" />
          </form>
        </div>
        </div>
    </div>
  );
};

export default SignInPage;
