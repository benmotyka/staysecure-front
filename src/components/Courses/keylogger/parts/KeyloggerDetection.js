import { useEffect } from "react";
import {DesktopContainer} from 'components/Courses/ransomware/styles.js'
import KeyloggerDetectDesktop from 'components/Desktop/KeyloggerDetectDesktop.js'

const KeyloggerDetection = (props) => {
    useEffect(() => {
        props.setWaitForCorrectAnswer(true);
      }, []);
    return (
        <DesktopContainer>
            <KeyloggerDetectDesktop setWaitForCorrectAnswer={props.setWaitForCorrectAnswer}/>
        </DesktopContainer>
    )
}

export default KeyloggerDetection
