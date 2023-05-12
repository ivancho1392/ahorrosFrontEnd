import React from 'react';
import Image from 'next/image';

const SignupPage = () => {

  return (
    <div>
      <div className="logoSoinver" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', marginTop: '32px' }}>
        <Image src="/logo-soinver.png" alt="" width={192} height={192} quality={90} style={{ height: 'auto' }} />
      </div>
      <div className="form-container">
        <div className="titulo" style={{ fontFamily: 'Arial, sans-serif' }}>
          <h1>Create a new account</h1>
        </div>
        <form>
          <label htmlFor="email" style={{ fontFamily: 'Arial, sans-serif' }}>
            Your email:
          </label>
          <input type="text" id="email" name="email" placeholder="name@email.com" style={{ fontFamily: 'Arial, sans-serif' }} />
          <br />
          <label htmlFor="password" style={{ fontFamily: 'Arial, sans-serif' }}>
            Password:
          </label>
          <input type="password" id="password" name="password" placeholder="*********" style={{ fontFamily: 'Arial, sans-serif' }} />
          <br />
          <label htmlFor="password" style={{ fontFamily: 'Arial, sans-serif' }}>
            Repet Password:
          </label>
          <input type="password" id="password" name="password" placeholder="*********" style={{ fontFamily: 'Arial, sans-serif' }} />
          <br />
          <input className="boton-login" type="submit" value="Sign up" style={{ fontFamily: 'Arial, sans-serif' }} />
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
