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
    try {
      // 서버에 POST 요청을 보내 URL 분석 요청
      const response = await axios.post("/analysis/result", { url });

      // 결과 페이지로 이동하면서 결과 데이터 전달
      navigate("/analysis/result", { state: { result: response.data } });
    } catch (error) {
      console.error("Error during analysis: ", error);
    }
    setUrl("");
  };
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <>
      <div className="flex  flex-col text-center h-full ">
        {/* 입력창 고정 <section className="w-full mt-44 mx-2 fixed z-10"> */}
        <section className="w-full mt-44">
          <form className="flex justify-center fiexd" onSubmit={handleSubmit}>
            <input
              className="w-8/12 p-4 border-4 border-gray-300 outline-none hover:border-search text-gray-50 rounded text-xl mr-4"
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
            <button onClick={scrollToTop}>
              <RxDoubleArrowUp className="text-5xl text-gray-400" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
