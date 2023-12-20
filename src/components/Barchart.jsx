import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

export default function Barchart({ data }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    console.log(data); 
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    
  }, [data]);
  const [options, setOptions] = useState({
    tooltip: {
      trigger: "item",
      formatter: function (params) {
        return (
          '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' +
          params.color +
          '"></span>' +
          params.seriesName +
          "   " +
          '<span style="font-weight:bold; margin-left:13px">' + 
          params.data.value + 
          '</span>'
        );
      },
    },
    legend: {
      left: "center",
      top: "bottom", // 범례의 위쪽 여백을 자동으로 계산하도록 함.
      width: "100%",
      textStyle: { fontSize: "14" }, // 글씨 크기 조절
      padding: [10, 0], // 위쪽과 아래쪽 여백 추가
      itemGap: 20, // 아이템 간 간격 증가
      itemWidth: 25, // 심볼 너비 증가
      itemHeight: 15, // 심볼 높이 증가
      data: data.map((item) => item.category),
    },
    grid: {
      left: "10%",
      right: "10%",
      bottom: "20%", // bar 차트 위치 수정 
      top: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      show: false, // x축 숨기기
    },
    yAxis: {
      type: "value",
      max: 1.5, // 이 값을 조절하여 모든 바의 높이를 제한
      axisLabel: { show: false },
      splitLine: { show: false },
    },
    series: data.map((item, index) => ({
      name: item.category,
      type: "bar",
      stack: "stack", // 모든 막대가 같은 위치에 쌓이도록 설정
      barGap: 0, // Same category bar gap
      barCategoryGap: 20, // Different category bar gap
      
      data: Array(data.length)
      .fill(null)
      // .map((_, i) =>
      //   i === index ? { value: item.num, name: item.category } : null
      // ),
      .map((_, i) =>
        i === index ? { value: item.num === 0 ? 0.1 : item.num, name: item.category } : null
      ),      
      itemStyle: {
        borderColor: "#f1f1f1",
        borderWidth: 2,
        color:
          item.risk === "위험" ? "#F56565" : item.risk === "주의" ? "#FCD34D" : "#48BB78",
        borderRadius: [50, 50, 0, 0], //막대 차트 윗부분 둥글게 만들기
      },
      label: {
        show: true, // 라벨 표시
        position: 'top', // 라벨 위치
        formatter: function (params) {
          return params.data.value === 0 ? '0' : ''; // 값이 0일 경우 '0'을 표시
        },
        textStyle: {
          fontSize: 20,
        }
      },
      })),
  });
  const chartWidth = windowWidth >= 1560 ? (500 + data.length * 20) : (450 + data.length * 20);
  const chartHeight = windowWidth >= 1560 ? (400 + data.length * 30) : (350 + data.length * 30); 
  return (
    <>
      <ReactEcharts
        style={{
          width: `${chartWidth}px`,
          height: `${chartHeight}px`,
          boxShadow: "2px 2px 20px 5px rgba(0,0,0,0.1)",
          padding: "10px",
          borderRadius: "30px",
        }}
        option={options}
      />
    </>
  );
}