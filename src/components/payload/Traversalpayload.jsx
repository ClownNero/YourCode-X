import React, {useState} from 'react';
import { RxCaretUp, RxCaretDown } from "react-icons/rx";

export default function Traversalpayload({data}) {
  const [expandedIndex, setExpandedIndex] = useState([false,false,false]);
  const [firstIndex, setFirstIndex] = useState(Array(data.length).fill(false));
  const [secondIndex, setSecondIndex] = useState([false,false,false,false,false]);
  const [thirdIndex, setThirdIndex] = useState([false,false,false]);
  const handleClick = (index, handle,set ) => {
    set(handle.map((item, idx) => idx === index ? !handle[index] : item));
  }
  const traversalTypes=[
    {
      type:'Basic Directory Traversal',
      solution:'사용자 입력을 파일 경로에 직접 사용하지 않는다. 사용자 입력을 받아서 파일을 처리할 경우, 절대 경로 대신 애플리케이션의 루트 디렉토리를 기준으로 상대 경로를 사용한다. 또한, 사용자 입력값을 적절히 검증하고 필터링한다.'
    },
    {
      type:'Null-Byte Directory Traversal',
      solution:'사용자 입력값에 NULL 바이트(%00)가 포함되어 있는지 검사하고, 이를 걸러낸다. 이를 통해 공격자가 NULL 바이트를 이용해 경로 조작을 하는 것을 방지한다.'
    },
    {
      type:'Encoding Directory Traversal',
      solution:'사용자 입력값을 URL 디코딩한 후에 경로 조작 문자가 포함되어 있는지 검사한다. 또한, 사용자 입력값을 파일 경로에 직접 사용하지 않고, 필요한 경우 디렉토리 접근 권한을 제한한다.'
    },
    {
      type:'Double-Encoding Directory Traversal',
      solution:'사용자 입력값을 두 번 URL 디코딩한 후에 경로 조작 문자가 포함되어 있는지 검사한다. 또한, 사용자 입력값을 파일 경로에 직접 사용하지 않고, 필요한 경우 디렉토리 접근 권한을 제한한다.'
    },
    {
      type:'Unicode Encoding Directory Traversal',
      solution:'사용자 입력값을 URL 디코딩하고 유니코드 디코딩한 후에 경로 조작 문자가 포함되어 있는지 검사한다. 또한, 사용자 입력값을 파일 경로에 직접 사용하지 않고, 필요한 경우 디렉토리 접근 권한을 제한한다.'
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
                const matchedType = traversalTypes.find(type => type.type === item);
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
                  사용자 입력값에 대한 유효성 검사
                </p>
                {secondIndex[0] ?
                <>
                  <p className='my-4'>사용자가 제공하는 파일 이름이나 경로에 대해 유효성 검사를 실시</p>
                  <p className='my-4'>특수 문자나 ".." 등 경로 조작에 사용될 수 있는 문자열을 제한</p>
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
                  절대 경로 사용 금지
                </p>
                {secondIndex[1] ?
                <p className='my-4'>사용자 입력값을 파일 경로에 직접 사용하지 않고, 애플리케이션의 루트 디렉토리를 기준으로 상대 경로를 사용</p>
                :""}
              </li>
              <li 
                className={`border-b-2 px-8 py-6 bg-[#F5F5F5]`}
              >
                <p 
                  className={`text-lg font-bold ${secondIndex[2]?"text-[#0064CB]":""}`}
                  onClick={() => handleClick(2,secondIndex, setSecondIndex)}
                >
                  파일 접근 권한 관리
                </p>
                {secondIndex[2] ?
                <div className='my-4'>
                  <p>사용자가 접근할 수 있는 파일의 범위를 제한하고, 불필요한 파일에 대한 접근 권한을 제거하여 정보 노출을 최소화</p>
                </div>
                :""}
              </li>
              <li 
                className={`border-b-2 px-8 py-6 bg-[#F5F5F5] `}
              >
                <p 
                  className={`text-lg font-bold ${secondIndex[3]?"text-[#0064CB]":""}`}
                  onClick={() => handleClick(3,secondIndex, setSecondIndex)}
                >
                  웹 방화벽에 디렉토리 트레버설 공격 관련 차단 룰셋 적용
                </p>
                {secondIndex[3] ?
                <div className='my-4'>
                  <p>웹 방화벽에 디렉토리 트레버설 공격을 차단하는 룰셋을 적용하여 공격을 사전에 방어</p>
                </div>
                :""}
              </li>
              <li 
                className={`border-b-2 px-8 py-6 bg-[#F5F5F5] rounded-b-3xl`}
              >
                <p 
                  className={`text-lg font-bold ${secondIndex[4]?"text-[#0064CB]":""}`}
                  onClick={() => handleClick(4,secondIndex, setSecondIndex)}
                >
                  사용자 입력값 디코딩 및 검증
                </p>
                {secondIndex[4] ?
                <div className='my-4'>
                  <p>사용자 입력값이 URL 인코딩, 더블 인코딩, 유니코드 인코딩 등을 사용하여 경로 조작 문자를 포함하고 있는지 검사하고, 이를 걸러내는 로직을 서버 측에서 구현</p>
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
            <ul className='border-t-4'>
              <li 
                className={`border-b-2 px-8 py-6 bg-[#F5F5F5]`}
              >
                <p 
                  className={`text-lg font-bold ${thirdIndex[0]?"text-[#0064CB]":""}`}
                  onClick={() => handleClick(0,thirdIndex, setThirdIndex)}
                >
                  ASP.net
                </p>
                {thirdIndex[0] ?
                <>
                  <ul className='list-disc px-6 space-y-2 my-4 '>
                    <p className='my-4 text-lg'>Path.Combine 함수를 사용하여 사용자 입력을 포함한 경로를 만들고, 이 경로가 애플리케이션의 기본 디렉토리 내에 있는지 확인</p>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                    <p className='my-4'>
                    ASP.NET에서는 사용자 입력을 그대로 파일 경로에 사용하지 않는 것이 중요합니다. 대신 Path.Combine() 함수를 사용
                    </p>
                    <p className='my-4'>
                      반환된 경로가 애플리케이션 디렉토리 내에 있는지 확인
                    </p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[270px] border-2 bg-white ml-2 mt-8 mb-8 rounded-xl px-6'>
                    <p>string user_input = ... // 사용자 입력 받기</p>
                    <p>string path = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, user_input);</p><br/>
                    <p>if (!path.StartsWith(AppDomain.CurrentDomain.BaseDirectory))</p>
                    <p>{'{'}</p>
                    <p className='pl-5'>throw new Exception("잘못된 경로입니다.");</p>
                    <p>{'}'}</p><br/>
                    <p>// 이후 path 사용</p>
                  </div>
                </>
                :""}
              </li>
              <li 
                className={`border-b-2 px-8 py-6 bg-[#F5F5F5]`}
              >
                <p 
                  className={`text-lg font-bold  ${thirdIndex[1]?"text-[#0064CB]":""}`}
                  onClick={() => handleClick(1,thirdIndex, setThirdIndex)}
                >
                  PHP
                </p>
                {thirdIndex[1] ?
                <>
                  <ul className='list-disc px-6 space-y-2 my-4 '>
                    <p className='my-4 text-lg'>realpath 함수를 사용하여 사용자 입력을 절대 경로로 변환하고, 이 경로가 예상된 디렉토리 내에 있는지 확인</p>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                    <p className='my-4'>
                      PHP에서는 realpath() 함수를 사용하여 사용자 입력을 절대 경로로 변환하고, 이 경로가 예상된 디렉토리 내에 있는지 확인
                    </p>
                    <p className='my-4'>
                      또한, open_basedir 설정을 사용하여 스크립트가 파일 시스템의 특정 부분에만 접근하도록 제한
                    </p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[270px] border-2 bg-white ml-2 mt-8 mb-8 rounded-xl px-6'>
                    <p>$user_input = ... // 사용자 입력 받기</p>
                    <p>$path = realpath($user_input);</p><br/>
                    <p>if (strpos($path, '/expected/directory/') !== 0)</p>
                    <p>{'{'}</p>
                    <p className='pl-5'>throw new Exception('잘못된 경로입니다.');</p>
                    <p>{'}'}</p><br/>
                    <p>{'// 이후 path 사용'}</p>
                  </div>
                </>
                :""}
              </li>
              <li 
                className={`border-b-2 px-8 py-6 bg-[#F5F5F5] rounded-b-3xl`}
              >
                <p 
                  className={`text-lg font-bold ${thirdIndex[2]?"text-[#0064CB]":""}`}
                  onClick={() => handleClick(2,thirdIndex, setThirdIndex)}
                >
                  JSP
                </p>
                {thirdIndex[2] ?
                <>
                  <ul className='list-disc px-6 space-y-2 my-4 '>
                    <p className='my-4 text-lg'>File 객체를 생성하고, 이 파일의 캐노니컬 경로가 예상된 디렉토리 내에 있는지 확인</p>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                    <p className='my-4'>
                      JSP에서는 사용자 입력을 파일 경로에 직접 사용 않고 사용자 입력을 검증 후 안전하게 처리하여 사용
                    </p>
                    <p className='my-4'>
                      또한, 필요한 파일에만 접근 권한을 부여, 외의 파일에는 접근 X
                    </p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[250px] border-2 bg-white ml-2 mt-8 mb-8 rounded-xl px-6'>
                    <p>String userInput = ... // 사용자 입력 받기</p>
                    <p>File file = new File(userInput);</p><br/>
                    <p>if (!file.getCanonicalPath().startsWith("/expected/directory/"))</p>
                    <p>{'{'}</p>
                    <p className='pl-5'>throw new Exception("잘못된 경로입니다.");</p>
                    <p>{'}'}</p><br/>
                    <p>// 이후 file 사용</p>
                  </div>
                </>
                :""}
              </li>
            </ul>
          </>
        )}
        </li>
      </ul>
    </div>
  );
}