import React from "react";
import { BsSearch, BsYoutube } from "react-icons/bs";
import MainList from "../components/MainList";
import { RxDoubleArrowUp } from "react-icons/rx";
import { animateScroll as scroll } from "react-scroll";

export default function MainPages(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 800,
      delay:0,
      smooth: 'easeInOutQuart'
    });
  };
  return (
    <>
      <div className="flex flex-col text-center h-full">
        <section className="mt-44 mx-2">
          <form
            className="w-full flex justify-center fiexd"
            onSubmit={handleSubmit}
          >
            <input
              className="w-7/12 p-2 outline-non border-2 text-gray-50 rounded-l text-xl"
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
          <li className="p-36" id="Home_Page" name="Home_Page">
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
            className="bg-gray-100 flex justify-center px-6 py-32 "
            id="Why"
            name="Why"
          >
            <img
              className="w-[330px] h-[220px] drop-shadow-text"
              src="/images/none.png"
              alt="security chart"
            />
            <article className="text-left ml-32 whitespace-pre-line text-gray-600">
              <p className="font-bold text-3xl drop-shadow-text text-black">
                왜 YourCode-X인가?
              </p>
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
          <li
            className="p-10 bg-yourcodex bg-cover"
            id="provide"
            name="provide"
          >
            <p className="text-4xl text-white drop-shadow-text my-8">
              We provide the following services
            </p>
            <div>
              <ul className="flex mt-28 mb-20 justify-around text-gray-600">
                <li className="bg-white rounded-3xl p-10">
                  <img
                    src="/images/trust.png"
                    alt="trust logo"
                    className="w-[88px] h-[88px] m-auto mb-6"
                  />
                  <p className="font-bold text-lg text-black">
                    신뢰성 있는 데이터 활용
                  </p>
                  &nbsp;
                  <p>정확하고 신뢰성 있는</p>
                  <p>취약점 정보를 제공하여</p>
                  <p>실제 위험에 대비할 수 있도록 도움</p>
                </li>
                <li className="bg-white rounded-3xl p-10">
                  <img
                    src="/images/algorithm.png"
                    alt="algorithm logo"
                    className="w-[88px] h-[88px] m-auto mb-6"
                  />
                  <p className="font-bold text-lg text-black">
                    디렉토리 스캔 알고리즘 개선
                  </p>
                  &nbsp;
                  <p>누락된 점검 부분을 식별하고</p>
                  <p>취약점을 검사하여</p>
                  <p>웹 애플리케이션의 보안을 강화</p>
                </li>
                <li className="bg-white rounded-3xl p-10">
                  <img
                    src="/images/schematic.png"
                    alt="third logo"
                    className="w-[88px] h-[88px] m-auto mb-6"
                  />
                  <p className="font-bold text-lg text-black">
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
          <li className="p-14">
            <button onClick={scrollToTop}><RxDoubleArrowUp className='text-5xl text-gray-400'/></button>
          </li>
        </ul>
      </div>
    </>
  );
}
