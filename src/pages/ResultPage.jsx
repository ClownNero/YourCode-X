import React from "react";

export default function ResultPage(props) {
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
            </li>
            <li className="bg-gray text-center p-6 rounded-3xl">
              <h2 className="font-bold text-lg">취약점 차트</h2>
              <p>해당 차트에 대한 설명이 두줄 가량</p>
              <p>들어 갈 예정입니다.</p>
              {/* 원 차트 부분 */}
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
