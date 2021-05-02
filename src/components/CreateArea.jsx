import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';

function CreateArea(prop) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [expand, setExpand] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    prop.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content:""
    });
    setExpand(false);
  }

  function expandNote(){
    setExpand(true);
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          onClick={expandNote}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        {expand == true ? <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          /> : <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="1"
          value={note.content}
          />
        }
        
        <button onClick={submitNote}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
