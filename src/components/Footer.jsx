import React from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import { BsSearch, BsYoutube } from "react-icons/bs";

export default function Footer(props) {
  return (
    <>{/*
      <footer className="p-8 text-2xl shadow-up">
        <ul className="w-full flex flex-row justify-between text-center text-sm">
          <div className="flex">
            <li className="font-bold mx-3">
              <p>YourCode-X</p>
            </li>
            <li>
              <p>BE programmer 이태윤</p>
              <p>BE programmer 김가민</p>
              <p>FE programmer 황지홍</p>
              <p>FE programmer 김채현</p>
            </li>
          </div>
          <li className="mx-2">
            Copyright © {new Date().getFullYear()} YourCode-X cope.
          </li>
        </ul>
      </footer>
  */}
      <footer className="p-8 text-2xl shadow-up ">
              <ul className="w-full h-[80px] flex flex-row justify-center items-center text-center text-sm">
              <li className="mx-2 text-lg">
                Copyright © {new Date().getFullYear()} YourCode-X cope.
              </li>
            </ul>
          </footer>
    </>
  );
}
