import React from 'react';
import { RxDoubleArrowUp } from "react-icons/rx";
import { animateScroll as scroll } from "react-scroll";
export default function Upbutton(props) {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div>
      <button onClick={scrollToTop}>
        <RxDoubleArrowUp className="text-5xl text-gray-400" />
      </button>
    </div>
  );
}

