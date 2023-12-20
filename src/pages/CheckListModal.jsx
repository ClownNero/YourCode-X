import React, { useState } from "react";
import { useEffect } from "react";
import SqlInjection from "./SqlInjection";
import Xss from "./Xss";
import Traversal from "./Traversal";
import FileUpload from "./FileUpload";
import FileDownload from "./FileDownload";

export default function CheckListModal({ isOpen, onModalClose, onCofirm }) {
  // 선택한 평평가 항목들을 관리할 state를 생성합니다.
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentItem, setCurrentItem] = useState("SQL 인젝션(SQL Injection)");
  // 평가 항목 클릭 이벤트 핸들러
  const handleClick = (item) => {
    setCurrentItem(item);
    if (!selectedItems.includes(item)) {
      // 중복 선택 방지
      setSelectedItems([...selectedItems, item]);
    }
    console.log(selectedItems);
  };

  // 항목 제거 함수
  const handleRemove = (index) => {
    const newSelectedItems = [...selectedItems];
    newSelectedItems.splice(index, 1);
    setSelectedItems(newSelectedItems);
  };

  const handleSubmit = () => {
    // 전달하려는 로직 작성
    if (selectedItems.length > 0) {
      onCofirm(selectedItems);
    }
  };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 min-w-[1024px] min-h-[960px] flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={onModalClose}
        >
          <div
            className="flex-col bg-white w-[1280px] h-[963px] text-left scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-[163px] flex-shrink-0 border-b-black border-b-2 px-8 pt-10 overflow-y-hidden scrollbar-thin scrollbar-track-[white] scrollbar-thumb-[#0085FF]">
              <div className="flex flex-col min-w-max">
                <h2 className="font-bold text-xl  flex-grow">
                  원하는 평가 항목을 선택해주세요.(최소 1개 이상){" "}
                  <span className="text-[#1360FF] font-bold">*</span>
                </h2>
		<div className="inline-flex mb-5 items-center">
                {selectedItems.map(
                  (
                    item,
                    index // map 함수를 이용하여 선택한 항목들을 리스트로 표시
                  ) => (
                    <span
                      className="border-2 border-[#2D5FFF] p-3 rounded-xl text-sm bg-[#E3EBFF] mr-5"
                      key={index}
                    >
                      {item}
                      <button
                        className="ml-3 px-3 py-1 bg-[#DCDCDC] rounded-full"
                        onClick={() => handleRemove(index)}
                      >
                        X
                      </button>
                    </span>
                  )
                )}
                {selectedItems.length > 0 && (
                  <span className="text-[#A8A8A8] text-xs">
                    클릭으로 점검 항목 추가 가능
                  </span>
                )}
		</div>
              </div>
            </div>
            <div className="flex h-[800px]">
              <div className="flex-col w-[256px] flex-shrink-0 border-r-2">
                <div className="h-5/6 border-b-2 text-center overflow-y-auto scrollbar-hide">
                  <ol>
                    <li className="border-b-2 text-[#585858] font-medium px-6 py-4 ">
                      <button onClick={() => handleClick("SQL 인젝션(SQL Injection)")}>
                        SQL 인젝션<br></br>(SQL Injection)
                      </button>
                    </li>
                    <li className="border-b-2 text-[#585858] font-medium px-6 py-4">
                      <button onClick={() => handleClick("크로스사이트스크립팅(XSS)")}>
                        크로스사이트스크립팅<br></br>(XSS)
                      </button>
                    </li>
                    <li className="border-b-2 text-[#585858] font-medium px-6 py-4">
                      <button onClick={() => handleClick("디렉토리 트레버설(Directory Traversal)")}>
                        디렉토리 트레버설<br></br>(Directory Traversal)
                      </button>
                    </li>
                    <li className="border-b-2 text-[#585858] font-medium px-6 py-4">
                      <button onClick={() => handleClick("파일 업로드(File Upload)")}>
                        파일 업로드<br></br>(File Upload)
                      </button>
                    </li>
                    <li className="border-b-2 text-[#585858] font-medium px-6 py-4">
                      <button onClick={() => handleClick("파일 다운로드(File Download)")}>
                        파일 다운로드<br></br>(File Download)
                      </button>
                    </li>                                    
                  </ol>
                </div>
                <div className="h-1/6 bg-[#F0F0F0] flex justify-center items-center">
                  {/* 이전 버튼과 점검 시작하기 버튼 */}
                  <button className="border-[#D9D9D9] border-2 text-[#585858] rounded-md mr-4 px-3 py-2 ">
                    이전
                  </button>
                  <button
                    className="border-[#2D5FFF] border-2 bg-[#0085FF] text-white rounded-md px-3 py-2"
                    onClick={handleSubmit}
                  >
                    점검 시작하기
                  </button>
                </div>
              </div>
              <div className="w-5/6 bg-[#FAFAFA]">
                {/* 선택한 취약점 별 Page Component 보여주기 */}
                {currentItem === "SQL 인젝션(SQL Injection)" && (<SqlInjection/>)}
                {currentItem === "크로스사이트스크립팅(XSS)" && <Xss/>}
                {currentItem === "디렉토리 트레버설(Directory Traversal)" && (<Traversal/>)}
                {currentItem === "파일 업로드(File Upload)" && (<FileUpload/>)}
                {currentItem === "파일 다운로드(File Download)" && (<FileDownload/>)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}