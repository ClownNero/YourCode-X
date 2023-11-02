import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

export default function Piechart({ data }) {
  const vulnerabilitiesData =[
    { name: 'Overflow', color: "#c1232b"},
    { name: 'Memory Corruption', color: "#27727b" },
    { name: 'SQL 인젝션', color: "#fcce10" },
    { name: 'XSS', color: "#e87c25" },
    { name: 'Directory Traversal', color: "#b5c334" },
    { name: 'File Inclusion', color: "#fe8463" },
    { name: 'CSRF', color: "#9bca63" },
    { name: 'XXE', color: "#fad860" },
    { name: 'SSRF', color: "#f3a43b" },
    { name: 'Open Redirect', color: "#60c0dd" },
    { name: 'Input Validation', color: "#d7504b"},
  ];
  //const mockData = [{num:1600 , category:"Sql Injection"},{num:3925 , category:"XSS"}, {num:630, category:"Directory Traversal"}]
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(data)
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [options, setOptions] = useState({
    tooltip: {
      trigger: "item",
    },

    legend: {
      left: "center",
      top: "bottom",
      width: "100%",
      textStyle: { fontSize: "14" }, // 글씨 크기 조절
      padding: [10, 0], // 위쪽과 아래쪽 여백 추가
      itemGap: 20, // 아이템 간 간격 증가
      itemWidth: 25, // 심볼 너비 증가
      itemHeight: 15, // 심볼 높이 증가
    },
    series: [
      {
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          color: function(params) {
           console.log(params.data.name_1)
            const currentItem = params.data.name_1;
            const matchingItem = vulnerabilitiesData.find(item => item.name === currentItem);
            return matchingItem ? matchingItem.color : null; // 기본 색상은 검은색입니다.
          },
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: data.map((item) => ({ value: item.payload_1.split('\n').length, name: item.category_1 })),
      },
    ],
  });
  console.log(options.series);
  const chartWidth = windowWidth >= 1560 ? (500 + data.length * 20) : (450 + data.length * 20);
  const chartHeight = windowWidth >= 1560 ? (400 + data.length * 30) : (350 + data.length * 30); 
  return (
    <>
      <ReactEcharts
        style={{
          width: `${chartWidth}px`,
          height: `${chartHeight}px`,
          backgroundColor: "#F1F1F1",
          padding: "10px",
          borderRadius: "30px",
        }}
        option={options}
      />
    </>
  );
}