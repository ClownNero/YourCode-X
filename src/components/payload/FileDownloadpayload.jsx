import React, {useState} from 'react';
import { RxCaretUp, RxCaretDown } from "react-icons/rx";

export default function FileDownloadpayload({data}) {
  const [expandedIndex, setExpandedIndex] = useState([false,false,false]);
  const [firstIndex, setFirstIndex] = useState(Array(data.length).fill(false));
  const [secondIndex, setSecondIndex] = useState([false,false]);
  const [thirdIndex, setThirdIndex] = useState([false,false,false]);
  const handleClick = (index, handle,set ) => {
    set(handle.map((item, idx) => idx === index ? !handle[index] : item));
  }
  const downloadTypes=[
    {
      type:'Path Manipulation File Download',
      solution:'Path Manipulation File Download 취약점은 공격자가 파일 경로를 조작해 서버에서 의도치 않은 파일을 다운로드하는 취약점이다. 이를 해결하기 위해 사용자의 입력값 검증, 화이트리스트 방식 적용, 절대 경로 사용, 최소 권한 원칙 적용, 그리고 로깅 및 모니터링을 진행해야 합니다. 이 방법들을 통해 웹 애플리케이션의 보안을 강화하고, 공격자가 민감한 파일에 접근하는 것을 방지할 수 있다.'
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
                const matchedType = downloadTypes.find(type => type.type === item);
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
                  보안설정방법
                </p>
                {secondIndex[0] ?
                <>
                  <ul className='list-disc px-6 space-y-3 my-4 '>
                    <li>파일 다운로드의 취약성은 주로 파일의 이름을 조작하는 데서 비롯되므로 다운로드 파일 이름을 데이터베이스에 저장하고 다운로드 수행 시 요청 파일 이름과 비교하여 적절한지 확인하여 사용자가 조작할 수 있는 변수를 제거함</li>
                    <li>다운로드 애플리케이션 소스 파일을 수정하여 파일을 다운 받을 수 있는 디렉터리를 특정 디렉터리로 한정하고 이 외의 다른 디렉터리에서는 파일을 다운받을 수 없도록 설정해야 함.</li>
                    <li>PHP를 사용하는 경우 php.ini 에서 magic_quotes_gpc를 On으로 설정하여 .\./ 와 같은 역슬러시 문자 입력 시 치환되도록 설정.</li>
                    <li>파일 다운로드의 절대 경로 설정 및 DocBase의 상위경로 또는 타 드라이브로 설정을 변경함.</li>
                    <li>다운로드 경로 정보를 자바스크립트나 js 소스에서 확인할 수 없게 제한하며, 웹 서버 서블릿 내부 또는 별도의 설정 파일에서 관리.</li>
                    <li>다운로드를 제공하는 페이지의 유효 세션 체크 로직 필수 적용.</li>
                    <li>다운로드 시 사용되는 파라미터 값 대상으로 아래의 특수 문자를 필터링하도록 웹 방화벽 룰셋 적용.</li>
                  </ul>
                  <div className=' flex flex-col justify-center w-[600px] h-[270px] border-2 bg-white ml-2 mt-4 rounded-xl px-6'>
                    <div className='flex items-center'><div className='bg-[#E4E4E4] w-[120px] h-[50px] inline-flex rounded-2xl items-center justify-center mr-4 text-lg font-bold'>.</div><span>Path Traversal 가능성의 확인</span></div>
                    <div className='flex items-center my-3'><div className='bg-[#E4E4E4] w-[120px] h-[50px] inline-flex rounded-2xl items-center justify-center mr-4 text-lg font-bold'>/</div><span>특정 Path의 접근 가능성을 확인</span></div>
                    <div className='flex items-center'><div className='bg-[#E4E4E4] w-[120px] h-[50px] inline-flex rounded-2xl items-center justify-center mr-4 text-lg font-bold'>\</div><span>운영환경에 따른 Path 접근 확인</span></div>
                    <div className='flex items-center mt-3'><div className='bg-[#E4E4E4] w-[120px] h-[50px] inline-flex rounded-2xl items-center justify-center mr-4 text-lg font-bold'>%</div><span>UTF 인코딩 파라미터</span></div>
                  </div>
                </>
                :""}
              </li>
              <li 
                className={`border-b-2 px-8 py-6 bg-[#F5F5F5] rounded-b-3xl`}
              >
                <p 
                  className={`text-lg font-bold  ${secondIndex[1]?"text-[#0064CB]":""}`}
                  onClick={() => handleClick(1,secondIndex, setSecondIndex)}
                >
                  점검방법
                </p>
                {secondIndex[1] ?
                <>
                  <ul className='list-disc px-6 space-y-3 my-4 '>
                    <li>웹 사이트에 cgi, jsp, php 등의 애플리케이션을 이용하여 파일을 다운받는 페이지가 있는지 조사.</li>
                    <li>웹 사이트에서 파일 다운로드 시 요청(Request) 정보에 파일 경로를 웹 서버(웹사이트 포함) 중요 파일(winnt\win.ini, /etc/passwd 등)의 상대 경로(../)로 치환한 후 전송했을 때 해당 경로 파일들을 다운로드 가능한지 확인.</li>
                    <li>PHP를 사용하는 경우 php.ini 에서 magic_quotes_gpc를 On으로 설정하여 .\./ 와 같은 역슬러시 문자 입력 시 치환되도록 설정.</li>
                    <p>../../../../../../../../../../../../etc/passwd</p>
                    <p>../../../../../../../../../../../../winnt/win.ini</p>
                    <p>../../../../../../../../../../../../boot.ini</p>
                    <li>"Step 2"에서 파일 다운로드가 불가능한 경우 변조한 파일 경로를 아래의 인코딩(또는 치환, 종단문자추가)을 적용하여 재전송 후 다운로드 가능한지 확인.</li>
                    <p><span className='font-bold'>※ URL 인코딩:</span> .(%2e), /(%2f), \(%5c)</p>
                    <p><span className='font-bold'>※ 16bit 유니코드 인코딩:</span> .(%u002e), /(%u2215), \(%u2216)</p>
                    <p><span className='font-bold'>※ 더블URL 인코딩:</span> .(%252e), /(%252f), \(%255c)</p>
                    <p><span className='font-bold'>※ 경로 치환:</span> …//, ….\\, ….\/, …./\</p>
                    <p><span className='font-bold'>※ 종단 문자 추가:</span> [파일명]%00.jpg, [파일명]%0a.jpg</p>
                  </ul>
                </>
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
                    <li className='text-xl font-bold my-4'>필터링 처리</li>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[250px] border-2 bg-white ml-2 mt-8 mb-8 rounded-xl px-6'>
                    <p>.....</p>
                    <p>file = Request.form(“file”)</p>
                    <p>Response.ContentType = “application/unknown”</p>
                    <p>Response.AddHeader “Content-Disposition”, “attachment; filename=” & file</p>
                    <p>Set objStream = Server.CreateObject(“ADODB.Stream”)</p>
                    <p>strFile = Server.MapPath(“./uploadfiles”) & “ \” & file</p>
                    <p>strFname = Mid(Fname, InstrRev(file, “ \”) +1)</p>
                    <p>if strFile = strFPath Then</p>
                    <p>.....</p>
                  </div>
                  <ul className='list-disc px-6 space-y-2 my-4 '>
                    <li className='text-xl font-bold my-4'>ASP.net 예외처리</li>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                    <p className='my-4'>.NET 환경은 자체적으로 Path Traversal을 막고 있으므로, 소스 자체적인 별다른 조치는 필요가 없으나 일부 .NET 버전에 해당 보안 매커니즘을 우회할 수 있는 취약점이 발견된 사례가 있으므로 , 최신 패치를 설치할 것을 권고함. 해당 패치가 설치되어 있지 않은 경우 Global.asax에 다음과 같은 내용을 추가하여야 함.</p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[220px] border-2 bg-white ml-2 mt-8 mb-8 rounded-xl px-6'>
                    <p>{'<script language="C#" runat="server">'}</p>
                    <p>{'void Application_BeginRequest(object source, EventArgs e) {'}</p>
                    <p>{"if (Request.Path.IndexOf(' \ \') >= 0 ||"}</p>
                    <p>{'System.IO.Path.GetFullPath(Request.PhysicalPath) != Request.PhysicalPath) {'}</p>
                    <p>{'throw new HttpException(404, "not found");'}</p>
                    <p>{'}'}</p>
                    <p>{'{</script>'}</p>
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
                    <li className='text-xl font-bold my-4'>필터링 처리</li>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[220px] border-2 bg-white ml-2 mt-8 mb-8 rounded-xl px-6'>
                    <p>if (preg_match(“/[^a-z0-9_-]/I”, $up_dir))</p>
                    <p>print “디렉터리의 특수 문자 체크”;</p>
                    <p>exit;</p><br/>
                    <p>if(preg_match(“/[^\xA1-\xFEa-z0-9._-]/I”, urldecode($dn_file_name)))</p>
                    <p>print "파일 이름의 특수문자 체크";</p>
                    <p>exit;</p>
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
                    <li className='text-xl font-bold my-4'>필터링 처리</li>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[570px] border-2 bg-white ml-2 mt-8 mb-8 rounded-xl px-6'>
                    <p>String UPLOAD_PATH= "/var/www/upload/";</p>
                    <p>String filename= response.getParameter("filename");</p>
                    <p>String filepathname = UPLOAD_PATH + filename;</p><br/>
                    <p>{'if(filename.equalsIgnoreCase(".") || filename.equalsIgnoreCase("/")||'}</p>
                    <p>{'filename.equalsIgnoreCase(" \"))'}</p>
                    <p>// 파일명 체크</p><br/>
                    <p>return 0;</p><br/>
                    <p>// 파일 전송 루틴</p>
                    <p>response.setContentType("application/unknown; charset=euc-kr");</p>
                    <p>response.setHeader("Content-Disposition","attachment;filename=" + filename + ";");</p>
                    <p>response.setHeader("Content-Transfer-Encoding:" , "base64");</p><br/>
                    <p>{'try {'}</p>
                    <p>{'BufferedInputStream in = new BufferedInputStream(new'}</p>
                    <p>{'FileInputStream(filepathname));'}</p>
                    <p>.....</p>
                    <p>{'} catch(Exception e) {'}</p>
                    <p>// 에러 체크 [파일 존재 유무 등]</p>
                    <p>{'}'}</p>
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