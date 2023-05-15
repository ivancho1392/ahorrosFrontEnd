import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Myaccount = () => {
  return (
    <div className='myaccount_container'>
      <Link id="config" href="/"><Image src="/config.png" className="config" alt="" width={30} height={30} quality={100}/></Link>
      <Link id="login" href="/"><Image src="/userblue.png" className="userblue" alt="" width={30} height={30} quality={100}/>LogIn </Link>
      <br />
      <Link id="signup" href="/"><Image src="/signup.png" className="signupblue" alt="" width={30} height={30} quality={100}/>SignUp</Link>
      <br />
      <Link id="notification" href="/"><Image src="/notification.png" className="notification" alt="" width={30} height={30} quality={100}/>Notifications</Link>
      <br />
    </div>
  );
};

export default Myaccount;
