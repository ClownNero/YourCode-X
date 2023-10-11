import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function Review(props) {
  const [selectedStars, setSelectedStars] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleClick = (index) => {
    let newSelectedStars = [...selectedStars];
    for (let i = 0; i <= index; i++) {
      newSelectedStars[i] = true;
    }
    for (let j = index + 1; j < selectedStars.length; j++) {
      newSelectedStars[j] = false;
    }
    setSelectedStars(newSelectedStars);
  };
  // Calculate score based on the number of selected stars
  const score = selectedStars.reduce((acc, curr) => acc + (curr ? 1 : 0), 0);
  return (
    <>
      <h2 className="text-Result text-2xl font-bold">YourCode-X의 서비스는 만족스러우셨나요?</h2>
      <div className="flex space-x-2 justify-center text-2xl text-red-500 mt-4 mb-12">
        {selectedStars.map((isSelected, index) => (
          <div onClick={() => handleClick(index)}>
            {isSelected ? <AiFillStar /> : <AiOutlineStar />}
          </div>
        ))}
      </div>
      <div className="bg-[#F1F1F1] w-full h-[175px] rounded-2xl">

      </div>
    </>
  );
}
