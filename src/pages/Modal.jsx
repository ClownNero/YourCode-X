import React, { useState } from "react";

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
        ask to YourCode-X
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 overflow-auto"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-12 w-4/5 h-5/6 overflow-auto text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-2">코드로 자세히 알아보기</h2>
            <p className="text-Result">Learn more with code</p>
            <div className="bg-slate-100 h-4/5 border-[#2D5FFF] border rounded-xl">
              sfafafafssf
            </div>
            <div className="flex-col text-center">{/* ChatGPT data */}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
