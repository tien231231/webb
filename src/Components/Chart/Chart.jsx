import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {Row,Col} from "antd"
import { Gauge } from '@ant-design/plots';
import "./chart.css"

const Chart = ({title,tpercent,percent}) => {
  
    const config = {
        percent: percent,
        range: {
          color: 'l(0) 0:#B8E1FF 1:#3D76DD',
        },
        startAngle: Math.PI,
        endAngle: 2 * Math.PI,
        height:80,
        width:200,
        indicator: null,
        statistic: {
          title: {
            offsetY: -36,
            style: {
              fontSize: '18px',
              color: '#1b1c1f',
            },
            formatter: () => tpercent,
          },
          content: {
            style: {

              fontSize: '18px',
              lineHeight: '44px',
              color: '#4B535E',
            },
            formatter: () => title,
          },
        },
      };
      return (<div className='chart'>
      
 <Gauge {...config}/>
  

      
      
      
     </div> ) 
};
export default Chart