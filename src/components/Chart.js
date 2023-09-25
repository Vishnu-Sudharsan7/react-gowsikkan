import React, { useEffect, useRef } from 'react';
import { createChart, ColorType } from 'lightweight-charts';

const Chart
 = (props) => {
  const {
    data,
    colors: {
      backgroundColor = 'white',
      lineColor = '#90EE90',
      textColor = 'black',
      areaTopColor = '#90EE90',
      areaBottomColor = 'rgba(144, 238, 144,0.28)',
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
      width: 300,
      height: 150,
      rightPriceScale: {
        visible: false,
         // Hide the y-axis on the right
      },
      
      timeScale: {
        visible: 0, // Hide the x-axis at the bottom
        
      },
      grid: {
        horzLines: {
          visible: false, // Hide horizontal grid lines
        },
        vertLines: {
          visible: false, // Hide vertical grid lines
        },
      },
      crosshair: {
        vertLine: {
          visible: false, // Hide vertical line on hover
        },
        horzLine: {
          visible: false, // Hide horizontal line on hover
        },
        // Set tooltip mode to 'none' to disable tooltips
        mode: 0, // Use 0 to disable tooltips
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

export default Chart