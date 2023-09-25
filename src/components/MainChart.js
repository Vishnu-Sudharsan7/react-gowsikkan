import React, { useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';

const MainChart
 = (props) => {
  const {
    data,
    colors: {
      backgroundColor = 'white',
      lineColor = '#90EE90',
      textColor = 'black',
      areaTopColor = '#90EE90',
      areaBottomColor = 'rgba(144, 238, 144,0.1)',
    } = {},
  } = props;

  const chartContainerRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      chart.applyOptions({ width: chartContainerRef.current.clientWidth });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: backgroundColor },
        textColor,
      },
      width: 900,
      height: 350,    
      rightPriceScale: {
        visible: false, // Hide the y-axis on the right
      },
      leftPriceScale: {
        visible: true, // Hide the y-axis on the left
      },
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
    newSeries.setData(data);
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
      
    };
  }, [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]);

  return <div ref={chartContainerRef} />
};

export default MainChart