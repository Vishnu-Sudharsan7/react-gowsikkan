  import React from 'react'
  import CardView from '../CardView/CardView'
  import './Home.css'
  import Navigator from './Navigator'
  import Para from './Para'


  const cardData1 = [
    { heading: 'Wright New India Manufacturing', 
      value: "56,952",
      Rebalance: "Monthly",
      Live: 57.8,
      CAGR:40.4,

  },

  { 
  heading:'Growth 🚀 Multi Factor ' ,
  value: "61,829",
  Rebalance: "Monthly",
  Live: 133.4,
  CAGR:24.2

  },
  { heading: 'Wright 🌱 SmallCaps', 
  value: "65,115",
  Rebalance: "Monthly",
  Live: 255.5,
  CAGR:38,

  }

  ]
  function Home() {

    return (
      <div>
          <div><Navigator/></div>
          <div className='line'></div>
          <div><Para/></div>
      <div className='card-1'>
      <div className='card'>

      {cardData1.map((data, index) => (
          <CardView key={index} data={data} />
        ))}
          <div>
      </div>
      </div>
      </div>
      </div>
    )
  }

  export default Home
