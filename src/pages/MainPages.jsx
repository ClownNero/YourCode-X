import React, { useState } from "react";
import axios from "axios";
import { RxDoubleArrowUp } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import Introduce from "../components/Introduce";
import Why from "../components/Why";
import Provide from "../components/Provide";

export default function MainPages(props) {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(url);

    // axios({method: "POST",
    // url: "http://localhost:5000"})
    fetch("http://localhost:5000/gomain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ processedData: url }),
    });
  };

  return (
    <>
      <div className="flex  flex-col text-center h-full ">
        {/* 입력창 고정 <section className="w-full mt-44 mx-2 fixed z-10"> */}
        <section className="w-full mt-44">
          <form className="flex justify-center fiexd" onSubmit={handleSubmit}>
            <input
              className="w-8/12 p-4 border-4 border-gray-300 outline-none hover:border-search rounded text-xl mr-4"
              type="url"
              value={url}
              placeholder="웹페이지 URL 입력"
              required
              name="url"
              onChange={(e) => setUrl(e.target.value)}
            />
            <button className="bg-search px-4 w-24 rounded">
              <BsSearch className="text-white m-auto text-xl" />
            </button>
          </form>
        </section>
        {/* 입력창 고정 <ul className="mt-44">*/}
        <ul>
          <Introduce />
          <Why />
          <Provide />
          <li className="p-14">
            <Upbutton />
          </li>
        </ul>
      </div>
    </>
  );
}
