import React from "react";

export default function Traversal(props) {
  return (
    <div className="px-6 py-4">
      <div className="mb-10">
        <h3 className="font-bold text-[22px] pb-4">설명</h3>
        <p className="text-lg">
          <span className="font-bold">
            파일 다운로드(File Download)
          </span>
          은 공격자가 서버의 중요한 파일을 다운로드하거나, 사용자에게 악성 파일을 다운로드하게 하는 공격. 
          이로 인해 서버의 중요 정보가 유출되거나, 사용자의 컴퓨터가 공격당할 수 있습니다.
        </p>
      </div>
      <div className="mb-10">
        <h3 className="font-bold text-[22px] pb-4">발생 상황</h3>
        <ol className="list-decimal ml-5 text-lg">
          <li className="mb-2">
            파일 다운로드(File Download) 공격은 주로 웹 애플리케이션에서 다운로드할 파일의 선택이나 
            접근 권한 등을 적절하게 제한하지 않을 때 발생합니다. 
            이 경우, 공격자는 서버에 저장된 중요한 파일을 다운로드할 수 있습니다.
          </li>
          <li className="mb-2">
            웹 애플리케이션에서 사용자의 입력 값을 파일의 경로나 이름으로 사용할 때도 
            파일 다운로드 취약점이 발생할 수 있습니다. 
            공격자는 이를 이용해 서버의 임의의 파일에 접근하거나, 해당 파일을 다운로드할 수 있습니다.
          </li>
          <li className="mb-2">
            사용자가 다운로드하는 파일에 대한 적절한 검증 또는 필터링이 이루어지지 않았을 때, 
            공격자는 이러한 취약점을 이용해 서버의 중요한 파일을 변조하거나 시스템을 공격할 수 있습니다.
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
            다운로드 파일이 저장된 디렉터리 이외에 접근 가능한 경우 주요 서비스 및 서버 정보 유출 가능성이 존재할 경우
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
            다운로드 파일이 저장된 디렉터리 이외에 접근이 가능한 경우
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
            다운로드 파일이 저장된 디렉터리 접근이 불가능한 경우
          </span>
        </div>
      </div>
    </div>
  );
}