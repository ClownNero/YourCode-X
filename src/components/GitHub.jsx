import React from "react";
import { FaGithub } from "react-icons/fa";

export default GitHub;
function GitHub(props) {
  return (
    <div className="my-1 py-[4px]">
      <a
        className="flex text-base items-center ml-4 lg:m-0 font-bold hover:text-search"
        href="https://github.com/ClownNero/YourCode-X"
        target="_blank"
        rel="noreferrer"
      >
        Github
        <FaGithub className="text-xl ml-2" />
      </a>
    </div>
  );
}