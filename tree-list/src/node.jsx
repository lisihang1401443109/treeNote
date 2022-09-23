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

    const checkChange = (e) => {
        if ()
        {
            if (titleRef.current.innerHTML == node.title && contentRef.current.innerHTML == node.content){
                // do nothing
            }else{
                console.log('change happened: ', titleRef.current.innerHTML, contentRef.current.innerHTML)
                editContent(titleRef.current.innerHTML, contentRef.current.innerHTML)
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
            <div contentEditable='true' ref={contentRef} onKeyDown={checkChange}>
                {node.content}
            </div>
        </div>
    </div>
}

const Separator = () => {
    return <div>
        ------
    </div>
}

export default Node