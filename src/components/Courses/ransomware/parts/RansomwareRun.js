import { useEffect } from "react";
import DownloadedRansomwareDesktop from 'components/Desktop/DownloadedRansomwareDesktop.js'
import {DesktopContainer} from '../styles.js'

const RansomwareRun = (props) => {
    useEffect(() => {
        props.setWaitForCorrectAnswer(true);
      }, []);

    return (
        <DesktopContainer>
            <DownloadedRansomwareDesktop setWaitForCorrectAnswer={props.setWaitForCorrectAnswer}/>
        </DesktopContainer>
    )
}

export default RansomwareRun
