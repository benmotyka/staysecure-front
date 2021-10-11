import React from 'react'

import {ButtonStyled, Arrow} from "./Button.styles"

const Button = (props) => {
    return (
        <ButtonStyled>{props.text}<Arrow/></ButtonStyled>
    )
}

export default Button
