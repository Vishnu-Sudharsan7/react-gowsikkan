// src/components/Header.js
import React from 'react';
import './details.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBoltLightning} from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <div className='head'> 
    <div className="header">
        <div className='header-img'>
            <img src="https://images.crunchbase.com/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/assrf6zssajfa01dvbaf" alt="logo" width="30px" height="30px"/>
        </div>
        <h1>Wright Momentum</h1>
        </div>
        <div className='sub-text'>
        <p>Momentum investing: Amimg to captiloze on market trends for potential growth</p>
        </div>
    </div>
  );
};

export default Header;
