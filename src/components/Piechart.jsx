import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

export default function Piechart({ data }) {
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
          color: function(params) {
            // build a color map as your need.
            const colorList = ["#2D5FFF", "#1E82E8", "#21CAFF"];
            return colorList[params.dataIndex % colorList.length];
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
        data: data.map((item) => ({ value: item.num, name: item.category })),
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
