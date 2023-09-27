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
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Open Modal
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-12 w-4/5 h-5/6 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex">
              <div className="w-full pr-4 border-r overflow-y-auto">
                <h2>chatGPT 검색 부분</h2>
                {/* ChatGPT data */}
              </div>
              <div className="flex flex-col p-4 w-full overflow-y-auto">
                <h2 className="text-center text-3xl font-bold">
                  코드로 자세히 알아보기
                </h2>
                <p className="text-center">Learn more with code</p>
                <div className="border-b pb-4">
                  <h3>FeedBack</h3>
                  {/* FeedBack data 부분*/}
                  <p>
                    SQL Injection은 악의적인 사용자가 입력 데이터에 악의적인 SQL
                    코드를 삽입하여 데이터베이스에 대한 공격을 시도하는 보안
                    취약점입니다. 이를 방지하기 위해서는 입력 데이터를 안전하게
                    처리해야 합니다. 대부분의 프로그래밍 언어와 데이터베이스
                    시스템은 파라미터화된 쿼리를 사용하여 SQL Injection을 방지할
                    수 있습니다.
                  </p>
                </div>
                <div className="pt-4">
                  <h3>Comment</h3>
                  {/* Comment data 부분*/}
                  <p>
                    이 코드에서는 ?를 사용하여 입력 값을 파라미터화된 쿼리에
                    전달합니다. 이렇게 하면 입력 데이터가 SQL Injection 공격에
                    사용되지 않도록 보호됩니다. 파라미터화된 쿼리를 사용하면
                    데이터베이스 시스템이 입력을 안전하게 처리하므로 SQL
                    Injection 공격을 방지할 수 있습니다. 데이터베이스 및
                    프로그래밍 언어에 따라 파라미터화된 쿼리를 작성하는 방법이
                    다를 수 있으므로 해당 언어 및 데이터베이스에 맞는 문서 및
                    가이드를 참고하여 구현하는 것이 중요합니다...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
