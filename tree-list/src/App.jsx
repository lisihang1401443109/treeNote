import './App.css';
import Node from './node';
import { useState, useEffect} from 'react';

function App() {

  const [currNodeParent, setCurrNodeParent] = useState(null)

  useEffect( () => {
    setCurrNodeParent(null)
  }, )

  return (
    <div className="App">
      <p>{'currNodeParent = ' + JSON.stringify(currNodeParent)}</p>
      <Display currNodeParent={currNodeParent} setCurrNodeParent={setCurrNodeParent}></Display>
    </div>
  );
}

const Display = (props) =>{

  const { currNodeParent, setCurrNodeParent} = props
  const [type, setType] = useState('text')

  return (
    <div id='main-box'>
      <Node {...{parent: currNodeParent, position: 0, type: type, setType: setType, setCurrNodeParent: setCurrNodeParent}}></Node>
    </div>
  )
}


export default App;
