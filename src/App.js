import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useFormState } from 'react-dom';

function App() {

  const  [noteTitle,setNoteTitle]=useState('');
  const  [note,setNote]    =useState([]);
  const  [editMode,setEditMode] =useState(false);
  const  [editablenote,setEditableNote] = useState(null);


  

 
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
