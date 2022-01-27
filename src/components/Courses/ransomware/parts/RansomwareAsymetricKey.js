import { useTranslation } from "react-i18next";

import {Key, BadUser, Arrow, Laptop, Lock, ContentBody, FlexCenterWrapper, ContainerOneItem, ItemsColumnWrapper, ColumnFixedWrapper, ItemDescription} from '../styles.js'



const RansomwareAsymetricKey = () => {
  const {t} = useTranslation()

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
            {t('courses.ransomware.rceDescription')}
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
            {t('courses.ransomware.attackerOwnKeys')}
            </ItemDescription>
            </ColumnFixedWrapper>
        </ContainerOneItem>
    )
}

export default RansomwareAsymetricKey
