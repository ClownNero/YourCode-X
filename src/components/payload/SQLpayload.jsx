import React, {useState} from 'react';
import { RxCaretUp, RxCaretDown } from "react-icons/rx";

export default function SQLpayload({data}) {
  const [expandedIndex, setExpandedIndex] = useState([false,false,false]);
  const [firstIndex, setFirstIndex] = useState(Array(data.length).fill(false));
  const [secondIndex, setSecondIndex] = useState([false,false,false,false,false]);
  const [thirdIndex, setThirdIndex] = useState([false,false,false]);
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
                  <div className=' flex flex-col justify-center w-[600px] h-[270px] border-2 bg-white ml-2 mt-4 rounded-xl px-6'>
                    <div className='flex items-center'><div className='bg-[#E4E4E4] w-[120px] h-[50px] inline-flex rounded-2xl items-center justify-center mr-4 text-lg font-bold'>'</div><span>문자와 데이터의 구분 기호</span></div>
                    <div className='flex items-center my-3'><div className='bg-[#E4E4E4] w-[120px] h-[50px] inline-flex rounded-2xl items-center justify-center mr-4 text-lg font-bold'>;</div><span>쿼리 구분 기호</span></div>
                    <div className='flex items-center'><div className='bg-[#E4E4E4] w-[120px] h-[50px] inline-flex rounded-2xl items-center justify-center mr-4 text-lg font-bold'>--, #</div><span>해당 라인 주석 구분 기호</span></div>
                    <div className='flex items-center mt-3'><div className='bg-[#E4E4E4] w-[120px] h-[50px] inline-flex rounded-2xl items-center justify-center mr-4 text-lg font-bold'>/*  */</div><span>* 와 */ 사이 구문 주석</span></div>
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
                className={`border-b-2 px-8 py-6 bg-[#F5F5F5]`}
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
              <li 
                className={`border-b-2 px-8 py-6 bg-[#F5F5F5]`}
              >
                <p 
                  className={`text-lg font-bold ${secondIndex[3]?"text-[#0064CB]":""}`}
                  onClick={() => handleClick(3,secondIndex, setSecondIndex)}
                >
                  웹 방화벽에 인젝션 공격 관련 차단 룰셋 적용
                </p>
                {secondIndex[3] ?
                <div className='my-4'>
                  <p>웹 방화벽의 차단 룰셋을 통해 SQL 인젝션 같은 악의적인 공격을 차단하는 것이 중요</p>
                  <p>이 규칙은 공격 패턴을 감지하고, 그러한 요청을 방어하도록 설계되어 SQL 인젝션 공격으로부터 시스템을 보호</p>
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
                  필터링 등 입력값 검증 프로세스는 Client side script가 아닌, Server 페이지로 구현
                </p>
                {secondIndex[4] ?
                <div className='my-4'>
                  <p>사용자의 입력은 항상 믿을 수 없으므로, 이를 적절히 필터링하고 검증하는 것이 중요</p>
                  <p>이 과정은 클라이언트 측이 아닌 서버 측에서 수행되어  클라이언트 측 스크립트는 사용자에 의해 쉽게 수정될 수 있으므로, 서버 측에서의 검증은 필수</p>
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
                    <li className='text-xl font-bold my-4'>문자열 유효성 검증 로직 구현</li>
                    <p className='my-4 text-lg'>특정 문자열 필터링 적용</p>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                    <p className='my-4'>
                      request로 입력 값을 가져오는 경우 입력 값에서 특수문자를 제거하여 바인딩하는 소스 삽입
                    </p>
                    <p className='my-4'>
                      replaceAll() 메소드를 사용하여 구현
                    </p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[330px] border-2 bg-white ml-2 mt-4 rounded-xl px-6'>
                    <p>private string SafeSqlLiteral(string inputSQL)</p>
                    <p>{'{'}</p>
                    <p className='font-bold'>Str = inputSQL.Replace("'","''");</p>
                    <p className='font-bold'>Str = str. Replace(";","");</p>
                    <p className='font-bold'>Str = str. Replace("--","");</p>
                    <p className='font-bold'>Str = str. Replace("|","");</p>
                    <p className='font-bold'>Str = str. Replace(":","");</p>
                    <p className='font-bold'>Str = str. Replace("+","");</p>
                    <p className='font-bold'>Str = str. Replace("\","");</p>
                    <p className='font-bold'>Str = str. Replace("/","");</p>
                    <p>......</p>
                    <p>return str;</p>
                    <p>{'}'}</p>
                  </div>
                  <ul className='list-disc px-6 space-y-2 mb-4 mt-8 '>
                    <li className='text-xl font-bold'>Dynamic SQL 구문 사용 금지</li>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[720px] border-2 bg-white ml-2 mt-4 rounded-xl px-6'>
                    <p>Private void cmdLogin_Click(object sender, System.EventArgs e) {'{'}</p>
                    <p>string strCnx = ConfigurationSettings.AppSettings["cnxNWindBad"];</p>
                    <p>Using (SqlConnection cnx = new SqlConnection(strCnx))</p>
                    <p>{'{'}</p>
                    <p>SqlParameter prm;</p>
                    <p>Cnx.Open();</p>
                    <p>string strQry =</p>
                    <p className='font-bold'>"SELECT Count(*) FROM Users WHERE UserName = @username “ +</p>
                    <p className='font-bold'>"AND Password = @password”;</p>
                    <p className='font-bold'>Int intRecs</p>
                    <p>SqlCommand cmd = new SqlCommand(strQry, cnx);</p>
                    <p>cmd.CommandType = CommandType.Text;</p>
                    <p>prm = new SqlParameter(“@username”,SqlDbType.VarChar,50);</p>
                    <p>prm.Direction = ParameterDirection.Input;</p>
                    <p>prm.Value = txtUser.Text;</p>
                    <p>cmd.Parameters.Add(prm);</p>
                    <p>prm = new SqlParameter(“@password”,SqlDbType.VarChar,50);</p>
                    <p>prm.Direction = ParameterDirection.Input;</p>
                    <p>prm.Value = txtPassword.Text;</p>
                    <p>cmd.Parameters.Add(prm);</p>
                    <p>intRecs = (int) cmd.ExecuteScalar();</p>
                    <p>if(intRecs {'>'} 0 ) {'{'}</p>
                    <p>FormsAuthentication.RedirectFromLoginPage(txtUser.Text, false);</p>
                    <p>{'}'}</p>
                    <p>else {'{'}</p>
                    <p>lblMsg.Text = “Login attempt failed.”;</p>
                    <p>{'}'}</p>
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
                    <li className='text-xl font-bold my-4'>문자열 유효성 검증 로직 구현</li>
                    <p className='my-4 text-lg'>특정 문자열 필터링 적용</p>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                    <p className='my-4'>
                      request로 입력 값을 가져오는 경우 입력 값에서 특수문자를 제거하여 바인딩하는 소스 삽입
                    </p>
                    <p className='my-4'>
                      replaceAll() 메소드를 사용하여 구현
                    </p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[670px] border-2 bg-white ml-2 mt-4 rounded-xl px-6'>
                    <p>public static String makeQuery(String str) {'{'}</p>
                    <p className='pl-5'>String result = "";</p>
                    <p className='pl-5'>if(str != null) {'{'}</p>
                    <p className='font-bold pl-9'>result = chkNull(resplace(str, "", ""));</p>
                    <p className='font-bold pl-9'>result = chkNull(replace(str, ";", ""));</p>
                    <p className='font-bold pl-9'>result = chkNull(replace(str, "--", ""));</p>
                    <p className='font-bold pl-9'>result = chkNull(replace(str, "|", ""));</p>
                    <p className='font-bold pl-9'>result = chkNull(replace(str, ":", ""));</p>
                    <p className='font-bold pl-9'>result = chkNull(replace(str, "+", ""));</p>
                    <p className='font-bold pl-9'>result = chkNull(replace(str, "\", ""));</p>
                    <p className='font-bold pl-9'>result = chkNull(replace(str, "/", ""));</p>
                    <p className='font-bold pl-9'>result = chkNull(replace(str.toLowerCase(), "select", ""));</p>
                    <p className='font-bold pl-9'>result = chkNull(replace(str.toLowerCase(), "update", ""));</p>
                    <p className='font-bold pl-9'>result = chkNull(replace(str.toLowerCase(), "delete", ""));</p>
                    <p className='font-bold pl-9'>result = chkNull(replace(str.toLowerCase(), "insert", ""));</p>
                    <p className='font-bold pl-9'>result = chkNull(replace(str.toLowerCase(), "where", ""));</p>
                    <p className='font-bold pl-9'>result = chkNull(replace(str.toLowerCase(), "from", ""));</p>
                    <p className='font-bold pl-9'>result = "'"+result+"'";</p>
                    <p className='pl-5'>{'}'}</p>
                    <p className='pl-16'>return result;</p>
                    <p className='pl-9'>{'}'}</p>
                    <p>public static String chkNull(String str) {'{'}</p>
                    <p>if (str == null)</p>
                    <p className='pl-16'>return "";</p>
                    <p className='pl-9'>else</p>
                    <p className='pl-12'>return str;</p>
                    <p className='pl-9'>{'}'}</p>
                  </div>
                  <ul className='list-disc px-6 space-y-2 mb-4 mt-8 '>
                    <li className='text-xl font-bold'>Dynamic SQL 구문 사용 금지</li>
                    <p className='my-4 text-lg'>PreparedStatement 객체 사용</p>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[330px] border-2 bg-white ml-2 mt-4 mb-8 rounded-xl px-6'>
                    <p>try{'{'}</p>
                    <p className='pl-5'>String tableName = props.getProperty("jdbc.tableName");</p>
                    <p className='pl-5'>String name = props.getProperty("jdbc.name")</p>
                    <p className='pl-5 font-bold'>String qury = "SELECT * FROM ? WHERE Name = ?";</p>
                    <p className='pl-5 font-bold'>stmt = con.perpareStatement(query);</p>
                    <p className='pl-5 font-bold'>stmt.setString(1, tableName);</p>
                    <p className='pl-5 font-bold'>stmt.setString(2, name);</p>
                    <p className='pl-5'>rs = stmt.executeQuery();</p>
                    <p className='pl-3'>......</p>
                    <p>{'}'}</p>
                    <p>catch (SQLException sqle){"{  }"}</p>
                    <p>finally {'{  }'}</p>
                  </div>
                  <p className='my-4 text-lg px-6'>JDO API 사용 시 외부 입력 값이 위치하는 부분을 “?”로 설정하여 실행 시 해당 파라미터가 실행되도록 수정 </p>
                  <p className='my-4 px-6'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                  <div className=' flex flex-col justify-center w-[1010px] h-[370px] border-2 bg-white ml-2 mt-4 mb-8 rounded-xl px-6'>
                    <p>try{'{'}</p>
                    <p className='pl-5'>Properties props = new Properties();</p>
                    <p className='pl-5'>String filename = “contacts.txt”;</p>
                    <p className='pl-5'>FileInputStream in = new FileInputStream(filename);</p>
                    <p className='pl-5'>Props.load(in);</p>
                    <p className='pl-5 font-bold'>name = props.getProperty(“name”);</p>
                    <p className='pl-5 font-bold'>if (name = null || “”.equals(name)) return null;</p>
                    <p className='pl-5 font-bold'>query += “ where name = ?”;</p>
                    <p>{'}'}</p>
                    <p>catch (IOException e)</p>
                    <p>{'{'}</p>
                    <p className='pl-5 font-bold'>Javax.jdo.Query q = pm.newQuery(query);</p>
                    <p className='pl-5 font-bold'>return (List{'<Contact>'}) q.execute(name);</p>
                    <p>{'}'}</p>
                  </div>
                  <p className='my-4 text-lg px-6'>J2EE Persistence API 사용 시 파라미터를 받는 쿼리를 생성하고 파라미터를 설정하여 실행 </p>
                  <p className='my-4 px-6'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                  <div className=' flex flex-col justify-center w-[1010px] h-[300px] border-2 bg-white ml-2 mt-4 mb-8 rounded-xl px-6'>
                    <p>try{'{'}</p>
                    <p className='pl-5'>Properties props = new Properties();</p>
                    <p className='pl-5'>String filename = “contacts.txt”;</p>
                    <p className='pl-5'>FileInputStream in = new FileInputStream(filename);</p>
                    <p className='pl-5'>Props.load(in);</p>
                    <p className='pl-5'>String id = props.getProperty(“id”);</p>
                    <p className='pl-5'>if (id == null || “”.equals(id)) id = “itemid”;</p>
                    <p className='pl-5'>Query query = em.createNativeQuery(“Select OBJECT(i) from Item I where</p>
                    <p>i.itemID {'>'} :id");</p>
                    <p className='pl-5 font-bold'>Query.setParameter(“id”, id);</p>
                    <p className='pl-5'>{'..... }'}</p>
                  </div>
                  <p className='my-4 text-lg px-6'> mybatis Data Map 사용 시 쿼리에 삽입되는 Name 파라미터를 #name# 형태로 받아 실행</p>
                  <p className='my-4 px-6'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                  <div className=' flex flex-col justify-center w-[1010px] h-[200px] border-2 bg-white ml-2 mt-4 mb-8 rounded-xl px-6'>
                    <p>{'<?xml version=”1.0” encoding=”UTF-8”?>'}</p>
                    <p>.....</p>
                    <p>{'<!-- static SQL 사용 -->'}</p>
                    <p>{'<delete id=”delStudent” parameterClass=”Student”>'}</p>
                    <p>DELETE STUDENTS</p>
                    <p className='font-bold'>WHERE NUM = #num# AND Name = ‘#name#’</p>
                    <p>{'</delete>'}</p>
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
                    <li className='text-xl font-bold my-4'>문자열 유효성 검증 로직 구현</li>
                    <p className='my-4 text-lg'>addslashes 함수를 이용한 특정 문자열 필터링 적용</p>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[270px] border-2 bg-white ml-2 mt-4 mb-8 rounded-xl px-6'>
                    <p className='font-bold'>$query = sprintf("SELECT id,password,username FROM user_table WHERE_</p>
                    <p className='font-bold'>id='%s';",addslashes($id));</p>
                    <p>// id 변수를 문자형으로 받고, id 변수의 특수문자를 일반문자로 변환</p>
                    <p>// @로 php 에러 메세지를 막음</p>
                    <p className='font-bold'>$result = @OCIParse($conn, $query);</p>
                    <p>if (!@OCIExecute($result))</p>
                    <p>error("SQL 구문 에러");</p>
                    <p>exit;</p>
                    <p>@OCIFetchInto($result,&$rows);</p>
                    <p>...  중략  ...</p>
                  </div>
                  <p className='my-4 text-lg px-6'>eregi_replace 함수를 이용한 특정 문자열 필터링 적용</p>
                  <p className='my-4 px-6'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                  <div className=' flex flex-col justify-center w-[1010px] h-[150px] border-2 bg-white ml-2 mt-4 mb-8 rounded-xl px-6'>
                    <p>function SQL_Injection($get_Str) {'{'}</p>
                    <p className='font-bold'>return eregi_replace("</p>
                    <p className='font-bold'>( select| union| insert| update| delete| drop|\"|\'|#|\/\*|\*\/|\\\|\;)","",</p>
                    <p className='font-bold'>$get_Str);</p>
                    <p>{'}'}</p>
                  </div>
                  <p className='my-4 text-lg px-6'> php.ini 설정 중 magic_quotes_gps 옵션을 이용하여 특정 문자열 필터링 적용 # GPC(Get, Post, Cookie)를 통해 넘어오는 문자열 중 ', ", \, NULL 값의 앞에 자동으로 백슬래쉬 문자를 붙여주는 기능을 함</p>
                  <p className='my-4 text-lg px-6'></p>
                  <p className='my-4 px-6'>(단, PHP 6.0 이후 버전 사용 불능.)</p>
                  <div className=' flex flex-col justify-center w-[1010px] h-[50px] border-2 bg-white ml-2 mt-4 mb-8 rounded-xl px-6'>
                    <p className='font-bold'>magic_quotes_gpc = on</p>
                  </div>
                  <ul className='list-disc px-6 space-y-2 my-4 '>
                    <li className='text-xl font-bold my-4'>Dynamic SQL 구문 사용 금지</li>
                    <p className='my-4 text-lg'>Static SQL 구문 사용</p>
                    <p className='my-4'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                  </ul>
                  <div className=' flex flex-col justify-center w-[1010px] h-[270px] border-2 bg-white ml-2 mt-4 mb-8 rounded-xl px-6'>
                    <p className='font-bold'>$sql = 'SELECT ID, PASSWORD, USER_NAME FORM DB WHERE VALUES = ? ';</p>
                    <p className='font-bold'>{'$stmt = $mysqli->prepare($sql);'}</p>
                    <p className='font-bold'>{"$stmt->bind_param('s', '1');"}</p>
                    <p>{'$stmt->execute();'}</p>
                    <p>{'$stmt->bind_result($ID, $PASSWORD, $USER_NAME); // 칼럼수만큼 변수로 지정'}</p>
                    <p>{"while($stmt->fetch()) {"}</p>
                    <p>printf("%s %s\n", $ID, $PASSWORD, $USER_NAME);</p>
                    <p>{'}'}</p>
                    <p>{'$stmt->close();'}</p>
                    <p>{'$mysqli->close();'}</p>
                  </div>
                  <p className='my-4 text-lg px-6'> mybatis Data Map 사용 시 쿼리에 삽입되는 Name 파라미터를 #name# 형태로 받아 실행</p>
                  <p className='my-4 px-6'>(단, 예로 제시한 것으로, 구현 시 다를 수 있음.)</p>
                  <div className=' flex flex-col justify-center w-[1010px] h-[200px] border-2 bg-white ml-2 mt-4 mb-8 rounded-xl px-6'>
                    <p>{'<?xml version=”1.0” encoding=”UTF-8”?>'}</p>
                    <p>.....</p>
                    <p>{'<!-- static SQL 사용 -->'}</p>
                    <p>{'<delete id=”delStudent” parameterClass=”Student”>'}</p>
                    <p>DELETE STUDENTS</p>
                    <p className='font-bold'>WHERE NUM = #num# AND Name = '#name#'</p>
                    <p>{'</delete>'}</p>
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