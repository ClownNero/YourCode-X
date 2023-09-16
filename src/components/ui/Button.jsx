import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Button({ text, clickId }) {
  return (
    <ScrollLink
      className="py-2 px-4 text-base border-t-4 border-transparent hover:border-blue-600 "
      to={clickId}
      smooth={true}
      duration={600}
      offset={-150}
    >
      {text}
    </ScrollLink>
  );
}
