import React from "react";
import { BsSearch } from "react-icons/bs";

export default function Input(handleSubmit ,url, setUrl) {
  return (
    <>
      {/* 입력창 고정 <section className="w-full mt-44 mx-2 fixed z-10"> */}
      <section className="w-full mt-44">
        <form className="flex justify-center fiexd" onSubmit={handleSubmit}>
          <input
            className="w-8/12 px-4 py-4 border-2 text-gray-50 rounded text-xl mr-4"
            type="text"
            placeholder="웹페이지 URL 입력"
            onChange={(e) => setUrl(e.target.value)}
            required
            name="url"
          />
          <button className="bg-search w-20 rounded">
            <BsSearch className="text-white m-auto text-xl"/>
          </button>
        </form>
      </section>
      {/* 입력창 고정 <ul className="mt-44">*/}
    </>
  );
}
