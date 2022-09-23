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

const Node = () => {


    return <div>
        
    </div>
}

export default Node