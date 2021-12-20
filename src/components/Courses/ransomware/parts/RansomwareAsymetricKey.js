
import styled, { css } from "styled-components";
import colors from "constans/colors.js";
import {Key, BadUser, Arrow, Laptop, Lock, ContentBody, FlexCenterWrapper, ContainerOneItem, ItemsColumnWrapper, ColumnFixedWrapper, ItemDescription} from '../styles.js'



const RansomwareAsymetricKey = () => {
    return (
        <ContainerOneItem>
            <ColumnFixedWrapper>
            <FlexCenterWrapper>
            <ItemsColumnWrapper>
            <Key color="orange"/>
            <Key color="green"/>
            </ItemsColumnWrapper>
            <BadUser/>
            </FlexCenterWrapper>
            <ItemDescription>
            Atakujący jest w posiadaniu dwóch kluczy - prywatnego (zielonego) i publicznego (złotego)
            </ItemDescription>
            </ColumnFixedWrapper>
            <Arrow/>
            <ColumnFixedWrapper>
            <FlexCenterWrapper>
            <ContentBody>
            <Laptop/>
            <Lock style={{position: "absolute",  top: "40px", left: '50px'}}/>
            <Key style={{position: "absolute", left: "70px", top: "40px"}} color="orange"/>
            </ContentBody>
            </FlexCenterWrapper>
            <ItemDescription>
            Atakujący szyfruje dane na urządzeniu kluczem publicznym. Rozszyfrować te dane może jedynie klucz prywatny.
            </ItemDescription>
            </ColumnFixedWrapper>
        </ContainerOneItem>
    )
}

export default RansomwareAsymetricKey
