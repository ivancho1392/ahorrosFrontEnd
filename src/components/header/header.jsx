import React, { useState } from 'react';
import Image from 'next/image';
import MyaccountWrapper from '../myaccount/myaccountWrapper';
import OptionsWrapper from '../options/optionsWrapper';

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
    <header className="headerContainer">
      <div id="P1">
      <OptionsWrapper showOptions={showOptions} />
        <Image src="/threelines.png" onClick={handledOptions} className="threelines" alt="" width={20} height={20} quality={100} />
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
        <Image src="/usuario.jpg" className="user" alt="" width={30} height={30} quality={100} onClick={handledMyaccount} />
      </div>
      <div id="P5">
        <a className="account" onClick={handledMyaccount}>My Account</a>
        <MyaccountWrapper showMyaccount={showMyaccount} />
      </div>
    </header>
  );
};

export default Header;
