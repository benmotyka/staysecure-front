import React from 'react'

import {ButtonStyled, Arrow, Plus} from "./Button.styles"

const Button = (props) => {
    return (
        <ButtonStyled  disabled={props.disabled} onClick={props.onClick} full={props.full} green={props.green} small={props.small}>{props.text}{props.noArrow?'': props.plus ? <Plus/> : <Arrow/>}</ButtonStyled>
    )
}

export default Button
