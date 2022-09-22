import React, { useEffect } from "react"
import { useRef, useState } from "react"
// import { useEffect } from "react"

const useDebounce = (fn, delay) => {
    let timer

    return (...args) => {
        if (timer < delay) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn(...args)
            timer = null
        }, delay)
    }
}


const Node = (props) => {

    // the node element allows user to store information (for now text)
    // A node is linked to its parent and children. 

    // const parent = the parent element

    const { parent, position, type, setType, setCurrNodeParent} = props

    const bodyRef = useRef()
    const titleRef = useRef()

    const [node, setNode] = useState({
        parent: parent,
        children: [],
        title: 'Enter your title here.',
        board: 'Body Text'
    })

    useEffect(() => {
      console.log('refreshed: ', node)
    }, [node])
    
    // useEffect(() => {
    //     console.log('node switched')
    // }, [parent, position])

    const setText = (newText) => {
        setNode(
            (node) => ({...node, title: newText})
        )
    }

    const setBoard = (newBoard) => {
        setNode(
            (node) => ({...node, board: newBoard})
        )
    }

    const focusBody = () => {
        bodyRef.current.focus()
    }

    const createChildNode = () => {
        setNode(
            (node) => {
                const childNode =  ({
                    parent: node,
                    children: [],
                    title: 'Enter your title here.',
                    board: 'Body Text'
                })
                node.children.push(childNode)
                return childNode
            }
        )
    }

    const goChildHandler = () => {
        if (node.children.length === 0){
            // if no child, create new child node and switch to it
            createChildNode()
        }else{
            setNode((node) => node.children[0])
        }
    }

    const goParentHandler = () =>{
        if (node.parent != null){
            setNode(node => node.parent)
        }
    }

    const createChildHandler = () => {
        createChildNode()
    }
    
    return (
        <div className='node-container'>
            <Title text={node.title} setText = {setText} focusBody = {focusBody} ref={titleRef} />
            <Separator />
            <Board board={node.board} setBoard = {useDebounce(setBoard, 200)} ref={bodyRef} />
            <button onClick={goChildHandler}>go child</button>
            <button onClick={goParentHandler}>go Parent</button>
            <button onClick={createChildHandler}>create child</button>
        </div>
    )
}

const Title = React.forwardRef((props, ref) =>{

    const {text, setText, focusBody} = props

    const keyUpHandler = (e) => {
        if (e.keyCode === 13){
            setText(ref.current.value)
        }
    }

    useEffect(() => {
        console.log('title: '+ text)
        focusBody()
    }, [text])

    useEffect(() => ref.current.focus(), [])
    

    return (
        <div>
            <input className='title-input' placeholder={text} onKeyUp={keyUpHandler} ref={ref}></input>
            <p>{text}</p>
        </div>
    )
})

const Board = React.forwardRef((props, ref) => {

    const {board, setBoard} = props

    useEffect(() => {
      console.log('board: ', board)
    }, [board])
    

    return (
        <div className='node-container'>
            {/* <p>{board}</p> */}
            <textarea id='main-body' ref={ref} onChange = {(e) => {
                setBoard(ref.current.value)
            }}></textarea>
            <p id='main-body'>{board}</p>
        </div>
    )
})
  
const Separator = () => {
return (
    <div id='separator'>

    </div>
)
}

export default Node