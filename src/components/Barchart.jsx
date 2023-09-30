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
      textStyle: { fontSize: '14' }, // 글씨 크기 조절
      padding: [10, 0], // 위쪽과 아래쪽 여백 추가
      itemGap: 20, // 아이템 간 간격 증가
      itemWidth: 25, // 심볼 너비 증가
      itemHeight: 15, // 심볼 높이 증가
      data:data.map(item => item.category)
    },
    grid: {
      left: "10%",
      right: "10%",
      bottom: "15%",
      top: '10%',
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
      barGap: 0,  // Same category bar gap
      barCategoryGap: 20,  // Different category bar gap
      data: Array(data.length).fill(null).map((_, i) => i === index ? {value:item.risk ,name:item.category} : null),
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
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
  const chartWidth = 500 + (data.length * 20);
  const chartHeight = 400 + (data.length * 30); // Base height of 300px plus 30px per legend
  return (
    <>
      <ReactEcharts style={{ width: `${chartWidth}px`,height:`${chartHeight}px`,backgroundColor:"#F1F1F1", padding:"10px", borderRadius:"30px" }}option={options} />
    </>
  );
}
