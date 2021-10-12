import {DownloadNotesContainer, Text, DownloadIcon} from "./DownloadNotes.styles"

const DownloadNotes = (props) => {
    return (
    <DownloadNotesContainer onClick={props.onClick}>
            <Text>Pobierz notatki</Text>
            <DownloadIcon/>
    </DownloadNotesContainer>
    )
};

export default DownloadNotes;
