import React,{ useEffect, useState } from "react";
import axios from"axios";
import Barchart from "../components/Barchart";
import Piechart from "../components/Piechart";

export default function ResultPage({ location }) {
  // 이전 페이지에서 전달 받은 결과 데이터 == 분석데이터
  //const resultData = location.state.result;
  // 예시 코드
  // Mock 데이터 가져오기
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  useEffect(() => {
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

    fetchData();
}, []);
  return (
    <>
      <div className="mt-44">
        <div className="w-full flex items-center h-[400px] justify-center">
          <p className="font-bold">상단부에 summary 제공 ????</p>
        </div>
        <div className="m-4">
          <h2 className="font-bold text-xl text-search">Problem Chart</h2>
          <ul className="flex justify-around m-3">
            <li className="bg-gray text-center p-6 rounded-3xl">
              <h2 className="font-bold text-lg">위험도 차트</h2>
              <p>해당 차트에 대한 설명이 두줄 가량</p>
              <p>들어 갈 예정입니다.</p>
              {/* 막대 차트 부분 */}
              {loading ? 'Loading...' : <Barchart data={data}/>}
            </li>
            <li className="bg-gray text-center p-6 rounded-3xl">
              <h2 className="font-bold text-lg">취약점 차트</h2>
              <p>해당 차트에 대한 설명이 두줄 가량</p>
              <p>들어 갈 예정입니다.</p>
              {/* 파이 차트 부분 */}
              {loading ? `` : <Piechart data={data}/>}
            </li>
          </ul>
        </div>
        <div className="m-4">
          <h2 className="font-bold text-xl text-search">Solution</h2>
          <div className="bg-gray text-center p-6 rounded-3xl m-3">
            <table>
              <thead>
                <tr>
                  <th><h1>Category</h1></th>
                  <th><h1>Number of Found</h1></th>
                  <th><h1>Risk</h1></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google</td>
                  <td>9518</td>
                  <td>6369</td>
                </tr>
                <tr>
                  <td>Twitter</td>
                  <td>7326</td>
                  <td>10437</td>
                </tr>
                <tr>
                  <td>Amazon</td>
                  <td>4162</td>
                  <td>5327</td>
                </tr>
                <tr>
                  <td>LinkedIn</td>
                  <td>3654</td>
                  <td>2961</td>
                </tr>
                <tr>
                  <td>CodePen</td>
                  <td>2002</td>
                  <td>4135</td>
                </tr>
                <tr>
                  <td>GitHub</td>
                  <td>4623</td>
                  <td>3486</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
