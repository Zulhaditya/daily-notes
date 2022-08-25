import React from "react";

export default function NoteSearch({ searchTitle, onSearch }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari"
        value={searchTitle}
        onChange={onSearch}
      />
    </div>
  );
}
