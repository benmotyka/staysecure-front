import React from 'react'

import {ButtonStyled, Arrow} from "./Button.styles"

const Button = (props) => {
    return (
        <ButtonStyled onClick={props.onClick} full={props.full}>{props.text}{props.noArrow?'':<Arrow/>}</ButtonStyled>
    )
}

export default Button
