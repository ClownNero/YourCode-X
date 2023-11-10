<<<<<<< HEAD
import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Button({ text, clickId }) {
  return (
    <ScrollLink
      className="py-2 px-4 text-base font-bold hover:text-search cursor-pointer "
      to={clickId}
      smooth={true}
      duration={600}
      offset={-150}
    >
      {text}
    </ScrollLink>
  );
=======
import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Button({ text, clickId }) {
  return (
    <ScrollLink
      className="py-2 px-4 text-base font-bold hover:text-search cursor-pointer "
      to={clickId}
      smooth={true}
      duration={600}
      offset={-150}
    >
      {text}
    </ScrollLink>
  );
>>>>>>> e213a9d233562055e7b76c39443ae10f1a0039b8
}