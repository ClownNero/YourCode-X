import React, { useState, useEffect } from 'react';
import ReactEcharts from 'echarts-for-react';

export default function Piechart({data}) {
  const [options, setOptions] = useState(
    {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: data.map(item => ({value:item.risk, name:item.category}))
        }
      ]
    }
  );
  return (
    <>
      <ReactEcharts
        option = {options}
      />
    </>
  );
}

