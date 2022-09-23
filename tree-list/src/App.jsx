import './App.css';
import Node from './node';
import { useState, useEffect} from 'react';

function App() {

  const root = {
    parent: null,
    type: 'root',
    children: []
  }

  return (
    <div className="App">
      <Display root={root} />
    </div>
  );
}

const Display = (props) =>{

  const root = props

  const [node, setNode] = useState({
    index: 0,
    parent: null,
    type: 'text',
    title: 'new title',
    value: 'new value',
    children: []
  })



  return (
    <div id='main-box'>
      <Parent node={node.parent} />
      <Node node={node} />
      <Children nodes={node.children}/>
    </div>
  )
}


export default App;
