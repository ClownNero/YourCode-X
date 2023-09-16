import React from "react";
import { BsSearch } from "react-icons/bs";

export default function Input(handleSubmit) {
  return (
    <>
      {/* 입력창 고정 <section className="w-full mt-44 mx-2 fixed z-10"> */}
      <section className="w-full mt-44">
        <form className="flex justify-center fiexd" onSubmit={handleSubmit}>
          <input
            className="w-7/12 p-2  border-2 text-gray-50 rounded-l text-xl"
            type="text"
            placeholder="웹페이지 URL 입력"
            required
            name="url"
          />
          <button className="bg-search px-4 w-16 rounded-r">
            <BsSearch className="text-white m-auto" />
          </button>
        </form>
      </section>
      {/* 입력창 고정 <ul className="mt-44">*/}
    </>
  );
}
