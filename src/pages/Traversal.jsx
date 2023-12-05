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
          은 공격자가 웹 애플리케이션에서 의도치 않게 파일 시스템에 접근하거나, 
          허용되지 않은 파일을 읽거나 쓰는 것을 목표로 하는 공격. 
          이를 통해 공격자는 서버의 중요한 정보를 열람하거나, 시스템을 조작할 수 있습니다.
        </p>
      </div>
      <div className="mb-10">
        <h3 className="font-bold text-[22px] pb-4">발생 상황</h3>
        <ol className="list-decimal ml-5 text-lg">
          <li className="mb-2">
            디렉토리 트레버설(Directory Traversal) 공격은 주로 웹 애플리케이션에서 
            사용자의 입력값을 파일의 경로나 이름으로 사용할 때 발생합니다. 
            이 경우, 공격자는 "../"와 같은 상대 경로를 사용하여 
            웹 애플리케이션의 루트 디렉토리를 벗어나 시스템의 임의의 파일에 접근할 수 있습니다.
          </li>
          <li className="mb-2">
            웹 애플리케이션에서 사용자의 입력 값에 대한 적절한 검증 또는 필터링이 이루어지지 않았을 때, 
            공격자는 이러한 취약점을 이용해 서버의 중요한 파일을 읽거나 변조할 수 있습니다.
          </li>
          <li className="mb-2">
            사용자가 웹 브라우저를 통해 직접 접근할 수 있는 URL이나 HTTP 헤더에도 
            이러한 공격이 발생할 수 있습니다.
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