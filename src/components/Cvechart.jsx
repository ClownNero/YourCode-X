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
      orient: 'vertical',
      right: 'right',
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
            fontSize:14
          }
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
          { value: 1499, name: 'Overflow' },
          { value: 2336, name: 'Memory Corruption' },
          { value: 1674, name: 'Sql Injection' },
          { value: 4160, name: 'XSS' },
          { value: 665, name: '	Directory Traversal' },
          { value: 108, name: 'File Inclusion' },
          { value: 1026, name: 'CSRF' },
          { value: 123, name: 'XXE' },
          { value: 177, name: 'SSRF' },
          { value: 133, name: 'Open Redirect' },
          { value: 644, name: 'Input Validation' },
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
  return (
    <>
      <ReactEcharts
        style={{
          width: `1024px`,
          height: `450px`,
          backgroundColor: "#F1F1F1",
          borderRadius: "30px",
          
        }}
        option={options}
      />
    </>
  );
}