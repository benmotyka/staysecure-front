import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import colors from "constans/colors"

const header = styled.h1`
font-size: 52px;
color: red;
`
const WhatIsSql = (props) => {

    useEffect(() => {
        props.setWaitForCorrectAnswer(true)
    },[])
    const [test, setTest] = useState(false)
    const changestate = () => {
        props.setWaitForCorrectAnswer(false)
        console.log("lul")
    }
    return (
        <div>
<h1>Test</h1>
<input></input>
<p>{props.test}</p>
<p onClick={changestate}>lol</p>
        </div>
    )
}

export default WhatIsSql
