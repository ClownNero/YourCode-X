import React from "react";

export default function Xss(props) {
  return (
    <div className="px-6 py-4">
      <div className="mb-10">
        <h3 className="font-[600] text-xl pb-4">설명</h3>
        <p>
          <span className="text-lg">크로스사이트스크립팅(XSS)</span>은 악의적인
          사용자가 웹 응용 프로그램의 입력 필드에 악의적인 SQL 쿼리를 삽입하여
          데이터베이스에 대한 비인가된 액세스를 시도하는 공격 유형으로, 웹
          페이지에서 사용자가 입력한 값을 제대로 검사하지 않고 그대로 데이터
          질의어로 사용할 때 발생합니다.
        </p>
      </div>
      <div className="mb-10">
        <h3 className="font-[600] text-xl pb-4">발생 상황</h3>
        <ol className="list-decimal ml-5 text-lg">
          <li>
            입력 필드 미검증: 웹 애플리케이션이 사용자 입력을 충분히 검증하지
            않고 데이터베이스 쿼리로 직접 사용하는 경우. 사용자가 입력한
            데이터가 악의적인 SQL 코드를 포함할 수 있습니다.
          </li>
          <li>
            동적 SQL 쿼리: 동적 SQL 쿼리를 생성하는 경우, 입력 데이터를 문자열로
            직접 연결하는 경우. 이 경우 악의적인 사용자가 입력 필드에 악의적인
            SQL 코드를 삽입할 수 있습니다.
          </li>
        </ol>
      </div>
      <div>
        <h3 className="font-[600] text-xl pb-4">위험도</h3>
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