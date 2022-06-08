import { useTranslation } from "react-i18next";
import {DownloadNotesContainer, Text, DownloadIcon} from "./DownloadNotes.styles"

const DownloadNotes = (props) => {
  const { t } = useTranslation()

    return (
    <DownloadNotesContainer onClick={props.onClick}>
            <Text>{t('downloadNotes')}</Text>
            <DownloadIcon/>
    </DownloadNotesContainer>
    )
};

export default DownloadNotes;
