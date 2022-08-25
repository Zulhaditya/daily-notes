import React from "react";
import NoteItemBody from "./NoteItemBody";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

export default function NoteItem({
  id,
  title,
  body,
  createdAt,
  onArchived,
  archived,
  onDelete,
}) {
  return (
    <div className="note-item">
      <NoteItemBody
        title={title}
        createdAt={createdAt}
        body={body}
        archived={archived}
      />
      <div className="note-item__action">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArchiveButton id={id} onArchived={onArchived} archived={archived} />
      </div>
    </div>
  );
}
