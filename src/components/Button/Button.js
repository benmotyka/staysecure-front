import React from 'react'

import {ButtonStyled, Arrow, Plus} from "./Button.styles"

const Button = (props) => {
    return (
        <ButtonStyled onClick={props.onClick} full={props.full} green={props.green}>{props.text}{props.noArrow?'': props.plus ? <Plus/> : <Arrow/>}</ButtonStyled>
    )
}

export default Button
