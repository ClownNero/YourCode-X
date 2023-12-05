import React from "react";

export default function Traversal(props) {
  return (
    <div className="px-6 py-4">
      <div className="mb-10">
        <h3 className="font-bold text-[22px] pb-4">설명</h3>
        <p className="text-lg">
          <span className="font-bold">
            파일 업로드(File Upload)
          </span>
          은 공격자가 악성 코드가 포함된 파일을 업로드하거나, 
          서버의 취약점을 이용하여 허가되지 않은 위치에 파일을 업로드하는 공격. 
          이로 인해 서버가 공격당하거나, 사용자의 정보가 유출될 수 있습니다.
        </p>
      </div>
      <div className="mb-10">
        <h3 className="font-bold text-[22px] pb-4">발생 상황</h3>
        <ol className="list-decimal ml-5 text-lg">
          <li className="mb-2">
            파일 업로드(File Upload) 공격은 주로 웹 애플리케이션에서 파일의 
            종류, 크기, 업로드 위치 등을 적절하게 제한하지 않을 때 발생합니다. 
            이 경우, 공격자는 악성 파일을 업로드하거나, 업로드된 파일을 이용해 서버를 조작하거나, 
            다른 사용자의 시스템을 공격할 수 있습니다.
          </li>
          <li className="mb-2">
            웹 애플리케이션에서 업로드된 파일의 실행을 허용할 경우, 
            공격자는 이를 이용해 웹 서버 내에서 악성 코드를 실행시켜 
            서버의 제어권을 공격자에게 넘어갈 수 있습니다.
          </li>
          <li className="mb-2">
            사용자가 업로드하는 파일에 대한 적절한 검증 또는 필터링이 이루어지지 않았을 때, 
            공격자는 이러한 취약점을 이용해 서버의 중요한 파일을 변조하거나 
            시스템을 공격할 수 있습니다.
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
            업로드 파일에 대한 확장자 검증이 미흡하여 
            공격자에게 서버 노출 및 제어권 제공이 된 경우
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
            업로드 파일에 대한 확장자 검증이 미흡한 경우
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
            업로드 파일에 대한 확장자 검증이 안전하게 이루어진 경우
          </span>
        </div>
      </div>
    </div>
  );
}