import React, {useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsSearch, BsYoutube } from "react-icons/bs";

import security from "../components/sdfsfsdfdsfdsfsfsfsf.PNG";
import GitHub from "./GitHub";
import Button from "./ui/Button";


export default function Navbar(props) {
 const navigate = useNavigate();
  return (
    <nav className="w-full flex justify-between p-4 text-1xl border-b border-zinc-600 mb-4 fixed top-0 left-0 bg-zinc-900">
      <Link to="/" className="flex items-center">
        {/* 대충 로고 */}
        <BsYoutube className="text-3xl text-brand" />
        {/* <img className='w-10' src={security} alt='security logo'></img> */}
        <h1 className="font-bold ml-2 text-2xl whitespace-nowrap">
          YourCode-X
        </h1>
      </Link>
      <div className="flex space-x-10 items-center">
        <Button text="Menu1" onClick={()=>navigate(`mains/menu1`)}/>
        <Button text="Menu2" onClick={()=>navigate(`mains/menu2`)}/>
        <GitHub/>
      </div>
    </nav>
  );
}
