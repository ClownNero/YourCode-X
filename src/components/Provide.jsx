import React from "react";

export default function Provide(props) {
  return (
    <>
      <li className="p-10 bg-yourcodex bg-cover" id="Provide" name="Provide">
        <p className="text-4xl text-white drop-shadow-text my-10">
          We provide the following services
        </p>
        <div>
          <ul className="flex mt-24 mb-20 justify-center text-gray-600">
            <li className="bg-white rounded-tl-3xl rounded-br-3xl px-10 pb-20 pt-12 mr-7 shadow-custom">
              <img
                src="/images/trust.png"
                alt="trust logo"
                className="w-[88px] h-[88px] mx-auto mb-10 drop-shadow-text"
              />
              <p className="font-bold text-lg  text-black">
                신뢰성 있는 데이터 활용
              </p>
              &nbsp;
              <p>정확하고 신뢰성 있는</p>
              <p>취약점 정보를 제공하여</p>
              <p>실제 위험에 대비할 수 있도록 도움</p>
            </li>
            <li className="bg-white rounded-tl-3xl rounded-br-3xl px-10 pb-20 pt-12 mx-7 shadow-custom">
              <img
                src="/images/algorithm.png"
                alt="algorithm logo"
                className="w-[88px] h-[88px] mx-auto mb-10 drop-shadow-text"
              />
              <p className="font-bold text-lg text-black">
                디렉토리 스캔 알고리즘 개선
              </p>
              &nbsp;
              <p>누락된 점검 부분을 식별하고</p>
              <p>취약점을 검사하여</p>
              <p>웹 애플리케이션의 보안을 강화</p>
            </li>
            <li className="bg-white rounded-tl-3xl rounded-br-3xl px-10 pb-20 pt-12 ml-7 shadow-custom">
              <img
                src="/images/schematic.png"
                alt="third logo"
                className="w-[88px] h-[88px] mx-auto mb-10 drop-shadow-text"
              />
              <p className="font-bold text-lg  text-black">
                도식화된 결과 도출
              </p>
              &nbsp;
              <p>웹 서비스 점검 결과를</p>
              <p>명확하고 구체적인 정보를 포함한</p>
              <p>리포트 형식의 결과를 제공</p>
            </li>
          </ul>
        </div>
      </li>
    </>
  );
}