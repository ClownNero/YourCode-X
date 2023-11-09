import React from "react";

export default function Xss(props) {
  return (
    <div className="px-6 py-4">
      <div className="mb-10">
        <h3 className="font-bold text-[22px] pb-4">설명</h3>
        <p className="text-lg">
          <span className="font-bold">크로스사이트스크립팅(XSS)</span>
          은 웹 응용 프로그램의 취약점을 이용하여 악의적인 사용자가 웹 페이지에 악성 스크립트를 삽입하는 공격 유형입니다. 이 공격은 사용자의 브라우저에서 해당 스크립트가 실행되어 사용자의 정보를 탈취하거나 악의적인 동작을 수행할 수 있습니다.
        </p>
      </div>
      <div className="mb-10">
        <h3 className="font-bold text-[22px] pb-4">발생 상황</h3>
        <ol className="list-decimal ml-5 text-lg">
          <li className="mb-2">
            입력 데이터 미검증: 웹 애플리케이션이 사용자 입력을 충분히 검증하지 않고 그대로 출력하는 경우. 사용자가 입력한 데이터에 악성 스크립트를 삽입할 수 있습니다.
          </li>
          <li>
            출력 데이터 미인코딩: 웹 애플리케이션이 출력 데이터를 HTML로 표시할 때, 적절한 인코딩 없이 그대로 출력하는 경우. 이 경우, 악의적인 사용자가 스크립트를 삽입할 수 있습니다.
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
            사용자 입력 값에 대한 검증 및 필터링이 미흡하여 데이터 유출 및 변조 외에도 서버 파일을 쓰거나 읽을 수 있으며 직접 임의의 명령 실행이 가능한 경우
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
          <span>사용자 입력 값에 대한 검증 및 필터링이 미흡한 경우</span>
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
