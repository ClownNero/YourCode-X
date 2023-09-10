import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Button({ text, clickId }) {
  return (
    <ScrollLink
      className="py-2 px-4  border-t-4 border-transparent hover:border-brand "
      to={clickId}
      smooth={true}
      duration={600}
    >
      {text}
    </ScrollLink>
  );
}
