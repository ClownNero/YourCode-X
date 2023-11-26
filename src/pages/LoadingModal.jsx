import React from 'react';
import '../App.css';

export default function LoadingModal({isOpen}) {
  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 min-w-[1168px] flex items-center justify-center z-50 bg-black bg-opacity-50"
        >
          <div
            className="flex flex-col items-center justify-center bg-white w-[500px] h-[350px] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sk-chase mb-10">
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
            </div>
            <p className='font-bold text-Result text-xl'>진단 중입니다.</p>
            <p className='font-bold text-Result text-xl mb-4'>잠시만 기다려주세요.</p>
            <p className='text-[#8E8E8E] text-sm'>It's undergoing diagnosis.</p>
            <p className='text-[#8E8E8E] text-sm'>Please wait a moment.</p>
          </div>
          
          {/* 여기에 들어가게 만들어줘 */}
          
        </div>
      )}
    </div>
  )
}