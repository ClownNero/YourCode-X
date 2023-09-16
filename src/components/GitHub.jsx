import React from "react";
import { FaGithub } from "react-icons/fa";

export default GitHub;
function GitHub(props) {
  return (
    <div className="py-4">
      <a
        className="flex text-xl items-center"
        href="https://github.com/ClownNero/YourCode-X"
        target="_blank"
      >
        Github
        <FaGithub className="text-xl ml-2" />
      </a>
    </div>
  );
}
