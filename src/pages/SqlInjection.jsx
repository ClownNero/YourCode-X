import React from "react";

export default function SqlInjection(props) {
  return (
    <div className="px-6 py-4">
      <div className="mb-10">
        <h3 className="font-bold text-[22px] pb-4">설명</h3>
        <p className="text-lg">
          <span className="font-bold">
            SQL 인젝션(SQL Injection)
          </span>
          은 악의적인 사용자가 웹 애플리케이션의 데이터베이스 쿼리에 
          임의의 SQL 코드를 삽입하는 공격. 
          이를 통해 공격자는 데이터베이스의 정보를 임의로 조회, 수정, 삭제 등을 할 수 있습니다.
        </p>
      </div>
      <div className="mb-10">
      <h3 className="font-bold text-[22px] pb-4">발생 상황</h3>
        <ol className="list-decimal ml-5 text-lg">
          <li className="mb-2">
            SQL 인젝션 공격은 주로 사용자 입력값을 쿼리문에 직접 삽입할 때 발생합니다.
          </li>
          <li className="mb-2">
            웹 애플리케이션에서 사용자 입력 값에 대한 적절한 검증 및 처리가 이루어지지 않을 경우 발생할 수 있습니다.
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
            임의로 작성된 SQL 쿼리 입력에 대한 검증이 미흡하여 사용자의
            정보(쿠키, 세션 등)를 탈취하거나 자동으로 비정상적인 기능이 실행,
            조작이 가능한 경우
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
          <span>임의로 작성된 SQL 쿼리 입력에 대한 검증이 미흡한 경우</span>
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
            임의로 작성된 SQL 쿼리 입력에 대한 검증이 안전하게 이루어진 경우
          </span>
        </div>
      </div>
    </div>
  );
}