import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsYoutube } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import GitHub from "./GitHub";
import Button from "./ui/Button";

export default function Navbar(props) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`w-full  md:flex justify-between px-6 py-2 text-1xl bg-white shadow-md fixed top-0 left-0 z-10`}
    >
      <Link to="/" className="flex items-center -ml-4">
        {/* 대충 로고 */}
        {/*<MdOutlineSecurity className="text-3xl text-brand" />*/}
        <img
          className="w-14 mt-1 drop-shadow-md"
          src="/images/logo.png"
          alt="security logo"
        ></img>
        <h1 className="font-bold text-2xl drop-shadow-md whitespace-nowrap">
          YourCode-X
        </h1>
      </Link>
      <div className={`flex space-x-10 items-center`}>
        <Button text="First" clickId="Home_Page" />
        <Button text="Second" clickId="Why" />
        <Button text="Third" clickId="provide" />

        {/* Social media links or icons */}
        <GitHub />
      </div>
      <button className="md:block">
        <GiHamburgerMenu />
      </button>
    </nav>
  );
}
