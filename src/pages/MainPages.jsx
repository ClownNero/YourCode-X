import React, { useState } from "react";
// import axios from "axios";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Introduce from "../components/Introduce";
import Why from "../components/Why";
import Provide from "../components/Provide";
import Upbutton from "../components/ui/Upbutton";
import WarningModal from "./WarningModal";
import CheckListModal from "./CheckListModal";
import LoadingModal from "./LoadingModal";

export default function MainPages(props) {
  const [url, setUrl] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [checkModalIsOpen, setCheckModalIsOpen] = useState(false);
  const [loadingModalIsOpen, setLoadingModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleCheckModalIsOpen = () => {
    setModalIsOpen(false);
    setCheckModalIsOpen(!checkModalIsOpen);
  };

  const handleIsOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleAnalysis = async (checkedContents) => {
    handleCheckModalIsOpen();
    setLoadingModalIsOpen(!loadingModalIsOpen);
    try {
      console.log(checkedContents);
      const response = await fetch("http://localhost:5000/gomain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          processedData: url,
          checkItems: checkedContents,
        }),
      });

      if (!response.ok) {
        console.log(response);
        console.log("hoi");
        throw new Error("Network response was not ok");
      }
      else{
        navigate(`/analysis/result`);
      }
    } catch (error) {
      console.error("Error during analysis:", error);
    }
    setUrl("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setModalIsOpen(true); // 모달을 열어줍니다.
    // try {
    //   // URL이 있는지 확인 하기 위한 로직
    //   const response = await axios.get(url);
    //   if (!response.ok) {
    //     throw new Error("URL does not exist");
    //   }

    // } catch (error) {
    //     navigate("/analysis/result",{state: url});
    //     console.error("Error:", error);
    // }
  };

  return (
    <>
      <div className="flex  flex-col text-center h-full ">
        {/* 입력창 고정 <section className="w-full mt-44 mx-2 fixed z-10"> */}
        <section className="w-full mt-44">
          <form className="flex justify-center fiexd" onSubmit={handleSubmit}>
            <input
              className="w-8/12 p-4 border-4 border-gray-300 outline-none focus:border-search hover:border-search rounded text-xl mr-4"
              type="url"
              value={url}
              placeholder="웹페이지 URL 입력"
              required
              name="url"
              onChange={(e) => setUrl(e.target.value)}
            />
            <button className="bg-search px-4 w-24 rounded shadow-[0_4px_9px_-4px_#3b71ca] transition n-duration-150 ease-iout hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              <BsSearch className="text-white m-auto text-xl" />
            </button>
          </form>
        </section>
        {/* 입력창 고정 <ul className="mt-44">*/}
        <ul>
          <Introduce />
          <Why />
          <Provide />
          <li className="p-16">
            <Upbutton />
          </li>
        </ul>
        <WarningModal
          isOpen={modalIsOpen}
          onModalClose={handleIsOpen}
          onModalChange={handleCheckModalIsOpen}
        />
        <CheckListModal
          isOpen={checkModalIsOpen}
          onModalClose={handleCheckModalIsOpen}
          onCofirm={handleAnalysis}
        />
        <LoadingModal
          isOpen={loadingModalIsOpen}
        />
      </div>
    </>
  );
}