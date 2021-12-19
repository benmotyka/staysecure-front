import EncryptedRansomwareDesktop from 'components/Desktop/EncryptedRansomwareDesktop'
import { useEffect } from "react";
import {DesktopContainer} from '../styles.js'

const RansomwareEncrypted = (props) => {
  useEffect(() => {
    props.setWaitForCorrectAnswer(true);
  }, []);
    return (
        <DesktopContainer>
          <EncryptedRansomwareDesktop setWaitForCorrectAnswer={props.setWaitForCorrectAnswer}/>
        </DesktopContainer>
    )
}

export default RansomwareEncrypted
