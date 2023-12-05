import React from "react";

export default function Xss(props) {
  return (
    <div className="px-6 py-4">
      <div className="mb-10">
        <h3 className="font-bold text-[22px] pb-4">설명</h3>
        <p className="text-lg">
          <span className="font-bold">
            크로스사이트스크립팅(XSS)
          </span>
          은 웹 사이트에 악성 스크립트를 삽입하는 공격. 
          이를 통해 웹 페이지를 방문하는 사용자의 브라우저에서 사용자의 정보를 탈취하거나 
          사용자를 다른 웹 사이트로 리다이렉트하는 등의 행동을 할 수 있습니다.
        </p>
      </div>
      <div className="mb-10">
      <h3 className="font-bold text-[22px] pb-4">발생 상황</h3>
        <ol className="list-decimal ml-5 text-lg">
          <li className="mb-2">
            크로스사이트 스크립팅(XSS) 공격은 주로 웹 애플리케이션에서 
            사용자의 입력 값을 적절하게 검증하거나 필터링하지 않았을 때 발생합니다. 
            이 경우, 공격자는 악성 스크립트를 웹 페이지에 삽입할 수 있습니다.
          </li>
          <li className="mb-2">
            웹 애플리케이션에서 사용자의 입력을 그대로 웹 페이지에 반영하거나, 
            HTML 태그나 자바스크립트 코드를 필터링하지 않을 때 XSS 공격에 취약해집니다.
          </li>
          <li className="mb-2">
            사용자가 웹 브라우저를 통해 직접 접근할 수 있는 URL, HTTP 헤더, 쿠키 등에도 
            XSS 공격이 발생할 수 있습니다.
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
            사용자 입력 값에 대한 검증 및 필터링이 미흡하여 데이터 유출 및 변조 외에도 
            서버 파일을 쓰거나 읽을 수 있으며 직접 임의의 명령 실행이 가능한 경우
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
            사용자 입력 값에 대한 검증 및 필터링이 미흡한 경우
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