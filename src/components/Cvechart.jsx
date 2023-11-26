import axios from 'axios';
import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

export default function Cvechart({ data }) {
  
  const [options, setOptions] = useState({
    title: {
      left: 'left'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      itemGap: 15,
      orient: 'vertical',
      right: '5%',
      top:'middle',
      textStyle: {
        fontSize: 14, // 텍스트 크기를 20으로 설정
    },
    },
    series: [
      {
        type: 'pie',
        radius: '70%',
        right:'20%',
        label:{
          textStyle:{
            fontSize:16
          }
        },
        itemStyle: {
          // 위험 주의 양호 색깔 설정 부분
          // color: function(params) {
          //   const item = data[params.dataIndex];
          //   if (item.risk === "위험") {
          //     return "#F56565"; // bg-red-500
          //   } else if (item.risk === "주의") {
          //     return "#FCD34D"; // bg-yellow-300
          //   } else {
          //     return "#48BB78"; // bg-green-500
          //   }
          // },
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        color: [
          "#c1232b",
          "#27727b",
          "#fcce10",
          "#e87c25",
          "#b5c334",
          "#fe8463",
          "#9bca63",
          "#fad860",
          "#f3a43b",
          "#60c0dd",
          "#d7504b",
          "#c6e579",
          "#f4e001",
          "#f0805a",
          "#26c0c0"
        ],
        data: [
          { value: 1499, name: 'Overflow'},
          { value: 2336, name: 'Memory Corruption' },
          { value: 1674, name: 'Sql Injection'},
          { value: 4160, name: 'XSS'},
          { value: 665, name: 'Directory Traversal' },
          { value: 108, name: 'File Inclusion'},
          { value: 1026, name: 'CSRF'},
          { value: 123, name: 'XXE'},
          { value: 177, name: 'SSRF'},
          { value: 133, name: 'Open Redirect'},
          { value: 644, name: 'Input Validation'},
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  });

  // useEffect(() => {
  //   // 서버로부터 CVE 데이터 요청
  //   axios.get('http://localhost:5000/gomain')  // 서버 주소는 실제 환경에 맞게 변경
  //     .then(response => {
  //       // 받아온 데이터를 차트용 데이터 형태로 변환
  //       const chartData = Object.entries(response.data).map(([name, value]) => ({
  //         name,
  //         value: Number(value)  // 문자열을 숫자로 변환
  //       }));
  //       // 변환한 데이터를 차트의 data에 적용
  //       setOptions(prevOptions => {
  //         const newOptions = { ...prevOptions };
  //         newOptions.series[0].data = chartData;
  //         return newOptions;
  //       });
  //     })
  //     .catch(error => console.error('Error fetching data: ', error));
  // }, []);

  return (
    <>
      <ReactEcharts
        style={{
          width: `1024px`,
          height: `450px`,
          boxShadow: "2px 2px 20px 10px rgba(0,0,0,0.1)",
          borderRadius: "30px",
          
        }}
        option={options}
      />
    </>
  );
}