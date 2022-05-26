import { useState } from "react";
import {
  AddNewNoteContainer,
  AddNewNoteButtonWrapper,
  Text,
  AddIcon,
  NoteContainer,
  NoteButtonsContainer,
} from "./AddNewNote.styles";
import Button from "components/Button/Button";
import { useTranslation } from "react-i18next";
import FadeIn from "components/FadeIn/FadeIn";
import BasicTextarea from "components/BasicTextarea/BasicTextarea";

const AddNewNote = (props) => {
  const [newNoteActive, setNewNoteActive] = useState(false);
  const [noteText, setNoteText] = useState("");
  const {t} = useTranslation()

  const addNote = () => {
    if (!noteText) return;
    if (props.notes.includes(noteText)) return;
    props.setNotes((oldNotes) => [...oldNotes, noteText]);
    discardNote();

    const currentNotes = JSON.parse(window.localStorage.getItem("notes"));
    const noteToSave = currentNotes ?  [...currentNotes, noteText] : [noteText]
    window.localStorage.setItem("notes", JSON.stringify(noteToSave));
  };

  const discardNote = () => {
    setNewNoteActive(false)
    setNoteText("");
  };
  return (
    <AddNewNoteContainer>
      <AddNewNoteButtonWrapper
      data-testid="notebook__add_note"
        onClick={() => {
          setNewNoteActive(!newNoteActive);
        }}
      >
        <Text>{t('addNote')}</Text>
        <AddIcon />
      </AddNewNoteButtonWrapper>
      <FadeIn in={newNoteActive}>
      <NoteContainer
      data-testid="notebook__new_note_wrapper"
      active={newNoteActive}>
          <>
            <BasicTextarea
              spellCheck="false"
              placeholder={t('enterNote')}
              onChange={(e) => setNoteText(e.target.value)}
              value={noteText}
            />
            <NoteButtonsContainer>
              <Button small noArrow onClick={addNote} text={t('add')} />
              <Button small noArrow onClick={discardNote} text={t('cancel')} />
            </NoteButtonsContainer>
          </>
      </NoteContainer>
      </FadeIn>
    </AddNewNoteContainer>
  );
};

export default AddNewNote;
