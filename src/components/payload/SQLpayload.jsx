import React, {useState} from 'react';
import { RxCaretUp, RxCaretDown } from "react-icons/rx";

export default function SQLpayload({data}) {
  const [expandedIndex, setExpandedIndex] = useState([false,false,false]);
  const [firstIndex, setFirstIndex] = useState(Array(data.length).fill(false));
  const [secondIndex, setSecondIndex] = useState([false,false,false]);
  const handleClick = (index, handle,set ) => {
    set(handle.map((item, idx) => idx === index ? !handle[index] : item));
  }
  const injectionTypes=[
    {
      type:'Classic SQL Injection',
      solution:'사용자 입력을 직접 SQL 쿼리에 포함시키지 않고, 대신 파라미터화된 쿼리(prepared statement)를 사용. 이렇게 하면 SQL 인터프리터는 사용자 입력을 안전하게 처리할 수 있다.'
    },
    {
      type:'Error-Based SQL Injection',
      solution:'자세한 오류 메시지를 사용자에게 표시하지 않도록 한다. 이를 통해 공격자에게 유용한 정보를 제공하는 것을 방지한다. 또한, 사용자로부터 받은 입력에 대해 적절한 검증 및 에스케이핑을 수행한다.'
    },
    {
      type:'Union-Based SQL Injection',
      solution:'사용자 입력을 직접 SQL 쿼리에 포함시키지 않고, 대신 파라미터화된 쿼리(prepared statement)를 사용한다. 또한, 사용자로부터 받은 입력에 대해 적절한 검증 및 에스케이핑을 수행한다.'
    },
    {
      type:'Blind SQL Injection',
      solution:'사용자 입력값을 적절히 필터링하고 에스케이핑한다. 또한, 가능한한 파라미터화된 쿼리를 사용하며, 데이터베이스 오류 메시지를 통제하여 공격자에게 유용한 정보를 제공하지 않도록 한다.'
    },
    {
      type:'Out-Of-Band SQL Injection',
      solution:'사용자 입력값을 적절히 필터링하고 에스케이핑한다. 또한, 가능한한 파라미터화된 쿼리를 사용하며, 네트워크 수준에서 출발지 및 목적지 IP를 제한하거나 파일 전송을 제한하는 등의 네트워크 보안을 강화한다.'
    },
    {
      type:'Second-Order SQL Injection',
      solution:'데이터베이스에 저장된 값을 사용할 때도, 마치 처음 사용자 입력을 받는 것처럼 동일한 수준의 검증 및 에스케이핑을 수행한다. 또한, 가능한한 파라미터화된 쿼리를 사용한다.'
    },
  ];
  return (
    <div >
      <ul>
        <li 
          key={'id_1'} 
          className={`rounded-3xl items-center ml-20  bg-[#EFEFEF]  ${expandedIndex[0] ? 'pt-6':'py-6'} mt-2 mb-8 shadow-detail`}
        >
          <div className={`flex justify-between px-8 ${expandedIndex[0] ? 'mb-6':''}`}>
            <span className='font-bold text-lg'>해결방안</span>
          {expandedIndex[0] ? (
            <RxCaretUp
              onClick={() => handleClick(0,expandedIndex, setExpandedIndex)}
              className="text-3xl"
            />
          ) : (
            <RxCaretDown
              onClick={() => handleClick(0,expandedIndex, setExpandedIndex)}
              className="text-3xl"
            />
          )}
          </div>
          {expandedIndex[0] && (
          <>
            <ul className='border-t-4'>
              {data.map((item, index) => {
                const matchedType = injectionTypes.find(type => type.type === item);
                const isLastIndex = index === data.length - 1; // 이 변수가 true이면 현재 인덱스는 마지막 인덱스입니다.
                return matchedType ? (
                  <li 
                    key={index}
                    className={`border-b-2 px-8 py-6 bg-[#F5F5F5] ${isLastIndex ? "rounded-b-3xl":""}`}
                  >
                    <p 
                      className={`text-lg font-bold ${firstIndex[index]?"text-[#0064CB]":""}`}
                      onClick={() => handleClick(index,firstIndex, setFirstIndex)}
                    >{matchedType.type}</p>
                    {firstIndex[index] ? <p className='my-4'>{matchedType.solution}</p>: null }
                  </li>
                ) : null;
              })}
            </ul>
          </>
        )}
        </li>
        <li 
          key={'id_2'} 
          className={`rounded-3xl items-center ml-20  bg-[#EFEFEF]  ${expandedIndex[1] ? 'pt-6':'py-6'} mt-2 mb-8 shadow-detail`}
        >
          <div className={`flex justify-between px-8 ${expandedIndex[1] ? 'mb-6':''}`}>
            <span className='font-bold text-lg'>기타</span>
          {expandedIndex[1] ? (
            <RxCaretUp
              onClick={() => handleClick(1,expandedIndex, setExpandedIndex)}
              className="text-3xl"
            />
          ) : (
            <RxCaretDown
              onClick={() => handleClick(1,expandedIndex, setExpandedIndex)}
              className="text-3xl"
            />
          )}
          </div>
          {expandedIndex[1] && (
          <>
            <ul className='border-t-4'>
              <li 
                className={`border-b-2 px-8 py-6 bg-[#F5F5F5]`}
              >
                <p 
                  className={`text-lg font-bold ${secondIndex[0]?"text-[#0064CB]":""}`}
                  onClick={() => handleClick(0,secondIndex, setSecondIndex)}
                >
                  문자열 유효성 검증 로직 구현
                </p>
                {secondIndex[0] ?
                <>
                  <ul className='list-disc px-6 space-y-2 my-4 '>
                    <li>SQL Query에 사용되는 문자열에 대해 유효성 검사를 실시하는 프로세스 구현</li>
                    <li>특수문자를 사용자 입력값으로 지정 금지</li>
                    <p>(단, 데이터베이스에 따라 사용이 달라질 수 있음.</p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[600px] h-[200px] border-2 bg-white ml-2 mt-4 rounded-xl px-6'>
                    <div className='flex items-center'><div className='bg-[#E4E4E4] w-[120px] h-[50px] inline-flex rounded-2xl items-center justify-center mr-4 text-lg font-bold'>'</div><span>문자와 데이터의 구분 기호</span></div>
                    <div className='flex items-center my-2'><div className='bg-[#E4E4E4] w-[120px] h-[50px] inline-flex rounded-2xl items-center justify-center mr-4 text-lg font-bold'>;</div><span>쿼리 구분 기호</span></div>
                    <div className='flex items-center'><div className='bg-[#E4E4E4] w-[120px] h-[50px] inline-flex rounded-2xl items-center justify-center mr-4 text-lg font-bold'>--, #</div><span>해당 라인 주석 구분 기호</span></div>
                  </div>
                </>
                :""}
              </li>
              <li 
                className={`border-b-2 px-8 py-6 bg-[#F5F5F5]`}
              >
                <p 
                  className={`text-lg font-bold  ${secondIndex[1]?"text-[#0064CB]":""}`}
                  onClick={() => handleClick(1,secondIndex, setSecondIndex)}
                >
                  Dynamic SQL 구문 사용 금지
                </p>
                {secondIndex[1] ?
                <p className='my-4'>Dynamic SQL 구문 사용을 지양하며 파라미터에 문자열 검사 필수 적용</p>
                :""}
              </li>
              <li 
                className={`border-b-2 px-8 py-6 bg-[#F5F5F5] rounded-b-3xl`}
              >
                <p 
                  className={`text-lg font-bold ${secondIndex[2]?"text-[#0064CB]":""}`}
                  onClick={() => handleClick(2,secondIndex, setSecondIndex)}
                >
                  오류에 대한 예외 처리
                </p>
                {secondIndex[2] ?
                <div className='my-4'>
                  <p>에러 메시지는 공격자에게 많은 정보를 제공하므로 오류처리로 정보 노출 최소화</p>
                  <p>시스템에서 제공하는 에러 메시지 및 DBMS에서 제공하는 에러 코드가 노출되지 않도록 예외처리</p>
                </div>
                :""}
              </li>
            </ul>
          </>
        )}
        </li>
        <li 
          key={'id_3'} 
          className={`rounded-3xl items-center ml-20  bg-[#EFEFEF]  ${expandedIndex[2] ? 'pt-6':'py-6'} mt-2 mb-8 shadow-detail`}
        >
          <div className={`flex justify-between px-8 ${expandedIndex[2] ? 'mb-6':''}`}>
            <span className='font-bold text-lg'>애플리케이션 별 설정 방법</span>
          {expandedIndex[2] ? (
            <RxCaretUp
              onClick={() => handleClick(2,expandedIndex, setExpandedIndex)}
              className="text-3xl"
            />
          ) : (
            <RxCaretDown
              onClick={() => handleClick(2,expandedIndex, setExpandedIndex)}
              className="text-3xl"
            />
          )}
          </div>
          {expandedIndex[2] && (
          <>
            {/* 이 부분 추가 예정*/}
          </>
        )}
        </li>
      </ul>
    </div>
  );
}

