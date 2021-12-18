import { useEffect } from "react";
import DownloadedRansomwareDesktop from 'components/Desktop/DownloadedRansomwareDesktop.js'
const RansomwareRun = (props) => {
    useEffect(() => {
        props.setWaitForCorrectAnswer(true);
      }, []);

    return (
        <>
            <DownloadedRansomwareDesktop setWaitForCorrectAnswer={props.setWaitForCorrectAnswer}/>
        </>
    )
}

export default RansomwareRun
