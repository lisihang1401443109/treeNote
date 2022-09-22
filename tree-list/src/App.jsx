import './App.css';
import Node from './node';
import { useState } from 'react';

function App() {

  const [currNode, setCurrNode] = useState()

  return (
    <div className="App">
      <Display current={currNode}>
      </Display>
    </div>
  );
}

const Display = () =>{
  return (
    <div>
      {/* <text>{'hi there'}</text> */}
      <Node {...{parent: 'hi there'}}></Node>
      {/* <text>{'hi there'}</text> */}
    </div>
  )
}


export default App;
