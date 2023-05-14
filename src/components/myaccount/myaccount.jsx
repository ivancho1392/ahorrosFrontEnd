import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Myaccount = () => {
  return (
    <div className='myaccount_container'>
      <Link id="login" href="/LogIn"><Image src="/userblue.png" className="userblue" alt="" width={30} height={30} quality={100}/>LogIn </Link>
      <br />
      <Link id="signup" href="/signUp"><Image src="/signup.png" className="signupblue" alt="" width={30} height={30} quality={100}/>SignUp</Link>
      <br />
    </div>
  );
};

export default Myaccount;
