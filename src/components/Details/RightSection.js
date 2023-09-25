
// src/components/RightSection.js
import React from 'react';
import './details.css'
import BillFormat from './BillFormat';
import Subscription from './Subscription';

const RightSection = () => {
  return (
    <div className="right-section">
      <div className="button-container">
       <Subscription/>
      </div>
      <div className="bill-container">
        <BillFormat/>
        {/* Add your bill content here */}
      </div>
    </div>
  );
};

export default RightSection;
