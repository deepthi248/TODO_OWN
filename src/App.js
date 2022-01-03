import './App.css';
import Header from './Components/Header';
import NoteList from './Components/NoteList';
import { useState, useEffect } from 'react';
import AddNote from './Components/AddNote';
import Note from './Components/Note';
import React from 'react'
import { uuid } from 'uuidv4'

function App() {
  const [notes, setNotes] = useState([])
  //create a key 
  const LOCAL_STORAGE_KEY = "NOTES"
  //RETRIEVING THE DATA 
  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)))
  }, [])

  //using Local storage -- EVERY TIME WHEN A NOTE IS ADDED THEN THIS IS INVOKED 
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes))
  }, [notes])



  const addDeletehandler = (id) => {
    console.log("came inside delet in app ", id)
    const newList = notes.filter((note) => { return note.id !== id })
    setNotes(newList)
  }

  const addNoteHandler = (note) => {
    if (note === "")
      return

    console.log("this is note", note)
    setNotes([...notes, { note }])

  }
  return (
    <div className="App">
      <Header />
      <AddNote addNoteHandler={addNoteHandler} />
      <NoteList notes={notes} getContactId={addDeletehandler} />
    </div>
  );
}

export default App;
