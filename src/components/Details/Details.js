// src/App.js
import React from 'react';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import './details.css'


const chartData = [
  // Your chart data here
];

function Details() {
  return (
    <div className="app">
      <div className="left-80">
        <LeftSection chartData={chartData} />
      </div>

      <div className="right-20">
        <RightSection />
      </div>
    </div>
  );
}

export default Details;
