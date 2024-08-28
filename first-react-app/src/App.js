
import './App.css';
// import ClassComponent from './components/ClassComponent'
import FunctionComponent from './components/FunctionComponent';
// import {useState} from 'react';
import {Routes, Route} from "react-router-dom";
 

function App() {
  
  return (
    <Routes>
      <Route path='/hello' element={<FunctionComponent />}/>
    </Routes>
  );

}

export default App;
