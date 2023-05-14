import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Options = () => {
  return (
    <div className='options_container'>
      <Link id="login" href="/config"><Image src="/dash.png" className="signupblue" alt="" width={30} height={30} quality={100}/>Dashboard</Link>
      <br />
      <Link id="login" href="/LogIn"><Image src="/calendar.png" className="signupblue" alt="" width={30} height={30} quality={100}/>Calendar</Link>
      <br />
      <Link id="login" href="/signUp"><Image src="/report.png" className="signupblue" alt="" width={25} height={30} quality={100}/>Reports</Link>
      <br />
      <Link id="login" href="/signUp"><Image src="/goal.png" className="signupblue" alt="" width={30} height={30} quality={100}/>Goals</Link>
      <br />
      <Link id="login" href="/notification"><Image src="/new.png" className="signupblue" alt="" width={30} height={30} quality={100}/>New Budget</Link>
      <br />
    </div>
  );
};

export default Options;
