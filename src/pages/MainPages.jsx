import React from "react";
import { BsSearch, BsYoutube } from "react-icons/bs";
import MainList from "../components/MainList";

export default function MainPages(props) {
  return (
    <>
      <div className="flex flex-col mt-4 text-center">
        <section>
          <img
            className="w-60 m-auto"
            src="https://www.gstatic.com/pagespeed/insights/ui/img/graphic-home-hero.svg"
            alt="mainImage"
          ></img>
          <h2 className="text-3xl font-bold">
            모든 기기에서 웹페이지 보안을 개선해 보세요.
          </h2>
          <ul>
            <MainList />
          </ul>
        </section>
      </div>
    </>
  );
}
