import React from 'react';
import { FaGithub } from "react-icons/fa";

export default GitHub;function GitHub(props) {
  return (
    <div>
      <a
        className="flex"
        href="https://github.com/ClownNero/YourCode-X"
        target="_blank"
      >
        Github
        <FaGithub className="text-2xl ml-2" />
      </a>
    </div>
  );
}

