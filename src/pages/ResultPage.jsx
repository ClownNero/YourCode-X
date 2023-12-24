import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Barchart from "../components/Barchart";
import Piechart from "../components/Piechart";
import Upbutton from "../components/ui/Upbutton";
import { RxCaretSort, RxCaretUp, RxCaretDown, RxDoubleArrowDown } from "react-icons/rx";
import Modal from "./Modal";
import Review from "../components/Review";
import Cvechart from "../components/Cvechart";
import SQLpayload from "../components/payload/SQLpayload";
import XSSpayload from "../components/payload/XSSpayload";
import Traversalpayload from "../components/payload/Traversalpayload";
import FileUploadpayload from "../components/payload/FileUploadpayload";
import FileDownloadpayload from "../components/payload/FileDownloadpayload";
import Changebox from "../components/ui/Changebox";

const riskValues = {
  위험: 3,
  주의: 2,
  양호: 1,
};
export default function ResultPage({props}) {
  // 이전 페이지에서 전달 받은 결과 데이터 == 분석데이터
  //const resultData = location.state.result;
  // 예시 코드
  // Mock 데이터 가져오기
  const [isExpanded, setIsExpanded] = useState([]);
  const [cve, setCVE] = useState([]); 
  const [data, setData] = useState([]);
  const [data_c, setData_c] = useState([]);
  const [changeData, setChangeData] = useState();
  const [sortedData, setSortedData] = useState([]);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  useEffect(() => {
    putSpringData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sortOrder === "asc") {
      setSortedData(
        [...data].sort((a, b) =>
          sortKey === "risk"
            ? riskValues[a[sortKey]] < riskValues[b[sortKey]]
              ? -1
              : 1
            : a[sortKey] < b[sortKey]
            ? -1
            : 1
        )
      );
    } else if (sortOrder === "desc") {
      setSortedData(
        [...data].sort((a, b) =>
          sortKey === "risk"
            ? riskValues[a[sortKey]] > riskValues[b[sortKey]]
              ? -1
              : 1
            : a[sortKey] > b[sortKey]
            ? -1
            : 1
        )
      );
    } else {
      setSortedData(data);
    }
  }, [data, sortOrder, sortKey]);

  async function putSpringData() {
    await axios
      .get("http://localhost:8081/analysis/result")
      .then((res) => {
        console.log(res);
        const cveArray = Object.values(res.data.cve);
        const listArray = Object.values(res.data.list);
        let listArray_c;
        if (res.data.checking){
        listArray_c = Object.values(res.data.checking);
        setData_c(listArray_c); }
        setCVE(cveArray);
        setData(listArray);
        setIsExpanded(listArray.filter(
          (item) => item.risk === "위험" || item.risk === "주의"
        ).fill(false));
        changeDatafunc(listArray, listArray_c); // 여기에서 changeDatafunc 함수를 호출합니다.
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function changeDatafunc(data, data_c) {
    let resultArray = [];
    const categories = ["SQL 인젝션(SQL Injection)", "크로스사이트스크립팅(XSS)", "디렉토리 트레버설(Directory Traversal)", "파일 업로드(File Upload)", "파일 다운로드(File Download)"];
  
    categories.forEach((category) => {
      let dataItem = data.find((item) => item.category === category);
      let dataCItem = data_c.find((item) => item.category === category);
      let diff = "없음";
      let color = 'blue';
      if (dataItem && dataCItem) {
        diff = dataItem.num - dataCItem.num;
        color = dataItem.risk === '위험'? 'red': dataItem.risk ==='주의'? 'yellow' : 'green'
      }
      let displayName;
        switch (category) {
          case "SQL 인젝션(SQL Injection)":
            displayName = "SQL Injection";
            break;
          case "크로스사이트스크립팅(XSS)":
            displayName ="XSS";
            break;
          case "디렉토리 트레버설(Directory Traversal)":
            displayName = "Directory Traversal";
            break;
          case "파일 업로드(File Upload)":
            displayName = "File Upload";
            break;
          case "파일 다운로드(File Download)":
            displayName = "File Download";
            break;
          default:
            displayName = category;
        }
      resultArray.push({
        category: displayName,
        difference: diff,
        currentData: dataItem ? dataItem.num : "없음", // dataItem이 없을 경우 "없음"을 사용합니다.
        color: color
      });
    });
  
    setChangeData(resultArray);
  }
  // const fetchData = async () => {
  //   try {
  //     // mock API로부터 데이터 가져오기
  //     const response = await axios.get(
  //       process.env.PUBLIC_URL + "/data/mockdata.json"
  //     );
  //     // 상태 업데이트
  //     setData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   } finally {
  //     setLoading(false); // 데이터 요청 완료(성공 또는 실패) 후 로딩 상태를 false로 설정
  //   }
  // };
  return (
    <>
      <div className="mx-6 mt-40">
      <div className="mx-4 pt-6 pb-12" id="CVE" name="CVE">
          <h2 className="font-bold text-4xl text-Result">CVE Details</h2>
          <ul className="flex justify-around w-full">
            <li className="pt-14 xl:mr-0 mr-12 min-w-0 ">
              <h2 className="text-Result text-2xl text-left mb-6">
                <b>웹 취약점 동향 차트 </b>
              </h2>
              {/* 막대 차트 부분 */}
              {/* <div className="w-[1024px] h-[450px] bg-[#F1F1F1] rounded-[30px]"> */}
                {loading ? `Loading...` : <Cvechart data={cve} />}
              {/* </div> */}
            </li>
          </ul>
        </div>
        <div className="mx-4 py-14" id="Chart" name="Chart">
          <h2 className="font-bold text-4xl text-Result">Problem Chart</h2>
          <ul className="flex justify-center w-full">
            <li className="pt-14 mr-36 min-w-0">
              <h2 className="text-Result text-2xl text-left mb-6">
                <b>위험도 차트</b>
              </h2>
              {/* 막대 차트 부분 */}
              {loading ? `Loading...` : <Barchart data={data} />}
            </li>
            <li className="text-center pt-14 ml-36 min-w-0">
              <h2 className="text-Result text-2xl text-left mb-6">
                <b>취약점 차트</b>
              </h2>
              {/* 파이 차트 부분 */}
              {loading ? `Loading...` : <Piechart data={data} />}
            </li>
          </ul>
        </div>

        <div className="mx-4 pt-6 pb-12" id="Chage" name="Chage">
          <h2 className="font-bold text-4xl text-Result">Changes</h2>
          <h3 className="pt-14 text-2xl text-Result"><b>취약점이 발견된 경로의 개수</b></h3>
          <ul className="flex justify-center w-full py-14 min-w-[1560px]">
            {console.log(changeData)}
            {loading ? `Loading...`:<Changebox dataD={changeData[0]} colorD={changeData[0].color}/>}
            {loading? `Loading...`:<div className="mx-10"><Changebox dataD={changeData[1]} colorD={changeData[1].color}/></div>}
            {loading? `Loading...`:<Changebox dataD={changeData[2]} colorD={changeData[2].color}/>}
            {loading? `Loading...`:<div className="mx-10"><Changebox dataD={changeData[3]}  colorD={changeData[3].color}/></div>}
            {loading? `Loading...`:<Changebox dataD={changeData[4]} colorD={changeData[4].color}/>}
          </ul>
        </div>
        
        <div className="mx-4 py-14" id="List" name="List">
          <h2 className="font-bold text-4xl text-Result">Problem List</h2>
          <p className="text-Result text-2xl pt-14 pb-6 text-left mb-2">
            <b>취약점 세부 목록</b>
          </p>
          <div className="bg-gray text-center rounded-3xl shadow-md ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#1360FF]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center font-medium text-white uppercase tracking-wider"
                    onClick={() => {
                      setSortKey("category");
                      sortOrder !== "asc"
                        ? setSortOrder("asc")
                        : setSortOrder("desc");
                    }}
                  >
                    Category{" "}
                    {sortKey === "category" ? (
                      sortOrder === "desc" ? (
                        <RxCaretUp className="inline text-2xl" />
                      ) : (
                        <RxCaretDown className="inline text-2xl" />
                      )
                    ) : (
                      <RxCaretSort className="inline text-2xl" />
                    )}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center font-medium text-white uppercase tracking-wider"
                    onClick={() => {
                      setSortKey("num");
                      sortOrder !== "asc"
                        ? setSortOrder("asc")
                        : setSortOrder("desc");
                    }}
                  >
                    Number of Found{" "}
                    {sortKey === "num" ? (
                      sortOrder === "desc" ? (
                        <RxCaretUp className="inline text-2xl" />
                      ) : (
                        <RxCaretDown className="inline text-2xl" />
                      )
                    ) : (
                      <RxCaretSort className="inline text-2xl" />
                    )}
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center font-medium text-white uppercase tracking-wider"
                    onClick={() => {
                      setSortKey("risk");
                      sortOrder !== "asc"
                        ? setSortOrder("asc")
                        : setSortOrder("desc");
                    }}
                  >
                    Risk{" "}
                    {sortKey === "risk" ? (
                      sortOrder === "desc" ? (
                        <RxCaretUp className="inline text-2xl" />
                      ) : (
                        <RxCaretDown className="inline text-2xl" />
                      )
                    ) : (
                      <RxCaretSort className="inline text-2xl" />
                    )}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-Result text-lg">
                {data
                  ? sortedData.map((datas, index) => (
                      <tr
                        key={datas.category}
                        className={index % 2 === 1 ? "bg-[#E3EBFF]" : ""}
                      >
                        <td className="px-6 py-4 whitespace-normal text-left">
                          {datas.category}
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                          {datas.num}
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                          {datas.risk === "위험" ? (
                            <span className="inline-block h-3 w-3 rounded-full bg-red-500"></span>
                          ) : datas.risk === "주의" ? (
                            <span className="inline-block h-3 w-3 rounded-full bg-yellow-300"></span>
                          ) : (
                            <span className="inline-block h-3 w-3 rounded-full bg-green-500"></span>
                          )}
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mx-4 mt-14 mb-10" id="Diagnosis" name="Diagnosis">
          <h2 className="font-bold text-4xl text-Result">Diagnosis</h2>
          <div className="py-14">
            <h2 className="text-Result text-2xl text-left mb-3">
              <b>진단 세부 사항</b>
            </h2>
            <ul>
              {data
                ? data
                    .filter(
                      (datas) => datas.risk === "위험" || datas.risk === "주의"
                    )
                    .sort((a, b) => riskValues[b.risk] - riskValues[a.risk])
                    .map((datas, index) => (
                      <>
                        <li
                          key={index}
                          className={`flex justify-between px-3 py-5 text-Result text-xl items-center ${
                            expandedIndex === index ? "" : "border-b-4"
                          }`}
                        >
                          <div>
                            {datas.risk === "위험" ? (
                              <span className="inline-block h-4 w-4 rounded-full bg-red-500"></span>
                            ) : (
                              <span className="inline-block h-4 w-4 rounded-full bg-yellow-300"></span>
                            )}
                            <span className="ml-4">{datas.category}</span>
                          </div>
                          {expandedIndex === index ? (
                            <RxCaretUp
                              onClick={() => setExpandedIndex(null)}
                              className="text-2xl"
                            />
                          ) : (
                            <RxCaretDown
                              onClick={() => setExpandedIndex(index)}
                              className="text-2xl"
                            />
                          )}
                        </li>
                        {/* If this item is expanded, show the detailed description and modal */}
                        {expandedIndex === index && (
                          <>
                            <div className="flex items-center mx-8">
                              <span className="rounded-full w-9 h-9 flex items-center text-white font-bold justify-center mr-2 bg-[#1360FF]">
                                1
                              </span>
                              <span className="text-lg ml-3">
                                <b>점검 대상 URL</b>
                              </span>
                            </div>
                            <p className="ml-20 rounded-3xl bg-[#F4F4F4] p-6 mt-2 mb-8 whitespace-pre-line break-words shadow-detail">
                              {/* 공격 성공 CASE 데이터*/}
                              {datas.inspectionurl}
                            </p>

                            <div className="flex items-center mx-8">
                              <span className="border border-[#1360FF] rounded-full w-9 h-9 flex items-center font-bold text-[#1360FF] justify-center mr-2 bg-white">
                                2
                              </span>
                              <span className="text-lg ml-3">
                                <b>취약점이 발견된 URL</b>
                              </span>
                            </div>
                            <p className="ml-20 rounded-3xl bg-[#F4F4F4] p-6 mt-2 mb-8 whitespace-pre-line break-words shadow-detail">
                                {/* 취약점 발견 URL 데이터*/}
                                {datas.targeturl}
                            </p>

                            <div className="flex items-center mx-8">
                              <span className="border border-[#1360FF] rounded-full w-9 h-9 flex items-center font-bold text-[#1360FF] justify-center mr-2 bg-white">
                                3
                              </span>
                              <span className="text-lg ml-3">
                                <b>상세 취약점 정보</b>
                              </span>
                            </div>
                            <p className="ml-20 rounded-3xl bg-[#F4F4F4] p-6 mt-2 mb-8 whitespace-pre-line break-words shadow-detail">
                              {datas.detailpayload}
                            </p>

                            <div className="flex items-center mx-8">
                              <span className="border border-[#1360FF] rounded-full w-9 h-9 flex items-center font-bold text-[#1360FF] justify-center mr-2 bg-white">
                                4
                              </span>
                              <span className="text-lg ml-3">
                                <b>취약한 데이터가 전송되는 케이스</b>
                              </span>
                            </div>
                            {console.log(isExpanded)}
                            <div className={`relative ${isExpanded[index] ? '' : 'max-h-[600px] overflow-hidden'}`}>
                              <p className="ml-20 rounded-3xl bg-[#F4F4F4] p-6 mt-2 mb-8 whitespace-pre-line break-words shadow-detail">
                                {datas.payload}
                                {console.log(datas.payload.length)}
                              </p>
                                       
                              {!isExpanded[index] && datas.payload.length > 2000 && (
                                <>
                                <div className="absolute bottom-0 left-0 right-0 h-20 mb-10 bg-gradient-to-t from-white to-transparent"></div>
                                <button 
                                  className="absolute bottom-0  right-0 bg-white p-2 rounded-lg w-full"
                                  onClick={() => setIsExpanded(isExpanded.map((item, idx) => idx === index ? !isExpanded[index] : item))}
                                >
                                  <RxDoubleArrowDown className="text-2xl mx-auto"/>
                                </button>
                                </>
                              )}                   
                            </div>  
                            
                            <div className="flex items-center mx-8">
                              <span className="border border-[#1360FF] rounded-full w-9 h-9 flex items-center font-bold text-[#1360FF] justify-center mr-2 bg-white">
                                5
                              </span>
                              <span className="text-lg ml-3">
                              <b>피드백</b>
                              </span>
                            </div>
                          
                            {datas.category === "SQL 인젝션(SQL Injection)" && <SQLpayload data={datas.detailpayload.split("\n")}/>}
                            {datas.category === "크로스사이트스크립팅(XSS)" && <XSSpayload data={datas.detailpayload.split("\n")}/>}
                            {datas.category === "디렉토리 트레버설(Directory Traversal)" && <Traversalpayload data={datas.detailpayload.split("\n")}/>}
                            {datas.category === "파일 업로드(File Upload)" && (<FileUploadpayload data={datas.detailpayload.split("\n")}/>)}
                            {datas.category === "파일 다운로드(File Download)" && (<FileDownloadpayload data={datas.detailpayload.split("\n")}/>)}
                            <Modal data={data} />
                          </>
                        )}
                      </>
                    ))
                : ""}
            </ul>
          </div>
        </div>
        <div className="p-14 text-center ">
          <Upbutton />
        </div>
        <div className="bg-yourcodex bg-cover rounded-xl text-center p-10">
          <h2 className="text-3xl text-white drop-shadow-text font-bold mt-4 ">
            YourCode-X를 이용해주셔서 감사합니다.
          </h2>
          <p className="text-white my-8">
            다른 웹 페에지에서도 취약점을 찾아보고 싶다면
          </p>
          <button className="px-16 py-4 bg-[#1360FF] rounded-xl my-4 hover:opacity-90">
            <Link to="/" className="text-white text-xl drop-shadow-text">
              첫페이지로 돌아가기
            </Link>
          </button>
        </div>
        <div className="text-center mx-28 my-24">
          {/*별점 리스트 만들기*/}
          <Review />
        </div>
      </div>
    </>
  );
}