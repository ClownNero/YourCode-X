import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Review(props) {
  const [selectedStars, setSelectedStars] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [reviewBody, setReviewBody] = useState('');
  const [score, setScore] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();

    // 여기서 서버에 데이터를 전송하거나 상태 관리 라이브러리에 저장할 수 있습니다.
    console.log({ score, reviewBody });
    setScore(1);
    setSelectedStars([true, false, false, false, false]); // 모든 별 선택 해제
    setReviewBody('');
    setIsOpen(true); // 리뷰 제출 후에 모달 보이기
  };

  const handleClick = (index) => {
    let newSelectedStars = [...selectedStars];
    
    for (let i = 0; i <= index; i++) {
      newSelectedStars[i] = true;
      
      if (i === index) {
        setScore(i + 1);
      }
      
      for (let j = index + 1; j < selectedStars.length; j++) {
        newSelectedStars[j] = false;
      }
      
      setSelectedStars(newSelectedStars);
    }
   };
  
  return (
    <>
      <h2 className="text-Result text-2xl font-bold">YourCode-X의 서비스는 만족스러우셨나요?</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex space-x-2 justify-center text-2xl text-red-500 mt-4 mb-12">
          {selectedStars.map((isSelected, index) => (
            <div key={index} onClick={() => handleClick(index)}>
              {isSelected ? <AiFillStar /> : <AiOutlineStar />}
            </div>
          ))}
        </div>
        <textarea 
          className="w-full h-[175px] bg-[#F1F1F1] rounded-2xl resize-none p-7 focus:outline-none focus:ring-4 focus:ring-search" 
          placeholder="개선 사항이나 문의사항이 있다면 이곳에 남겨주세요." 
          value={reviewBody}
          required 
          onChange={(e) => setReviewBody(e.target.value)}
        />
        <button type="submit" className="self-end mt-4 px-4 py-2 bg-[#1360FF] hover:opacity-95 text-white rounded-xl">submit</button>
      </form>
      {isOpen && (
         <div 
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={()=> setIsOpen(false)}
         >
           <div className="bg-white rounded-3xl p-12 w-[650px] h-[300px] text-lg">
              <img
              className="w-16 mb-6 drop-shadow-md inline bg-slate-300 rounded-full"
              src="/images/logo.png"
              alt="security logo"
              />
             <h2 className="text-[#2D5FFF] text-2xl font-bold mb-6">Thank you for your response!</h2>
             <p>제출해주셔서 감사합니다.</p>
             <p>더 나은 서비스를 제공하기 위해 노력하겠습니다.</p>
           </div>
         </div>
       )}
    </>
  );
}