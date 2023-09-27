import React,{ useEffect, useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 703954472cd1aaa917d9cb5181ffa3cf483cf3ca
import axios from"axios";
import Barchart from "../components/Barchart";
import Piechart from "../components/Piechart";
import Upbutton from "../components/ui/Upbutton";
import Modal from "./Modal";
import { Link } from "react-router-dom";

export default function ResultPage({ location }) {
  // 이전 페이지에서 전달 받은 결과 데이터 == 분석데이터
  //const resultData = location.state.result;
  // 예시 코드
  // Mock 데이터 가져오기
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 관리

    useEffect(() => {
        putSpringData();
        fetchData();
    },[])

    async function putSpringData() {
        await axios
        .get("http://localhost:8081/analysis/result")
        .then((res)=>{
            console.log(res.data); 
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    };
    const fetchData = async () => {
      try {
          // mock API로부터 데이터 가져오기
          const response = await axios.get(process.env.PUBLIC_URL + '/data/mockdata.json');
          // 상태 업데이트
          setData(response.data);
      } catch (error) {
          console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // 데이터 요청 완료(성공 또는 실패) 후 로딩 상태를 false로 설정
      }
  };

  return (
    <>
      <div className="mt-44">
        <div className="w-full flex items-center h-[400px] justify-center">
          <p className="font-bold">상단부에 summary 제공 ????</p>
        </div>
        <div className="m-4">
          <h2 className="font-bold text-4xl text-Result">Problem Chart</h2>
          <ul className="flex justify-center">
            <li className="bg-gray py-6 rounded-3xl ml-10">
              <h2 className="text-Result text-2xl text-left mb-3">위험도 차트 risk chart</h2>
              {/* 막대 차트 부분 */}
              {loading ? 'Loading...' : <Barchart data={data}/>}
            </li>
            <li className="bg-gray text-center py-6 rounded-3xl ml-32">
              <h2 className="text-Result text-2xl text-left mb-3">취약점 차트 weakness chart</h2>
              {/* 파이 차트 부분 */}
              {loading ? `` : <Piechart data={data}/>}
            </li>
          </ul>
        </div>
        <div className="m-4">
          <h2 className="font-bold text-4xl text-Result">Solution</h2>
          <div className="bg-gray text-center p-6 rounded-3xl m-3">
          <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th><h1>Category</h1></th>
                  <th><h1>Number of Found</h1></th>
                  <th><h1>Risk</h1></th>
                </tr>
              </thead>
              <tbody>
              
                {data ? data.map((datas)=>(
                    <tr key={datas.category}>
                        <th> {datas.category}</th>
                        <th> {datas.num}</th>
                        <th> {datas.risk}</th>
                    </tr>
                )) : ''}

              </tbody>
            </table>
          </div>
        </div>
        <div className="m-4">
          <h2 className="font-bold text-4xl text-Result">Diagnosis</h2>
          <div className="py-6">
            <h2 className="text-Result text-2xl text-left mb-3">진단 세부 사항</h2>
            <Modal data={data}/>
          </div>
        </div>
        <div className="p-14 text-center ">
            <Upbutton/>
        </div>
        <div className="bg-yourcodex bg-cover rounded-xl text-center p-10">
          <h2 className="text-3xl text-white drop-shadow-text font-bold ">YourCode-X를 이용해주셔서 감사합니다.</h2>
          <p className="text-white my-8">다른 웹 페에지에서도 취약점을 찾아보고 싶다면</p>
          <button className="px-16 py-4 bg-blue-600 rounded-xl my-4">
            <Link to="/" className="text-white text-xl drop-shadow-text"> 첫페이지로 돌아가기</Link>
          </button>
        </div>
      </div>
    </>
  );
}