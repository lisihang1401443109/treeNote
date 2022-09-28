import React, { useEffect } from "react"
import { useRef, useState } from "react"

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

    const {node, editContent} = props

    const titleRef = useRef()
    const contentRef = useRef()

    const focusContent = () => {
        contentRef.current.focus()
    }

    useEffect(()=>{
        contentRef.current.value = node.content
    }, [])
    
    const checkChange = (e) => {
        console.log(e.key)
        if (e.key == 'Enter')
        {
            if (titleRef.current.innerHTML == node.title && contentRef.current.value == node.content){
                // do nothing
            }else{
                console.log('change happened: ', titleRef.current.innerHTML, contentRef.current.value)
                editContent(titleRef.current.innerHTML, contentRef.current.value)
                focusContent()
            }
        }
    }

    return <div>
        <div id='title'>
            <div contentEditable='true' ref={titleRef} onKeyDown={checkChange}>
                {node.title}
            </div>
        </div>
        <Separator />
        <div id='content'>
            <textarea ref={contentRef} onKeyDown={checkChange}>
                {node.content}
            </textarea>
        </div>
    </div>
}

const Separator = () => {
    return <div>
        ------
    </div>
}

export default Node