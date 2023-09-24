import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

export default function Barchart({ data }) {
  const [options, setOptions] = useState({
    tooltip: {
      trigger: "item",
    },

    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
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
    series: [
      {
        data: data.map((item, index) => ({
          name: item.category,
          value: item.risk,
          itemStyle: {
            color:
              index % 3 === 0
                ? "#2D5FFF"
                : index % 3 === 1
                ? "#1E82E8"
                : "#21CAFF",
            borderRadius: [50, 50, 0, 0], //막대 차트 윗부분 둥글게 만들기
          },
        })),
        type: "bar",
      },
    ],
  });
  return (
    <>
      <ReactEcharts option={options} />
    </>
  );
}
