import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Details from './components/Details/Details';
import './App.css'
import Home from './components/Home/Home';

const App = (props) => {
  return(
    <Router>
    <div className='App'>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Details' element={<Details/>}/>
      
      </Routes>
     </div>
     </Router>
  )
};

export default App;         