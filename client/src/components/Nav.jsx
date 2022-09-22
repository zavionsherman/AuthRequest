import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="flex py-5 px-7 justify-between items-center border-b-2">
      <div className="logo">
        <img src="/logo_phcn_final.png" alt="logo" />
      </div>
      <div className="">
        <Link to={'/status'}>Check Referral Status</Link> 
      </div>
    </nav>
  );
};

export default Nav;
