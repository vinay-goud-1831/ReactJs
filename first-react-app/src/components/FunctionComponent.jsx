
import React from 'react';
import {useState} from 'react';

function FunctionComponent () {
  const [count, setName] = useState(0);
    return (
      <div className="App">
        <header className='app-header'>
        <button onClick={()=>setName(count + 1)}>click me</button>
        <h1>{count}</h1>
        </header>
      </div>
    );
  }

  export default FunctionComponent ;