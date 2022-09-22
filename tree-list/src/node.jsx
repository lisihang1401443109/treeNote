import { useState } from "react"
import { useEffect } from "react"

export default function Node(){

    // the node element allows user to store information (for now text)
    // A node is linked to its parent and children. 

    // const parent = the parent element

    const {props, setProps} = useState({
        parent: this.parent,
        children: [],
        title: 'Enter your title here.',
        board: {}
    })
    
    return (
        <div class='node-container'>
            <title text={props.title} setText={(x) => setProps(...props, title=x)}></title>
            <separator></separator>
            <board info={this.board} setBoard = {(x) => setProps(...props, board=x)}></board>
        </div>
    )
}

const title = () =>{


    return (
        <div>
            
        </div>
    )
}