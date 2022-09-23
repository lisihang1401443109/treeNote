import './App.css';
import Node from './Node';
import { useState, useEffect} from 'react';
import Parent from './Parent';
import Children from './Children';
import Action from './Action'

function App() {

  const root = {
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

  const parentList = []

  const root = props

  const [node, setNode] = useState({
    index: 0,
    type: 'text',
    title: 'new title',
    content: 'new content',
    children: []
  })

  useEffect( () => {
    console.log('node: ' + JSON.stringify(node))
  }, [node])

  const editContent = (newTitle, newContent) => {
    setNode( (node) => ({
      ...node,
      title: newTitle,
      content: newContent
    }))
  }

  return (
    <div id='main-box'>
      <Parent parentList={parentList}/>
      <Node node={node} editContent={editContent} />
      <Action />
      <Children nodes={node.children}/>
    </div>
  )
}


export default App;
