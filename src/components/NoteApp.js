import React from "react";
import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import NoteSearch from "./NoteSearch";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      search: "",
    };

    // bind
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
    console.log("Catatan dihapus!");
  }

  onArchivedHandler(id) {
    const updateNotes = [...this.state.notes];
    const noteIndex = updateNotes.findIndex((note) => note.id === id);
    if (updateNotes[noteIndex].archived === true) {
      updateNotes[noteIndex].archived = false;
    } else {
      updateNotes[noteIndex].archived = true;
    }
    this.setState({ notes: updateNotes });
  }

  onAddNoteHandler({ title, body }) {
    let date = new Date().toISOString();
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: date,
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    const search = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.search.toLowerCase())
    );
    const activeNotes = search.filter((note) => {
      return note.archived === false;
    });

    const archivedNotes = search.filter((note) => {
      return note.archived === true;
    });
    return (
      <>
        <div className="note-app__header">
          <h1>Notes</h1>
          <NoteSearch onSearch={this.onSearchHandler} />
        </div>
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />
          <h2>Catatan Aktif</h2>
          <NoteList
            notes={activeNotes}
            onDelete={this.onDeleteHandler}
            onArchived={this.onArchivedHandler}
          />
          <h2>Arsip</h2>
          <NoteList
            notes={archivedNotes}
            onDelete={this.onDeleteHandler}
            onArchived={this.onArchivedHandler}
          />
        </div>
      </>
    );
  }
}

export default NoteApp;
