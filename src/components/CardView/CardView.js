  import React from 'react';
  import './CardView.css'; // Import a CSS file for styling.
  import { useNavigate } from 'react-router-dom';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {faIndianRupeeSign,faMoneyBillTrendUp} from '@fortawesome/free-solid-svg-icons';
  import Chart from '../Chart'

  const datas = [
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
  ]


  function CardView(props) {
    const {data} =props
    
    const navigate = useNavigate();
    const handleEventChange=()=>{
      navigate('/details');
    }
      return (
        <div className="card-container">

          {/* Top Segment */}
          <div className='top' >
            <div className="top-segment" >
              <FontAwesomeIcon icon={faMoneyBillTrendUp} size="2x"/>
              <h2>{data.heading}</h2>
              
            </div>
          </div>
    
          {/* Middle Segment */}
          <div className="middle-segment">
            <div className="min-investment">
              <div className="investment-container">
                <FontAwesomeIcon icon={faIndianRupeeSign} />
                <h3>{data.value}</h3>
                <p> Min. Investment</p>
                
              </div>
            </div>
            <div className="chart">
            <div className="chart-label">
              <div className="chart-label-box">
                <p>New</p>
              </div>
              <div className="chart-label-box">
                <p>High Risk</p>
              </div>
              <div className="chart-label-box">
                <p>Thematic</p>
              </div>
            </div>
            
            <Chart {...props} data={datas} />


          </div>
            <div className='details '>
              <div className="table1">
                <p>Rebalance</p>
                <p>Live Return</p>
                <p>1Y CAGR</p>
              </div>
              <div className="table2">
                <h5>{data.Rebalance}</h5>
                <h5>{data.Live}</h5>
                <h5>{data.CAGR}</h5>
              </div>
            </div>  
            
            
          </div>
    
          {/* Last Segment */}
          <div className="last-segment">
            <div className="subscription-fee">
              <p>Subscription Fee</p>
              <div className='subscription-container'>
                <FontAwesomeIcon icon={faIndianRupeeSign} />
                <p>500/month</p>
              </div>
              
            </div>
            <div className='btn'>
            <button onClick={handleEventChange}>View Portfolio</button>
            </div>
          </div>
        </div>
      );
    }
    
    export default CardView;
    