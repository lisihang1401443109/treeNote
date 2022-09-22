import { useState } from "react"
// import { useEffect } from "react"

export default function Node(){

    // the node element allows user to store information (for now text)
    // A node is linked to its parent and children. 

    // const parent = the parent element

    const {props, setProps} = useState({
        parent: this.parent,
        children: [],
        title: 'Enter your title here.',
        board: 'Body Text'
    })
    
    return (
        <div class='node-container'>
            {/* <Title text={this.props.title} setText={(x) => setProps(...props, title=x)}></Title>
            <Separator></Separator>
            <Board info={this.props.board} setBoard = {(x) => setProps(...props, board=x)}></Board> */}

            <text>
                {props.parent}
            </text>
        </div>
    )
}

const Title = () =>{
    return (
        <div>
            <input class='title-input'></input>
            <text>{this.text}</text>
        </div>
    )
}

const Board = () => {
    return (
        <div id='container'>
            <text>{this.board}</text>
        </div>
    )
}
  
  const Separator = () => {
    return (
      <div>
  
      </div>
    )
  }