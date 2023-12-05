import React from 'react';
import { RxTriangleDown, RxTriangleUp,  RxDash } from "react-icons/rx";
export default function Changebox({dataD, colorD}) {
  const colors = {
    red: '#F87171',
    blue: '#60A5FA',
    yellow: '#FBBF24',
    green: '#34D399',
    // 추가 색상을 여기에 정의하세요.
  };
  const borderColor = colors[colorD];
  const textColor = colors[colorD];
  const absDifference = Math.abs(dataD.difference);
  return (
    <div>
      <li className="flex flex-col justify-center border-l-8 items-center w-[280px] h-[170px] rounded-3xl shadow-change"
        style={{borderColor: borderColor}}>
        <p className=" w-[162px] text-lg text-left text-[#5B5B5B]">{dataD.category}</p>
        <div className="flex items-center my-3">
          <span className={`${dataD.currentData === "없음" ? "mr-36 text-6xl":"mr-10 text-5xl"} font-bold text-[#434343]`}>
            {dataD.currentData === "없음" ? <RxDash /> : dataD.currentData}
          </span>
          {dataD.currentData !== "없음" &&
            <div className="ml-10 font-bold text-xl" style={{color: textColor}}>
              {dataD.difference > 0 ? <RxTriangleUp className="text-6xl inline-block" style={{color: textColor}} /> : 
               dataD.difference < 0 ? <RxTriangleDown className="text-6xl inline-block" style={{color: textColor}} /> : 
               <RxDash className="text-6xl inline-block" style={{color: textColor}} />}
              {absDifference}
            </div>
          }
        </div>
      </li>
    </div>
  );
}