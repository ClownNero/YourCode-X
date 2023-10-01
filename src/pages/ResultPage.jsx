import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Barchart from "../components/Barchart";
import Piechart from "../components/Piechart";
import Upbutton from "../components/ui/Upbutton";
import { RxCaretSort, RxCaretUp, RxCaretDown } from "react-icons/rx";
import Modal from "./Modal";

export default function ResultPage({ location }) {
  // 이전 페이지에서 전달 받은 결과 데이터 == 분석데이터
  //const resultData = location.state.result;
  // 예시 코드
  // Mock 데이터 가져오기
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  useEffect(() => {
    putSpringData();
    fetchData();
  }, []);

  useEffect(()=> {
    if(sortOrder === 'asc'){
      setSortedData([...data].sort((a,b)=>a.risk - b.risk));
    } else if( sortOrder === 'desc') {
      setSortedData([...data].sort((a,b)=> b.risk - a.risk));
    } else {
      setSortedData(data);
    }
  }, [data, sortOrder]);

  async function putSpringData() {
    await axios
      .get("http://localhost:8081/analysis/result")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const fetchData = async () => {
    try {
      // mock API로부터 데이터 가져오기
      const response = await axios.get(
        process.env.PUBLIC_URL + "/data/mockdata.json"
      );
      // 상태 업데이트
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // 데이터 요청 완료(성공 또는 실패) 후 로딩 상태를 false로 설정
    }
  };
  return (
    <>
      <div className="mx-6 mt-40">
        <div className="mx-4 my-14">
          <h2 className="font-bold text-4xl text-Result">Problem Chart</h2>
          <ul className="flex justify-center w-full">
            <li className="bg-gray py-6 mr-52 min-w-0">
              <h2 className="text-Result text-2xl text-left mb-3">
                위험도 차트 risk chart
              </h2>
              {/* 막대 차트 부분 */}
              {loading ? "Loading..." : <Barchart data={data} />}
            </li>
            <li className="bg-gray text-center py-6 ml-52 min-w-0">
              <h2 className="text-Result text-2xl text-left mb-3">
                취약점 차트 weakness chart
              </h2>
              {/* 파이 차트 부분 */}
              {loading ? `` : <Piechart data={data} />}
            </li>
          </ul>
        </div>
        <div className="mx-4 my-14">
          <h2 className="font-bold text-4xl text-Result">Problem List</h2>
          <p className="text-Result text-2xl py-6 text-left mb-3">
            취약점 세부 목록
          </p>
          <div className="bg-gray text-center rounded-3xl ">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#1360FF]">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center font-medium text-white uppercase tracking-wider"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center font-medium text-white uppercase tracking-wider"
                  >
                    Number of Found
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-center font-medium text-white uppercase tracking-wider"
                    onClick={ () =>
                      sortOrder !== 'asc' ? setSortOrder('asc') : setSortOrder('desc')
                    }
                  >
                    Risk {sortOrder === 'desc' ? <RxCaretUp className="inline text-2xl"/>: sortOrder === 'asc' ? <RxCaretDown className="inline text-2xl"/> : <RxCaretSort className="inline text-2xl"/>}
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-Result text-lg">
                {data
                  ? sortedData.map((datas,index) => (
                      <tr key={datas.category} className={index % 2 === 1 ? 'bg-[#E3EBFF]' : ''}>
                        <td className="px-6 py-4 whitespace-normal text-left">
                          {datas.category}
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                          {datas.payload}
                        </td>
                        <td className="px-6 py-4 whitespace-normal">
                          {datas.risk >= 80 ? (
                            <span className="inline-block h-3 w-3 rounded-full bg-red-500"></span>
                          ) : datas.risk >= 40 ? (
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
        <div className="m-4 my-14">
          <h2 className="font-bold text-4xl text-Result">Diagnosis</h2>
          <div className="py-6">
            <h2 className="text-Result text-2xl text-left mb-3">
              진단 세부 사항
            </h2>
            <ul>
              {data ? data.filter(datas => datas.risk >= 40).sort((a, b) => b.risk - a.risk).map((datas, index)=>(
              <>
              <li key={index} className="flex justify-between p-3 border-b-4 text-Result text-xl items-center">
                <div>
                  {datas.risk >= 80 ? (
                    <span className="inline-block h-4 w-4 rounded-full bg-red-500"></span>
                  ) : (
                    <span className="inline-block h-4 w-4 rounded-full bg-yellow-300"></span>
                  )
                  }
                  <span className="ml-4">{datas.category}</span>
                </div>
                <RxCaretDown className="text-2xl"/>
              </li>
              <p>{datas.category}의 상세 설명</p>  
              <Modal data={data}/>
              </>
              ))
              :""}
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
          <button className="px-16 py-4 bg-[#1360FF] rounded-xl my-4">
            <Link to="/" className="text-white text-xl drop-shadow-text">
              {" "}
              첫페이지로 돌아가기
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
