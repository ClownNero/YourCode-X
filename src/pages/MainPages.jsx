import React from "react";
import { RxDoubleArrowUp } from "react-icons/rx";
import { animateScroll as scroll } from "react-scroll";
import Input from "../components/Input";
import Introduce from "../components/Introduce";
import Why from "../components/Why";
import Provide from "../components/Provide";

export default function MainPages(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <>
      <div className="flex flex-col text-center h-full">
        <Input handleSubmit={handleSubmit} />
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
