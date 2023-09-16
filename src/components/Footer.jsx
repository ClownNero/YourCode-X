import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsSearch, BsYoutube } from "react-icons/bs";

export default function Footer(props) {
  return (
    <>
      <footer className="p-8 text-2xl shadow-up">
        <ul className="w-full flex flex-row justify-between text-center text-sm">
          <div className="flex">
            <li className="font-bold mr-6">
              <p>YourCode-X</p>
            </li>
            <li>
              <p>BE programmer 이태윤</p>
              <p>BE programmer 김가민</p>
              <p>FE programmer 황지홍</p>
              <p>FE programmer 김채현</p>
            </li>
          </div>
          <li>Copyright © {new Date().getFullYear()} YourCode-X cope.</li>
        </ul>
      </footer>
    </>
  );
}
