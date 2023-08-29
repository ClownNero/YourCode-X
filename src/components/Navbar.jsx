import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsSearch, BsYoutube } from "react-icons/bs";

import security from "../components/sdfsfsdfdsfdsfsfsfsf.PNG";
import GitHub from "./GitHub";

export default function Navbar(props) {

  return (
    <header className="w-full flex justify-between p-4 text-1xl border-b items-center border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        {/* 대충 로고 */}
        <BsYoutube className="text-4xl text-brand" />
        {/* <img className='w-10' src={security} alt='security logo'></img> */}
        <h1 className="font-bold ml-2 text-3xl whitespace-nowrap">
          YourCode-X
        </h1>
      </Link>
      <GitHub/>
    </header>
  );
}
