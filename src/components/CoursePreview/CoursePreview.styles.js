import styled, {css} from "styled-components";
import colors from "constans/colors"
import { RateLevel as Rate, EmptyRateLevel as EmptyRate } from "components/PreviewItems/Previews/Previews.styles";

export const Container = styled.div`
display: grid;
grid-template-columns: 65% 35%;
grid-template-rows: 1fr;
width: 60%;
height: 90%;
padding: 50px 35px;
box-sizing: border-box;
background-color: ${colors.mediumDarkPurple};
`

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`

export const ContentHeaderWrapper = styled.div`
width: 85%;
`

export const Header = styled.h2`
margin: 0;
color: ${colors.orange};
font-size: 42px;
opacity: 0.9;
`

export const Description = styled.p`
font-size: 16px;
color: ${colors.white};
opacity: 0.7;
`

export const CourseTitlesWrapper = styled.ul`
padding-left: 25px;
`

export const CourseTitle = styled.li`
color: ${colors.white};
font-size: 16px;
opacity: 0.7;
`

export const ReviewWrapper = styled.div`
display: flex;
flex-direction: column;
height: 100%;
`

export const RateWrapper = styled.div`
margin: 0;
display: grid;
grid-template-columns: repeat(5, 1fr);
text-align: center;
`

export const CommentsContainer = styled.div`
margin: 20px 0 0 0;
height: 100%;
background-color: ${colors.darkPurple};
`

export const CommentsWrapper = styled.ul`
list-style: none;
padding: 0;
overflow-y: auto;
height: 100%;
`

export const Comment = styled.li`
width: 100%;
border: 1px solid ${colors.darkestPurple};
box-sizing: border-box;
font-size: 14px;
color: ${colors.white};
opacity: 0.7;
border-top: none;
`

export const CommentsHeader = styled.h4`
width: 100%;
font-size: 24px;
text-align: center;
background-color: ${colors.darkestPurple};
color: ${colors.orange};
padding: 10px 0;
margin: 0;
`

export const ButtonWrapper = styled.div`
margin: auto auto 0;
`

const Star = css`
font-size: 50px;
`

export const RateLevel = styled(Rate)`
${Star};
`
export const EmptyRateLevel = styled(EmptyRate)`
${Star};
`

const GoldText = css`
opacity: 0.6;
color: ${colors.gold};
text-align: center;

`

export const RateDescription = styled.h4`
${GoldText};
font-size: 24px;
margin: 0;
`

export const RateSubDescription = styled.p`
${GoldText};
font-size: 12px;
margin: 0;
`