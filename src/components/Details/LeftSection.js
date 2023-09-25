// src/components/LeftSection.js
import React from 'react';
import Header from './Header';
import './details.css'
import MainChart from '../MainChart';
const data = [
  { time: '2018-12-22', value: 20.51 },
  { time: '2018-12-23', value: 21.11 },
  { time: '2018-12-24', value: 22.02 },
  { time: '2018-12-25', value: 23.32 },
  { time: '2018-12-26', value: 24.33 },
  { time: '2018-12-27', value: 25.89 },
  { time: '2018-12-28', value: 26.46 },
  { time: '2018-12-29', value: 27.92 },
  { time: '2018-12-30', value: 28.68 },
  { time: '2018-12-31', value: 33.67 },
  { time: '2019-01-01', value: 34.12 },
  { time: '2019-01-02', value: 35.25 },
  { time: '2019-01-03', value: 36.10 },
  { time: '2019-01-04', value: 37.45 },
  { time: '2019-01-05', value: 36.78 },
  { time: '2019-01-06', value: 35.92 },
  { time: '2019-01-07', value: 34.67 },
  { time: '2019-01-08', value: 33.84 },
  { time: '2019-01-09', value: 32.45 },
  { time: '2019-01-10', value: 33.12 },
  { time: '2019-01-11', value: 32.74 },
  { time: '2019-01-12', value: 33.89 },
  { time: '2019-01-13', value: 34.56 },
  { time: '2019-01-14', value: 35.23 },
  { time: '2019-01-15', value: 36.11 },
  { time: '2019-01-16', value: 35.68 },
  { time: '2019-01-17', value: 36.45 },
  { time: '2019-01-18', value: 35.88 },
  { time: '2019-01-19', value: 36.75 },
  { time: '2019-01-20', value: 37.12 },
  { time: '2019-01-21', value: 37.89 },
  { time: '2019-01-22', value: 38.24 },
  { time: '2019-01-23', value: 39.01 },
  { time: '2019-01-24', value: 38.45 },
  { time: '2019-01-25', value: 37.98 },
  { time: '2019-01-26', value: 38.65 },
  { time: '2019-01-27', value: 37.97 },
  { time: '2019-01-28', value: 37.21 },
  { time: '2019-01-29', value: 37.94 },
  { time: '2019-01-30', value: 38.58 },
  { time: '2019-01-31', value: 37.89 },
  { time: '2019-02-01', value: 38.23 },
  { time: '2019-02-02', value: 39.01 },
  { time: '2019-02-03', value: 38.65 },
  { time: '2019-02-04', value: 38.98 },
  { time: '2019-02-05', value: 39.32 },
  { time: '2019-02-06', value: 38.77 },
  { time: '2019-02-07', value: 38.12 },
  { time: '2019-02-08', value: 38.45 },
  { time: '2019-02-09', value: 37.89 },
  { time: '2019-02-10', value: 38.21 },
  { time: '2019-02-11', value: 37.65 },
  { time: '2019-02-12', value: 38.02 },
  { time: '2019-02-13', value: 38.37 },
  { time: '2019-02-14', value: 37.78 },
  { time: '2019-02-15', value: 38.12 },
  { time: '2019-02-16', value: 38.49 },
  { time: '2019-02-17', value: 37.95 },
  { time: '2019-02-18', value: 38.21 },
  { time: '2019-02-19', value: 38.56 },
  { time: '2019-02-20', value: 38.12 },
]

  
const LeftSection = (props) => {
  return (
    <div className="left-section">
      <Header />
      <div className="text-container">
        <div className="text-row">
          <p><b>1 Lac</b> invested for <b>5 years</b> could have been:</p>
          <p><b>Portfolio</b> <br/>5,15,595</p>
          <p><b>Multicap</b> <br/>5,15,595</p>
          <p>5 years</p>
        </div>
        <MainChart {...props} data={data} />
        
      </div>
    </div>
  );
};

export default LeftSection;
