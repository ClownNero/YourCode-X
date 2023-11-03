import React from "react";

export default function Why(props) {
  return (
    <>
      <li
        className="bg-gray-100 flex justify-center items-center px-6 py-32 "
        id="Why"
        name="Why"
      >
        <img
          className="w-[380px] h-[260px] drop-shadow-text"
          src="/images/none.png"
          alt="security chart"
        />
        <article className="text-left ml-32 whitespace-pre-line text-gray-600">
          <p className="font-bold text-3xl drop-shadow-text text-black">
            왜 YourCode-X인가?
          </p>
          &nbsp;
          <p>웹 애플리케이션은 더이상 없어서는 안 될 중요한 도구가 된 반면,</p>
          <p>정작 개발자들에게는 여전히 보안에 대한 인식이 낮아</p>
          <p>
            수많은 웹 애플리케이션이 데이터 노출 및 취약한 상황에 놓여 있습니다.
          </p>
          &nbsp;
          <p>
            중요한 데이터가 유출되거나 서비스를 마비되는 상황을 방지할 수 있도록
          </p>
          <p>YourCode-X는 개발자들을 위한 보안 서비스를 제공합니다.</p>
        </article>
      </li>
    </>
  );
}