import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import { MdOutlineSecurity } from "react-icons/md";

import GitHub from "./GitHub";
import Button from "./ui/Button";

export default function Navbar(props) {
  const navigate = useNavigate();
  return (
    <nav className="w-full flex justify-between px-6 py-2 text-1xl bg-white shadow-md fixed top-0 left-0">
      <Link to="/" className="flex items-center -ml-4">
        {/* 대충 로고 */}
        {/*<MdOutlineSecurity className="text-3xl text-brand" />*/}
        <img
          className="w-14 mt-1"
          src="/images/logo.png"
          alt="security logo"
        ></img>
        <h1 className="font-bold text-2xl whitespace-nowrap">YourCode-X</h1>
      </Link>
      <div className="flex space-x-10 items-center">
        <Button text="Menu1" onClick={() => navigate(`mains/menu1`)} />
        <Button text="Menu2" onClick={() => navigate(`mains/menu2`)} />
        <GitHub />
      </div>
    </nav>
  );
}
