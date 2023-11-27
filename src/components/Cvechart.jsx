import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";

export default function Cvechart({ data }) {
  console.log(data)
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
        data : [
          { value: data[0].ov, name: 'Overflow'},
          { value: data[0].mc, name: 'Memory Corruption' },
          { value: data[0].si, name: 'Sql Injection'},
          { value: data[0].xss, name: 'XSS'},
          { value: data[0].dt, name: 'Directory Traversal' },
          { value: data[0].fi, name: 'File Inclusion'},
          { value: data[0].csrf, name: 'CSRF'},
          { value: data[0].xxe, name: 'XXE'},
          { value: data[0].ssrf, name: 'SSRF'},
          { value: data[0].opr, name: 'Open Redirect'},
          { value: data[0].iv, name: 'Input Validation'},
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
          boxShadow: "2px 2px 20px 10px rgba(0,0,0,0.1)",
          borderRadius: "30px",
          
        }}
        option={options}
      />
    </>
  );
}