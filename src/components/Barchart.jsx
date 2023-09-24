import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

export default function Barchart({ data }) {
  const [options, setOptions] = useState({
    tooltip: {
      trigger: "item",
    },
    legend: {
      left: "center",
      top:'bottom', // 범례의 위쪽 여백을 자동으로 계산하도록 함.
      width: "100%",
      data:data.map(item => item.category)
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "15%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      show: false, // x축 숨기기
    },
    yAxis: {
      type: "value",
      axisLabel: { show: false },
      splitLine: { show: false },
    },
    series: data.map((item, index) => ({
      name: item.category,
      type: 'bar',
      stack: 'stack', // 모든 막대가 같은 위치에 쌓이도록 설정 
      data: Array(data.length).fill(null).map((_, i) => i === index ? item.risk : null),
      itemStyle: {
        color:
          index % 3 === 0
            ? "#2D5FFF"
            : index % 3 === 1
            ? "#1E82E8"
            : "#21CAFF",
        borderRadius: [50, 50, 0, 0], //막대 차트 윗부분 둥글게 만들기
      },
    }))
  });
  console.log(options.series)
  return (
    <>
      <ReactEcharts option={options} />
    </>
  );
}
