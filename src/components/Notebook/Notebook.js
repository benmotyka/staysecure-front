import {
  NotebookContainer,
  NotebookIcon,
  NotebookWrapper,
  NotebookHeaderContainer,
  NotebookHeader,
  NotebookBody,
  NotebookItem,
  NotebookIconContainer,
  NotebookShowItemContainer,
  NotebookItemContainer,
  NotebookShowItemText,
  NotebookShowItemClose,
  NotebookShowItemDelete,
  NotebookShowItemPart,
  NotebookActionsContainer,
} from "./Notebook.styles";
import { useState, useEffect } from "react";

import AddNewNote from "./AddNewNote/AddNewNote";
import DownloadNotes from "./DownloadNotes/DownloadNotes";
const Notebook = () => {

  useEffect(() => {
    const notes = JSON.parse(window.localStorage.getItem("notes"));
    if (notes) setNotes(notes)
  }, [])
  const MAX_NOTE_LENGTH = 60;
  const [notebookActive, setNotebookActive] = useState(false);
  const [notes, setNotes] = useState([]);
  const [showNoteText, setShowNoteText] = useState("");

  const downloadNotes = () => {
    let combinedNotes = "";
    notes.map((note) => {
      combinedNotes += note + "\n\n";
    });
    let element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(combinedNotes)
    );
    element.setAttribute(
      "download",
      `Staysecure Notatki ${new Date().toLocaleString("pl-PL")}.txt`
    );
    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const deleteNote = (noteToDelete) => {
    setNotes(notes.filter((note) => note !== noteToDelete));
    const currentNotes = JSON.parse(window.localStorage.getItem("notes"));
    window.localStorage.setItem("notes", JSON.stringify(currentNotes.filter(note => note !== noteToDelete)));
    setShowNoteText("");
  };
  return (
    <NotebookContainer>
      <NotebookIconContainer
        active={notebookActive}
        onClick={() => {
          setNotebookActive(!notebookActive);
        }}
      >
        <NotebookIcon />
      </NotebookIconContainer>
      <NotebookWrapper active={notebookActive}>
        <NotebookHeaderContainer>
          <NotebookHeader>Notatki</NotebookHeader>
        </NotebookHeaderContainer>
        <NotebookBody>
          {notes.map((note, key) => (
            <NotebookItemContainer key={key}>
              <NotebookItem
                onClick={() => {
                  setShowNoteText(note);
                }}
              >
                {note.substring(0, MAX_NOTE_LENGTH)}{" "}
                {note.length > MAX_NOTE_LENGTH ? "..." : ""}
              </NotebookItem>
            </NotebookItemContainer>
          ))}
          
            <NotebookShowItemContainer active={showNoteText.length}>
              {showNoteText.length ? (
              <>
              <NotebookShowItemPart>
                <NotebookShowItemClose
                  onClick={() => {
                    setShowNoteText("");
                  }}
                />
              </NotebookShowItemPart>
              <NotebookShowItemPart>
                <NotebookShowItemText>{showNoteText}</NotebookShowItemText>
              </NotebookShowItemPart>
              <NotebookShowItemPart>
                <NotebookShowItemDelete
                  onClick={() => {
                    deleteNote(showNoteText);
                  }}
                />
              </NotebookShowItemPart>
              </>
              ) : ""}
            </NotebookShowItemContainer>
        </NotebookBody>
        <NotebookActionsContainer>
        <AddNewNote notes={notes} setNotes={setNotes} />
        <DownloadNotes onClick={downloadNotes}></DownloadNotes>
        </NotebookActionsContainer>
      </NotebookWrapper>
    </NotebookContainer>
  );
};

export default Notebook;
