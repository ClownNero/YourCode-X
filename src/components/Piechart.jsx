import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

export default function Piechart({ data }) {
  const mockData = [{num:1600 , category:"Sql Injection"},{num:3925 , category:"XSS"}, {num:630, category:"Directory Traversal"}]
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
        data: mockData.map((item) => ({ value: item.num, name: item.category })),
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