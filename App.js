import './App.css';
import Header from './Components/Header';
import React, { useState, useEffect } from 'react'
import AddNote from './Components/AddNote'
import NoteList from './Components/NoteList'
function App() {
  const [notes, setNotes] = useState(['a']); //empty array
  const local_key = "notes"
  const addNoteHandler = (note) => {
    setNotes([...notes, note])
  }
  const addDeletHandler = (id_from) => {
    console.log('inside app deletehandler', id_from)
    const newList = notes.filter((note, id) => {
      return id !== id_from
    }
    )
    setNotes(newList)
  }
  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem(local_key)))
  }, [])

  //using Local storage -- EVERY TIME WHEN A NOTE IS ADDED THEN THIS IS INVOKED 
  useEffect(() => {
    localStorage.setItem(local_key, JSON.stringify(notes))
  }, [notes])

  return (
    <div className="App">
      <Header />
      <AddNote addNote={addNoteHandler} />
      <NoteList Notes={notes} addDeletHandler={addDeletHandler} />
    </div>
  );
}

export default App;
