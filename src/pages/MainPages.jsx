import React from "react";
import { BsSearch, BsYoutube } from "react-icons/bs";
import MainList from "../components/MainList";

export default function MainPages(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flex flex-col text-center h-full">
        <section className="mb-32 mt-44 mx-2">
          <form
            className="w-full flex justify-center fiexd"
            onSubmit={handleSubmit}
          >
            <input
              className="w-8/12 p-2 outline-non border-2 text-gray-50 rounded-l"
              type="text"
              placeholder="웹페이지 URL 입력"
              required
              name="url"
            />
            <button className="bg-serch px-4 w-16 rounded-r">
              <BsSearch className="text-white m-auto" />
            </button>
          </form>
        </section>
        <ul>
          <li className="mb-32" id="Home Page" name="Home Page">
            <article className="mb-10">
              <p className="font-bold text-3xl whitespace-pre-wrap">
                웹 애플리케이션의 보안 취약점을 식별하고
              </p>
              <p className="font-bold text-3xl whitespace-pre-wrap">
                이를 간단히 해결해보세요.
              </p>
            </article>
            <article className="text-gray-600">
              <p>YourCode-X는 간단한 URL 입력만으로</p>
              <p>보안 취약성을 식별하고 해결할 수 있도록</p>
              <p>정확하고 신뢰성있는 정보를 제공합니다.</p>
            </article>
          </li>
          <li
            className="bg-gray-100 flex justify-center px-6 py-24 "
            id="Why"
            name="Why"
          >
            <img
              className="w-[330px] h-[220px]"
              src="/images/none.png"
              alt="security chart"
            />
            <article className="text-left ml-32  whitespace-nowrap">
              <p className="font-bold text-3xl ">왜 YourCode-X인가?</p>
              &nbsp;
              <p>
                웹 애플리케이션은 더이상 없어서는 안 될 중요한 도구가 된 반면,
              </p>
              <p>정작 개발자들에게는 여전히 보안에 대한 인식이 낮아</p>
              <p>
                수많은 웹 애플리케이션이 데이터 노출 및 취약한 상황에 놓여
                있습니다.
              </p>
              &nbsp;
              <p>
                중요한 데이터가 유출되거나 서비스를 마비되는 상황을 방지할 수
                있도록
              </p>
              <p>YourCode-X는 개발자들을 위한 보안 서비스를 제공합니다.</p>
            </article>
          </li>
          <li>
            <h2>We provide the following services</h2>
            <div>
              <ul>
                <li>
                  <img src="" alt="first logo" />
                  <p>신뢰성 있는 데이터 활용</p>
                  <p>
                    정확하고 신뢰성 있는 취약점 정보를 제공하여 실제 위험에
                    대비할 수 있도록 도움
                  </p>
                </li>
                <li>
                  <img src="" alt="second logo" />
                  <p>디렉토리 스캔 알고리즘 개선</p>
                  <p>
                    누락된 점검 부분을 식별하고 취약점을 검사하여 웹
                    애플리케이션의 보안을 강화
                  </p>
                </li>
                <li>
                  <img src="" alt="third logo" />
                  <p>도식화된 결과 도출</p>
                  <p>
                    웹 서비스 점검 결과를 명확하고 구체적인 정보를 포함한 리포트
                    형식의 결과를 제공
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
