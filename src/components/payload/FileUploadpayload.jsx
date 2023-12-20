import React, {useState} from 'react';
import { RxCaretUp, RxCaretDown } from "react-icons/rx";

export default function FileUploadpayload({data}) {
  const [expandedIndex, setExpandedIndex] = useState([false,false,false]);
  const [firstIndex, setFirstIndex] = useState(Array(data.length).fill(false));
  const [secondIndex, setSecondIndex] = useState([false,false,false,false,false]);
  const [thirdIndex, setThirdIndex] = useState([false,false,false]);
  const handleClick = (index, handle, set ) => {
    set(handle.map((item, idx) => idx === index ? !handle[index] : item));
  }
  const uploadTypes=[
    {
      type:'Extension By Pass File Upload',
      solution:'Extension By Pass File Upload는 파일 업로드 기능에서 확장자를 우회하여 악성 파일을 업로드할 수 있는 웹 보안 취약점이다. 이를 해결하기 위해 서버 측에서 확장자 검증과 MIME 타입 검증을 수행하고, 파일명을 변경하고 저장 경로를 제한하여 보안을 강화할 수 있습니다. 또한, 보안 업로드 라이브러리를 사용하고 추가적인 보안 검사를 진행하는 것이 좋습니다. 이러한 방안을 적용하여 안전한 파일 업로드를 보장할 수 있다.'
    },
    {
      type:'Capacity File Upload',
      solution:'Capacity File Upload 취약점은 큰 용량의 파일을 업로드하여 서버에 부담을 주는 취약점이다. 이를 해결하기 위해 서버와 클라이언트 양쪽에서 용량 제한 설정, 업로드된 파일의 용량 검증, 스트리밍 업로드, 서버 리소스 관리, 그리고 로깅 및 모니터링 등의 방안을 적용해야 합니다. 이런 방안들을 통해 파일 업로드 용량을 제어하고, 이상 행위를 조기에 감지하여 웹 애플리케이션의 보안을 강화할 수 있다.'
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
                const matchedType = uploadTypes.find(type => type.type === item);
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
                  확장자 검사
                </p>
                {secondIndex[0] ?
                <>
                  <p className='my-4'>업로드된 파일의 확장자를 검사하여 허용되지 않은 확장자를 가진 파일의 업로드를 차단</p>
                  <p className='my-4'>.exe, .php, .js 등의 확장자를 가진 파일은 실행 가능한 파일이므로 업로드를 차단</p>
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
                  대소문자 구분하지 않고 확장자 비교
                </p>
                {secondIndex[1] ?
                <>
                  <p className='my-4'>대소문자를 구분하지 않고 확장자를 비교하여 파일의 확장자를 위장하는 시도를 차단하는 방법</p>
                  <p className='my-4'>.php와 .PHP는 시스템에서는 같은 확장자로 취급되지만, 대소문자를 구분하는 검사에서는 다르게 취급될 수 있음.</p>
                </>
                :""}
              </li>
              <li 
                className={`border-b-2 px-8 py-6 bg-[#F5F5F5]`}
              >
                <p 
                  className={`text-lg font-bold ${secondIndex[2]?"text-[#0064CB]":""}`}
                  onClick={() => handleClick(2,secondIndex, setSecondIndex)}
                >
                  특수문자가 포함된 경우 업로드 금지
                </p>
                {secondIndex[2] ?
               <>
                  <p className='my-4'>파일명에 특수문자가 포함된 경우 업로드를 금지하는 방법</p>
                  <p className='my-4'>이는 파일명을 통한 공격을 방지하기 위한 방법으로, 파일명에 스크립트 코드가 포함되어 있는 경우 등에 효과적이다.</p>
               </>
                :""}
              </li>
              <li 
                className={`border-b-2 px-8 py-6 bg-[#F5F5F5] `}
              >
                <p 
                  className={`text-lg font-bold ${secondIndex[3]?"text-[#0064CB]":""}`}
                  onClick={() => handleClick(3,secondIndex, setSecondIndex)}
                >
                  업로드 된 파일명, 확장자를 난수화하여 변경
                </p>
                {secondIndex[3] ?
                <>
                  <p className='my-4'>파일이 업로드되면 서버에서는 이 파일에 대해 난수화된 새로운 이름과 확장자를 부여하는 방법으로 공격자가 업로드한 파일을 직접 참조하거나 실행하는 것을 방지</p>
                </>
                :""}
              </li>
              <li 
                className={`border-b-2 px-8 py-6 bg-[#F5F5F5] rounded-b-3xl`}
              >
                <p 
                  className={`text-lg font-bold ${secondIndex[4]?"text-[#0064CB]":""}`}
                  onClick={() => handleClick(4,secondIndex, setSecondIndex)}
                >
                  업로드된 파일을 url요청으로 직접 접근이 불가능한 위치에 저장
                </p>
                {secondIndex[4] ?
                <>
                  <p className='my-4'>웹 루트 디렉토리가 아닌, 웹 서비스에서 직접 접근할 수 없는 위치에 파일을 저장하는 방법으로 공격자가 업로드한 파일을 웹을 통해 직접 접근하거나 실행하는 것을 방지</p>
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
                    <li className='text-xl font-bold my-4'>수용 가능한 파일의 확장자만 업로드 허용(Positive 방식)</li>
                    <p className='my-4 text-lg'>doc, hwp, pdf, jpg 파일만 업로드 허용, 확장자 검증 시 대소문자 구분 없이 문자열 비교</p>
                    <p className='my-4'>이미지 파일의 경우 (JPG, GIF, BMP 등)</p>
                    <p className='my-4'>문서 파일의 경우 (XLS, PDF, PPT, DOC 등)</p>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[800px] border-2 bg-white ml-2 mt-8 mb-8 rounded-xl px-6'>
                    <p>string upload_Image(FileUpload fileupload, string ImageSavedPath)</p>
                    <p>{'{'}</p>
                    <p>FileUpload fu = fileupload;</p>
                    <p>string imagepath = "";</p>
                    <p>if (fileupload.HasFile)</p>
                    <p>{'{'}</p>
                    <p>string filepath = Server.MapPath(ImageSavedPath);</p>
                    <p>String fileExtension = System.IO.Path.GetExtension(fu.FileName).ToLower();</p>
                    <p>{'String[] allowedExtensions = { ".doc", ".hwp", ".pdf", ".jpg" };'}</p>
                    <p>{'for (int i = 0; i < allowedExtensions.Length; i++)'}</p>
                    <p>{'{'}</p>
                    <p>if (fileExtension == allowedExtensions[i])</p>
                    <p>{'{'}</p>
                    <p>try</p>
                    <p>{'{'}</p>
                    <p>string s_newfilename = DateTime.Now.Year.ToString()+</p>
                    <p>DateTime.Now.Month.ToString() + DateTime.Now.Day.ToString()+</p>
                    <p>DateTime.Now.Hour.ToString() + DateTime.Now.Minute.ToString()+</p>
                    <p>DateTime.Now.Second.ToString() + fileExtension;</p>
                    <p>fu.PostedFile.SaveAs(filepath + s_newfilename);</p>
                    <p>imagepath = ImageSavedPath + s_newfilename;</p>
                    <p>{'}'}</p>
                    <p>catch (Exception ex)</p>
                    <p>{'{'}</p>
                    <p>Response.Write("File could not be uploaded.");</p>
                    <p>{'}'}</p>
                    <p>{'}'}</p>
                    <p>{'}'}</p>
                    <p>{'}'}</p>
                    <p>return imagepath;</p>
                    <p>{'}'}</p>
                  </div>
                  <ul className='list-disc px-6 space-y-2 my-4 '>
                    <li className='text-xl font-bold my-4'>MIME TYPE 확인을 통한 실행 파일 업로드 차단</li>
                    <p className='my-4 text-lg'>MIME TYPE을 통한 악성 파일 업로드 차단</p>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[630px] border-2 bg-white ml-2 mt-8 mb-8 rounded-xl px-6'>
                    <p>public void validateFileToUpload(FileUpload objFile)</p>
                    <p>{'{'}</p>
                    <p>intMAX_FILE_SIZE=(4*1024*1024);</p>
                    <p>int fileSize = objFile.PostedFile.ContentLength;</p>
                    <p>{'if(fileSize > MAX_FILE_SIZE)'}</p>
                    <p>{'{'}</p>
                    <p>returnMessage="FileUploadFailed";</p>
                    <p>return returnMessage;</p>
                    <p>{'}'}</p>
                    <p>string chosenFileExtension = System.IO.Path.GetExtension(objFile.FileName);</p>
                    <p>{'string[]allowedExtensions= {".doc",".xls",".ppt",".pptx",".txt" };'}</p>
                    <p>if(!allowedExtensions.Contains(chosenFileExtension))</p>
                    <p>{'{'}</p>
                    <p>returnMessage="FileUploadFailed";</p>
                    <p>return returnMessage;</p>
                    <p>{'}'}</p>
                    <p>{'string[] allowedMimeTypes = { "text/plain", "text/xml" };'}</p>
                    <p>stringchosenFileMiMeType=objFile.PostedFile.ContentType;</p>
                    <p>if(!allowedMimeTypes.Contains(chosenFileMiMeType))</p>
                    <p>{'{'}</p>
                    <p>returnMessage="FileUploadFailed";</p>
                    <p>return returnMessage;</p>
                    <p>{'}'}</p>
                    <p>{'}'}</p>
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
                  JSP
                </p>
                {thirdIndex[1] ?
                <>
                  <ul className='list-disc px-6 space-y-2 my-4 '>
                    <li className='text-xl font-bold my-4'>수용 가능한 파일의 확장자만 업로드 허용(Positive 방식)</li>
                    <p className='my-4 text-lg'>doc, hwp, pdf, jpg 파일만 업로드 허용, 확장자 검증 시 대소문자 구분 없이 문자열 비교</p>
                    <p className='my-4'>이미지 파일의 경우 (JPG, GIF, BMP 등)</p>
                    <p className='my-4'>문서 파일의 경우 (XLS, PDF, PPT, DOC 등)</p>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[400px] border-2 bg-white ml-2 mt-8 mb-8 rounded-xl px-6'>
                    <p>.....</p>
                    <p>publievoidupload(HttpServletRequestrequest)throwsServletException</p>
                    <p>{'{'}</p>
                    <p>MultipartHttpRequest multi = (MultipartHttpRequest) request;</p>
                    <p>String next = (String) multi.getFileNames().next();</p>
                    <p>MultipartFile file = multi.getFile(next);</p>
                    <p>If (file == null) return;</p>
                    <p>// 화이트 리스트 방식으로 업로드 파일 확장자 체크</p>
                    <p>if (fileName != null)</p>
                    <p>{'{'}</p>
                    <p>{'If (fileName,endsWith(“.doc”) || fileName,endsWith(“.hwp”) ||'}</p>
                    <p>{'fileName,endsWith(“.pdf”) || fileName,endsWith(“.jpg”))'}</p>
                    <p>{'{'}</p>
                    <p>//file 업로드 루틴: 저장 시 파일명을 외부 사용자가 추측할 수 없는 형태로 변경</p>
                    <p>.....</p>
                  </div>
                  <ul className='list-disc px-6 space-y-2 my-4 '>
                    <li className='text-xl font-bold my-4'>MIME TYPE 확인을 통한 실행 파일 업로드 차단</li>
                    <p className='my-4 text-lg'>MIME TYPE을 통한 악성 파일 업로드 차단</p>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[630px] border-2 bg-white ml-2 mt-8 mb-8 rounded-xl px-6'>
                    <p>{'<%'}</p>
                    <p>{'String[] validExt = {"jpg","gif","png" }; // 파일 허용 확장자'}</p>
                    <p>{'String[] validType = {"application/octet-stream",'}</p>
                    <p>{'"application/x-msdownload",'}</p>
                    <p>{'"application/x-sh" }; // 파일 MIME 타입 제한'}</p>
                    <p>{'MultipartRequest mRequest = new MultipartRequest(request,'}</p>
                    <p>{'SITE_UPLOAD_DIR+strUploadDir, intUploadMaxSize,'}</p>
                    <p>{'"UTF-8", new DefaultFileRenamePolicy());'}</p>
                    <p>uploadFileSystemName1 = mRequest.getFilesystemName("attach1");</p>
                    <p>//저장파일명</p>
                    <p>File strGetfile1= mRequest.getFile("attach1");</p>
                    <p>uploadFileExt1 =</p>
                    <p>{"uploadFileSystemName1.substring(uploadFileSystemName1.lastIndexOf('.')"}</p>
                    <p>{'+ 1); // 파일 확장자'}</p>
                    <p>uploadFileType1 = mRequest.getContentType("attach1"); //파일 MIME 타입</p>
                    <p>{'for(int i=0; i < validType.length; i++) {'}</p>\
                    <p>{'if(uploadFileType1.equalsIgnoreCase(validType[i])) {'}</p>
                    <p>out.print("<script>alert('업로드 금지 파일')</script>");</p>
                    <p>commUtil.deleteFile(SITE_UPLOAD_DIR+strUploadDir+"/", uploadFileSystemName1);</p>
                    <p>return;</p>
                    <p>{'}'}</p>
                    <p>{'}'}</p>
                    <p>{'%>'}</p>
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
                  PHP
                </p>
                {thirdIndex[2] ?
                <>
                  <ul className='list-disc px-6 space-y-2 my-4 '>
                    <li className='text-xl font-bold my-4'>수용 가능한 파일의 확장자만 업로드 허용(Positive 방식)</li>
                    <p className='my-4 text-lg'>doc, hwp, pdf, jpg 파일만 업로드 허용, 확장자 검증 시 대소문자 구분 없이 문자열 비교</p>
                    <p className='my-4'>이미지 파일의 경우 (JPG, GIF, BMP 등)</p>
                    <p className='my-4'>문서 파일의 경우 (XLS, PDF, PPT, DOC 등)</p>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[350px] border-2 bg-white ml-2 mt-8 mb-8 rounded-xl px-6'>
                    <p>.....</p>
                    <p>// 파일 이름에 특수문자가 있을 경우 업로드를 금지시킴</p>
                    <p>if (eregi("[^a-z0-9 \._ \-]",$_FILES['userfile']['name']))</p>
                    <p>print "파일 이름의 특수문자 체크";</p>
                    <p>exit;</p>
                    <p>// 파일 확장자 중 업로드를 허용할 확장자를 정의함</p>
                    <p>$full_filename = explode(".", $_FILES['userfile']['name']);</p>
                    <p>$extension = $full_filename[sizeof($full_filename)-1];</p>
                    <p>$extension= strtolower($extension);</p>
                    <p>if (!( ereg($extension","hwp") || ereg($extension","pdf") || ereg($extension","jpg")) )</p>
                    <p>print "업로드 금지 파일 입니다";</p>
                    <p>exit;</p>
                    <p>.....</p>
                  </div>
                  <ul className='list-disc px-6 space-y-2 my-4 '>
                    <li className='text-xl font-bold my-4'>MIME TYPE 확인을 통한 실행 파일 업로드 차단</li>
                    <p className='my-4 text-lg'>MIME TYPE을 통한 악성 파일 업로드 차단</p>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[330px] border-2 bg-white ml-2 mt-8 mb-8 rounded-xl px-6'>
                    <p>{'<?'}</p>
                    <p>// 허용된 확장자를 가진 파일에 대해서 파일 업로드 성공</p>
                    <p>{'If (($_FILES["file"]["type"] == "image/gif") || ($_FILES["file"]["type"] == "image/jpeg") ||'}</p>
                    <p>{'($_FILES["file"]["type"] == "image/JPG") || ($_FILES["file"]["type"] == "text/plain"))'}</p>
                    <p>{'{'}</p>
                    <p>echo "파일 업로드 성공"</p>
                    <p>{'}'}</p>
                    <p>else</p>
                    <p>{'{'}</p>
                    <p>echo "파일 업로드 실패. 허용된 파일의 형식이 아닙니다."</p>
                    <p>{'}'}</p>
                    <p>{'?>'}</p>
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