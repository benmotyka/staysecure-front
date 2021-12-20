
import {ContainerColumn, Wrapper, BadFile, GoodFile, Filter} from "../styles.js"

const RansomwareFilterEmail = () => {
    return (
        <ContainerColumn>
            <Wrapper>
                <BadFile x={25} y={60} z={15}/>
                <GoodFile x={35} y={66} z={35}/>
                <BadFile x={45} y={58} z={25}/>
                <GoodFile x={55} y={61} z={-15}/>
                <BadFile x={65} y={54} z={15}/>
                
                <BadFile x={30} y={33} z={-15}/>
                <GoodFile x={40} y={35} z={3}/>
                <BadFile x={50} y={31} z={-14}/>
                <GoodFile x={60} y={32} z={20}/>

                <GoodFile x={36} y={0} z={0}/>
                <BadFile x={45} y={0} z={15}/>
                <GoodFile x={53} y={0} z={-10}/>

            </Wrapper>
            <Filter/>
            <Wrapper>
                <GoodFile x={45} y={85} z={-30}/>
                <GoodFile x={40} y={60} z={-10}/>
                <GoodFile x={50} y={60} z={25}/>
                <GoodFile x={35} y={30} z={15}/>
                <GoodFile x={45} y={30} z={0}/>
                <GoodFile x={55} y={30} z={-22}/>
            </Wrapper>
        </ContainerColumn>
    )
}

export default RansomwareFilterEmail
