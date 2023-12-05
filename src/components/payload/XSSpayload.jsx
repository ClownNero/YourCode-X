import React, {useState} from 'react';
import { RxCaretUp, RxCaretDown } from "react-icons/rx";

export default function XSSpayload({data}) {
  const [expandedIndex, setExpandedIndex] = useState([false,false,false]);
  const [firstIndex, setFirstIndex] = useState(Array(data.length).fill(false));
  const [secondIndex, setSecondIndex] = useState([false,false,false]);
  const [thirdIndex, setThirdIndex] = useState([false,false,false]);
  const handleClick = (index, handle,set ) => {
    set(handle.map((item, idx) => idx === index ? !handle[index] : item));
  }
  const xssTypes=[
    {
      type:'Stored XSS',
      solution:'사용자가 제공하는 모든 데이터를 적절하게 필터링한다. 이를 통해 공격자가 악성 스크립트를 삽입하는 것을 방지한다. 또한, 콘텐츠 보안 정책(Content Security Policy, CSP)을 적용해 스크립트의 실행을 제어한다.'
    },
    {
      type:'Reflected XSS',
      solution:'웹 애플리케이션에서 사용자의 입력값을 URL이나 웹 페이지에 직접 반영하기 전에 이를 적절히 필터링한다. 또한, HTTP 응답 헤더에 X-XSS-Protection: 1; mode=block을 추가하여 브라우저의 XSS 필터 기능을 활성화한다.'
    },
    {
      type:'DOM-Based XSS',
      solution:'웹 애플리케이션에서 동적으로 HTML 콘텐츠를 생성할 때 안전한 메서드와 함수를 사용한다. 예를 들어, document.createElement, element.textContent 등의 메서드는 사용자의 입력값을 안전하게 처리한다. 또한, 사용자의 입력값을 JavaScript 코드나 HTML 콘텐츠로 사용하기 전에 이를 적절히 필터링한다.'
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
                const matchedType = xssTypes.find(type => type.type === item);
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
                  필터링 작업 구현
                </p>
                {secondIndex[0] ?
                <>
                  <ul className='list-disc px-6 space-y-2 my-4 '>
                    <li>게시물에 HTML이나 자바 스크립트에 해당되는 태그 사용을 사전에 제한하고, 입력한 인수 값에 대한 필터링 작업 필요</li>
                    <li>게시물 본문뿐만 아니라 제목, 댓글, 검색어 입력 창, 그 외 사용자 측에서 넘어오는 값을 신뢰하는 모든 form과 인수 값에 대한 필터링 작업 필요</li>
                    <li>클라이언트 측이 아닌 서버 측에서 입력 값에 대한 필터링 로직 구현이 필요</li>
                    <p>(단, 필터링 조치 대상 입력 값은 이것 이외에도 다양할 수 있음.</p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[750px] h-[200px] border-2 bg-white ml-2 mt-4 rounded-xl px-6'>
                    <div className='flex items-center my-4'>
                      <div className='bg-[#E4E4E4] w-[120px] h-[50px] inline-flex rounded-2xl items-center justify-center mr-4 text-sm font-bold'>스크립트 정의어</div>
                      <span>{`<SCRIPT>, <OBJECT>, <APPLET>, <EMBED>, <FORM>, <IFRAME> 등`}</span>
                    </div>
                    <div className='flex items-center my-4'>
                      <div className='bg-[#E4E4E4] w-[120px] h-[50px] inline-flex rounded-2xl items-center justify-center mr-4 text-sm font-bold'>특수문자</div>
                      <span>{`<, >, “, ‘, &, %, %00(null) 등`}</span>
                    </div>
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
                  우회 공격 차단
                </p>
                {secondIndex[1] ?
                <p className='my-4'>URLDecoder 클래스에 존재하는 decode 메소드를 통해 URL 인코딩이 적용된 사용자 입력 값을 디코딩함으로써 우회 공격 차단</p>
                :""}
              </li>
              <li 
                className={`border-b-2 px-8 py-6 bg-[#F5F5F5] rounded-b-3xl`}
              >
                <p 
                  className={`text-lg font-bold ${secondIndex[2]?"text-[#0064CB]":""}`}
                  onClick={() => handleClick(2,secondIndex, setSecondIndex)}
                >
                  웹 방화벽에 사용자 입력 폼 관련 차단 룰셋 적용
                </p>
                {secondIndex[2] ?
                <div className='my-4'>
                  <p>웹 방화벽에 모든 사용자 입력 폼(회원정보 변경, 게시판, 댓글, 자료실, 검색, URL 등)을 대상으로 특수 문자, 특수 구문 필터링하도록 룰셋 적용 </p>
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
                  <div className=' flex flex-col justify-center w-[1010px] h-[420px] border-2 bg-white ml-2 mt-8 mb-8 rounded-xl px-6'>
                    <p>{'<%'}</p>
                    <p>... 중략 ...</p>
                    <p>If use_HTML Then</p>
                    <p className='pl-5'>content = Server.HTMLEncode(content)</p>
                    <p>... 중략 ...</p><br/>
                    <p>Sub ReplaceStr(content, byref str)</p>
                    <p className='pl-9'>content = replace(content, "'", " \'")</p>
                    <p className='pl-9'>{'content = replace(content, "&", "&amp;")'}</p>
                    <p className='pl-9'>content = replace(content, " \'", "&quot")</p>
                    <p className='pl-9'>{'content = replace(content, "<", "&lt")'}</p>
                    <p className='pl-9'>{'content = replace(content, ">", "&gt")'}</p>
                    <p className='pl-9'>str = content</p>
                    <p>End Sub</p>
                    <p className='pl-9'>... 중략 ...</p>
                    <p>{'%>'}</p>
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
                  <div className=' flex flex-col justify-center w-[1010px] h-[350px] border-2 bg-white ml-2 mt-8 mb-8 rounded-xl px-6'>
                    <p>... 중략 ...</p>
                    <p className='pl-5'>if($use_html == 1) // HTML tag를 사용해야 하는 경우 부분 허용</p>
                    <p className='pl-9'>{'$memo = str_replace("<", "&lt", $memo);// HTML TAG 모두 제거'}</p>
                    <p className='pl-9'>$tag = explode(",", $use_tag);</p><br/>
                    <p className='pl-9'>{'for($i=0; $i<count($tag); $i++) { // 허용할 TAG만 사용할 수 있도록 변경'}</p>
                    <p className='pl-16'>{'$memo = eregi_replace("&lt".$tag[$i]." ", "<".$tag[$i]." ", $memo);'}</p>
                    <p className='pl-16'>{'$memo = eregi_replace("&lt".$tag[$i].">", "<".$tag[$i].">", $memo);'}</p>
                    <p className='pl-16'>{'$memo = eregi_replace("&lt/".$tag[$i], "</".$tag[$i], $memo); }'}</p>
                    <p className='pl-9'>else // HTML tag를 사용하지 못하게 할 경우</p>
                    <p className='pl-9'>{'$memo = str_replace("<", "&lt", $memo);'}</p>
                    <p className='pl-9'>{'$memo = str_replace(">", "&gt", $memo);'}</p>
                    <p className='pl-9'>... 중략 ...</p>
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
                  <div className=' flex flex-col justify-center w-[1010px] h-[200px] border-2 bg-white ml-2 mt-8 mb-8 rounded-xl px-6'>
                    <p>{'<%'}</p>
                    <p>... 중략 ...</p>
                    <p>string subject = request.getParameter("subject_BOX");</p>
                    <p className='pl-16'>{'subject = subject.replaceAll(“<”, “&lt”);'}</p>
                    <p className='pl-16'>{'subject = subject.replaceAll(“>”, “&gt”);'}</p>
                    <p className='pl-16'>... 중략 ...</p>
                    <p>{'%>'}</p>
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