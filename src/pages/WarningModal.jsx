import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function WarningModal({ isOpen, onModalChange, onModalClose }) {

  const handleSubmit = () => {
    onModalChange();
  };
  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 min-w-[968px] flex items-center justify-center z-50 bg-black bg-opacity-50 overflow-auto"
          onClick={onModalClose}
        >
          <div
            className="bg-white  w-[968px] h-[540px] overflow-auto text-left scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between bg-[#756F5221] px-4 py-2">
              <div className="inline-flex items-center">
                <div className="text-2xl mr-4 inline bg-[#D9CB84] w-[35px] text-center rounded-full">!</div>
                <span className="font-bold text-xl">WARNING!</span>
              </div>
              <AiOutlineClose className="text-xl" onClick={onModalClose}/>
            </div>
            <div className="p-12">
              <h2 className="text-2xl font-bold">아래에 명시된 주의사항을 확인 후 진행해주세요.</h2>
              <ol className="bg-[#F7F5EB] my-6 py-8 px-4 space-y-4">
                <li>- 웹 사이트의 보안을 테스트하거나 스캔하기 전에 반드시 사전 허가를 받아야 합니다.</li>
                <li>- 허가된 사이트에서 진단 도구를 사용하지 않을 경우 법적인 책임은 사용자에게 있습니다.</li>
                <li>- 스캔 과정에서 데이터 손실이 발생할 수도 있으므로 점검을 시작하기 전에 중요 데이터는 반드시 백업해주세요.</li>
              </ol>
              <p>주의사항의 미숙지로 인해 발생하는 모든 상황에 대한 법적 책임은 사용자에게 있음을 알립니다.</p>
              <div className="text-center mt-8">
                <p className="text-sm mb-4">아래 버튼을 클릭 시 취약점 분석이 시작됩니다.</p>
                <button 
                  className="px-8 py-3 bg-[#E0D9B0] rounded-xl text-lg"
                  onClick={handleSubmit}
                >
                    위와 같은 주의사항을 확인하였습니다.
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default WarningModal;