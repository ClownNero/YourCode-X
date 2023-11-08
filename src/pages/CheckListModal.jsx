import React from "react";

export default function CheckListModal(props) {
  return (
    <div>
      {1 && (
        <div className="fixed inset-0 min-w-[1280px] flex items-center justify-center z-50 bg-black bg-opacity-50 overflow-auto">
          <div className="bg-white  w-[1280px] h-5/6 overflow-auto text-left scrollbar-hide">
            <div className="h-1/5 border-b-black border-2 px-6 pt-8">
              <h2 className="font-bold">
                원하는 평가 항목을 선택해주세요.(최소 1개 이상)
              </h2>
            </div>
            <div className="h-4/5 flex">
              <div className="w-1/5 border-r-2">
                <div className="h-5/6 border-b-2">
                  <ol>
                    <li className="border-b-2 px-6 py-4">
                      SQL 인젝션(SQL Injection)
                    </li>
                    <li className="border-b-2 px-6 py-4">
                      크로스사이트스크립팅(XSS)
                    </li>
                  </ol>
                </div>
                <div className="h-1/6 bg-[#F0F0F0]">
                  {/* 이전 버튼과 점검 시작하기 버튼 */}
                </div>
              </div>
              <div className="w-4/5 bg-[#FAFAFA]">
                {/* 선택한 취약점 별 Page Component 보여주기 */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
