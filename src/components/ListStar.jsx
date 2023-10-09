import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function ListStar(props) {
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
    <div className="flex space-x-2 justify-center text-red-500 my-3">
      {selectedStars.map((isSelected, index) => (
        <div onClick={() => handleClick(index)}>
          {isSelected ? <AiFillStar /> : <AiOutlineStar />}
        </div>
      ))}
      {/* Display the score */}
      <p>Score: {score} </p>
    </div>
  );
}
