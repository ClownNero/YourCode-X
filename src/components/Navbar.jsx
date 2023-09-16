import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";

import GitHub from "./GitHub";
import Button from "./ui/Button";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`w-full flex flex-col lg:flex-row items-start lg:justify-between px-6 py-2 text-1xl bg-white shadow-md fixed top-0 left-0 z-10 `}
    >
      <Link to="/" className="flex items-center">
        {/* 대충 로고 */}
        {/*<MdOutlineSecurity className="text-3xl text-brand" />*/}
        <img
          className="w-14 mt-1 drop-shadow-md inline"
          src="/images/logo.png"
          alt="security logo"
        ></img>
        <span className="font-bold text-2xl drop-shadow-md whitespace-nowrap">
          YourCode-X
        </span>
      </Link>
      <div
        className={`flex lg:flex-row lg:space-x-10 flex-col items-center my-auto ${
          isOpen ? "block" : "hidden"
        } lg:flex w-full lg:w-auto`}
      >
        <Button text="Introduce" clickId="Introduce" />
        <Button text="Why" clickId="Why" />
        <Button text="Provide" clickId="Provide" />

        {/* Social media links or icons */}
        <GitHub />
      </div>
      <button
        className={`lg:hidden block text-3xl absolute top-[27px] right-[15px] hover:`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <RiMenu3Fill />
      </button>
    </nav>
  );
}
