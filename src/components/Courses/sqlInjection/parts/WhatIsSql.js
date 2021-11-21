import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import colors from "constans/colors"

const Header = styled.h1`
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
    }
    return (
        <div>
            <Header>lmaoo</Header>
<h1>Test raz dwa trzy sql injection</h1>
<input></input>
<p>{props.test}</p>
<p onClick={changestate}>lol</p>
        </div>
    )
}

export default WhatIsSql
