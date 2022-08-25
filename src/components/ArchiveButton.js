import React from "react";

export default function ArchiveButton({ id, onArchived }) {
  return (
    <button
      className="note-item__archive-button"
      onClick={() => onArchived(id)}
    >
      Pindahkan
    </button>
  );
}
