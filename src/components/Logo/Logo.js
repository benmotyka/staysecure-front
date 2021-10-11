import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoContainer = styled(Link)`
cursor: pointer;
`
const LogoImage = styled.img``
const Logo = () => {
    return (
        <LogoContainer to="/">
            <LogoImage src="logo.svg"/>
        </LogoContainer>
    )
}

export default Logo
