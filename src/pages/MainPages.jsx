import React from "react";
import { BsSearch, BsYoutube } from "react-icons/bs";
import MainList from "../components/MainList";

export default function MainPages(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex flex-col text-center h-full">
        <section className="mb-32 mx-2">
        <form className="w-full flex justify-center" onSubmit={handleSubmit}>
            <input
              className="w-7/12 p-2 outline-none bg-black text-gray-50 rounded-l-lg"
              type="text"
              placeholder="웹페이지 URL 입력"
              required
              name="url"
            />
            <button className="bg-zinc-600 px-4 rounded-r-lg">
              <BsSearch />
            </button>
          </form>
          <img
            className="w-60 m-auto"
            src="https://www.gstatic.com/pagespeed/insights/ui/img/graphic-home-hero.svg"
            alt="mainImage"
          ></img>
          <h2 className="text-3xl font-bold">
            모든 기기에서 웹페이지 보안을 개선해 보세요.
          </h2>
          </section>
          <ul>
            <MainList/>
          </ul>
      </div>
    </>
  );
}
