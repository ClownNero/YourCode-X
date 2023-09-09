import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsSearch, BsYoutube } from "react-icons/bs";

export default function Footer(props) {
  return (
    <>
      <footer className="p-4 text-2xl shadow-up">
        <ul className="w-full flex-col text-center text-sm">
          <li className="mr-2">
            Copyright © {new Date().getFullYear()} YourCode-X
          </li>
          <li className="mr-2">
            (49315) 부산 사하구 낙동대로 550번길 37 (하단동)
          </li>
          <li className="mr-2">
            Email: YourCode-X@donga.ac.kr | Phone: 010-3351-5426
          </li>
        </ul>
      </footer>
    </>
  );
}
