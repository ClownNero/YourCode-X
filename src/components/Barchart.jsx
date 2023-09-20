import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';

export default function Barchart({data}) {
  const [options, setOptions] = useState({
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      axisLabel: { interval: 0, rotate: 30 },
      axisTick: {
        alignWithLabel: true
      },
      data: data.map(item => item.category)
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: data.map(item => item.risk),
        type: 'bar'
      }
    ]
  });
  return (
    <>
      <ReactEcharts
        option = {options}
      />
    </>
  );
}

