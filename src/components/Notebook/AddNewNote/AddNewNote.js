import { useState } from "react";
import {
  AddNewNoteContainer,
  AddNewNoteButtonWrapper,
  Text,
  AddIcon,
  NoteContainer,
  NoteText,
  NoteButtonsContainer,
} from "./AddNewNote.styles";
import Button from "components/Button/Button";

const AddNewNote = (props) => {
  const [newNoteActive, setNewNoteActive] = useState(false);
  const [noteText, setNoteText] = useState("");

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
    setNoteText("");
    setNewNoteActive(false);
  };
  return (
    <AddNewNoteContainer>
      <AddNewNoteButtonWrapper
        onClick={() => {
          setNewNoteActive(!newNoteActive);
        }}
      >
        <Text>Dodaj notatkę</Text>
        <AddIcon />
      </AddNewNoteButtonWrapper>
      <NoteContainer active={newNoteActive}>
        {newNoteActive && (
          <>
            <NoteText
              placeholder="Wpisz notatkę..."
              onChange={(e) => setNoteText(e.target.value)}
            />
            <NoteButtonsContainer>
              <Button noArrow onClick={addNote} text="Dodaj" />
              <Button noArrow onClick={discardNote} text="Anuluj" />
            </NoteButtonsContainer>
          </>
        )}
      </NoteContainer>
    </AddNewNoteContainer>
  );
};

export default AddNewNote;
