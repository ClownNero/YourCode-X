import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsSearch, BsYoutube } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import security from "../components/sdfsfsdfdsfdsfsfsfsf.PNG";

export default function Navbar(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header className="w-full flex p-4 text-1xl border-b items-center border-zinc-600 mb-4">
      <Link to="/" className="flex items-center">
        {/* 대충 로고 */}
        <BsYoutube className="text-4xl text-brand" />
        {/* <img className='w-10' src={security} alt='security logo'></img> */}
        <h1 className="font-bold ml-2 text-3xl whitespace-nowrap">
          YourCode-X
        </h1>
      </Link>
      <form className="w-full flex justify-center " onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="웹페이지 URL 입력"
          required
          name="url"
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
      </form>
      <a
        className="flex"
        href="https://github.com/ClownNero/YourCode-X"
        target="_blank"
      >
        Github
        <FaGithub className="text-2xl ml-2" />
      </a>
    </header>
  );
}
