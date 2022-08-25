import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
      chars_left: 50,
      max_chars: 50,
    };

    // bind
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    const charCount = event.target.value.length;
    const maxChar = this.state.max_chars;
    const charLength = maxChar - charCount;

    this.setState(() => {
      return {
        title: event.target.value,
        chars_left: charLength,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h2 className="note-input__title">Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          Sisa karakter : {this.state.chars_left}
        </p>
        <input
          type="text"
          placeholder="Judul"
          value={this.state.title}
          maxLength={this.state.max_chars}
          onChange={this.onTitleChangeEventHandler}
        />
        <textarea
          required
          className="note-input__body"
          placeholder="Catatan"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
        />
        <button type="submit">Tambah</button>
      </form>
    );
  }
}

export default NoteInput;
