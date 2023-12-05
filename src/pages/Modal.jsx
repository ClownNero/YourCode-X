import React, { useState } from "react";
import ChatUI from "../components/ChatUI";

function Modal({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="text-right">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        YourCode-X 질문하기
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 min-w-[1024px] flex items-center justify-center z-50 bg-black bg-opacity-50 overflow-auto"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-[36px] p-12 w-[1024px] h-5/6 overflow-auto text-center scrollbar-hide"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">코드로 자세히 알아보기</h2>
              <p className="text-Result mb-4">Learn more with code</p>
            </div>
            <ChatUI />
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;