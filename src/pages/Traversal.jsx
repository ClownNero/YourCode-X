import React from "react";

export default function Traversal(props) {
  return (
    <div className="px-6 py-4">
      <div className="mb-10">
        <h3 className="font-bold text-[22px] pb-4">설명</h3>
        <p className="text-lg">
          <span className="font-bold">
            디렉토리 트레버설(Directory Traversal)
          </span>
          은 웹 애플리케이션에서 사용자가 입력한 경로나 파일명 등을 제대로
          검증하지 않고 사용할 때, 공격자가 디렉토리 구조를 탐색하여 원치 않는
          파일에 접근하거나 실행할 수 있는 취약점
        </p>
      </div>
      <div className="mb-10">
        <h3 className="font-bold text-[22px] pb-4">발생 상황</h3>
        <ol className="list-decimal ml-5 text-lg">
          <li className="mb-2">
            경로 입력 미검증: 웹 애플리케이션이 사용자 입력으로부터 경로를 받을
            때, 이를 충분히 검증하지 않고 그대로 사용하는 경우. 이를 통해
            공격자는 원치 않는 디렉토리나 파일에 접근할 수 있습니다.
          </li>
          <li>
            파일명 입력 미검증: 사용자가 입력한 파일명을 제대로 검증하지 않고
            사용할 때, 공격자는 이를 이용해 원치 않는 파일을 실행하거나 접근할
            수 있습니다.
          </li>
        </ol>
      </div>
      <div>
        <h3 className="font-bold text-[22px] pb-4">위험도</h3>
        <div className="flex mb-2 text-lg">
          <svg
            className="inline mr-2 flex-shrink-0 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="10" cy="10" r="10" fill="#FF0000" />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="white"
              fontFamily="Arial"
              fontSize="12px"
            >
              X
            </text>
          </svg>
          <span>
            사용자 입력 값에 대한 검증 및 필터링이 미흡하여 시스템의 중요한
            파일에 접근이 가능하며, 서버의 파일을 읽거나 쓰는 등의 공격이 가능한
            경우
          </span>
        </div>
        <div className="flex mb-2 text-lg">
          <svg
            className="inline mr-2 flex-shrink-0 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="10" cy="10" r="10" fill="#FFD600" />
            <path
              d="M4.80385 13L10 4L15.1962 13H4.80385Z"
              fill="#FFD600"
              stroke="white"
            />
          </svg>
          <span>
            사용자 입력 값에 대한 검증 및 필터링이 미흡하여 특정 파일에 접근이
            가능한 경우
          </span>
        </div>
        <div className="flex mb-2 text-lg">
          <svg
            className="inline mr-2 flex-shrink-0 mt-1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="10" cy="10" r="10" fill="#04B600" />
            <circle cx="10" cy="10" r="5.5" fill="#04B600" stroke="white" />
          </svg>
          <span>
            사용자 입력 값에 대한 검증 및 필터링이 안전하게 이루어진 경우
          </span>
        </div>
      </div>
    </div>
  );
}
