import React from 'react';
import "./BillFormat.css";

function BillFormat() {
  return (
    <div>
      <div className='format'>
        <div className='format-second'>
          <h2>3Y</h2>
          <h3>48.1%</h3>
        </div> 
        <div className='format-second'>
          <h2>1D Returns</h2>
          
          <h3 style={{ color: 'green' }}>0.1%</h3>
        </div>
        
       
        
      </div>
      <div className='format'>
      <div className='format-second'>
            <h2>Volatality</h2>
            <h3>Highly Volatile</h3>

        </div>
        
      </div>

      <div className='format1'>
             <div className='format-second'>
            <h2>Rebalancing Frequency</h2>
            <h3>Monthly</h3>

        </div>
        </div>


        <div className='format1'>
        <div className='format-second'>
            <h2>Subscription Starting</h2>
            <h3>$600/month</h3>

        </div>
        </div>

        

        <div className='format1'>
        

        <div className='format-second'>
            <h2>Min Investment</h2>
            <h3>$52,880</h3>

        </div>
        </div>
        <div className='line'>

        </div>
        <div className='format1'>
            <div className='format-second'>
                <h2>More Insights &gt;</h2>
            </div>
        </div>
    </div>
  );
}

export default BillFormat;
