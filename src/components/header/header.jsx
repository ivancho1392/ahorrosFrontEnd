import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="headerContainer">
      <div id="P1">
        <Image src="/threelines.png" className='threelines' alt="" width={20} height={20} quality={100} />
      </div>
      <div id="P2">
        <a href="/" className="psp">
          Personal Savings Planner
        </a>
      </div>
      <div id="P3">
        <a href="/History" className="navBar font-body">
          History
        </a>
        <a href="/Your Progress" className="navBar font-body">
          Progress
        </a>
        <a href="/Your Goals" className="navBar font-body">
          Goals
        </a>
      </div>
      <div id="P4">
        <Image src="/usuario.jpg" alt="" width={30} height={30} quality={100} />
      </div>
      <div id="P5">
        <a href="/" className="account">
          My Account
        </a>
      </div>
    </header>
  );
};

export default Header;
