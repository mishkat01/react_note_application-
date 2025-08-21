import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useFormState } from "react-dom";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [note, setNote] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  const changeTitleHandler = (e) => {
    setNoteTitle(e.target.value);
  };

  const submitHandler = (e) =>{
    e.preventDefault();
    if(noteTitle.trim() === ""){
      return alert('please submit a valid information');
    }

    const newNote = {
      id :  Date.now() + "",
      title : noteTitle ,
    }

    setNote([newNote,...note]);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={noteTitle} onChange={changeTitleHandler} />
        <button type="submit">Add notes</button>
      </form>

      <h2>All notes</h2>

      <ul>
        {note.map((note) => (
          <>
          <li key={note.id}>
            <span>{note.title}</span>
            <button>edit</button>
            <button>delete</button>
          </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default App;
