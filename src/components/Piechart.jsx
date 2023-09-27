import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

export default function Piechart({ data }) {
  const [options, setOptions] = useState({
    tooltip: {
      trigger: "item",
    },

    legend: {
      left: "center",
      top: "bottom",
      width: "100%",
      textStyle: { fontSize: '14' }, // 글씨 크기 조절
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
        data: data.map((item) => ({ value: item.risk, name: item.category })),
      },
    ],
  });
  console.log(options.series)
  return (
    <>
      <ReactEcharts style={{ width: '500px',height: '400px', backgroundColor:"#F1F1F1", padding:"10px"}}option={options} />
    </>
  );
}
