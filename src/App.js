import React from "react"

import uuid from "react-uuid"

import Sidebar from "./Sidebar.js"

import Main from "./main.js"

export default function App(){

  const [notes , setNotes] = React.useState([])

  const [activeNote , setActiveNote] = React.useState(false);

  const addNote = () => {
    const newNote = {
      id: uuid(),
      title:"undefined",
      body:"",
      date:Date.now(),
    };
    setNotes([newNote , ...notes]); 
  };

  const deleteNote = (idToDelete ) => { 
    setNotes(notes.filter((note) => note.id !== idToDelete))
  }

  const onUpdateNotes = (data) => {
    console.log("updaet note : ", data);
    const updatedNoteArray = notes.map((note) => {
       if(note.id === activeNote){
          return data   
          } 
          return note
    })
    console.log("upadted note array : ",updatedNoteArray)
    setNotes(updatedNoteArray)
  }

  const getActiveNote = ( ) => {
    const activeNodeN = notes.find((note) => note.id === activeNote)
    return  activeNodeN

  } 
  return (
    <div className="app">

      <Sidebar 
      notes={notes} 
      addNote={addNote} 
      deleteNote={deleteNote} 
      activeNote={activeNote} 
      setActiveNote={setActiveNote}
       />

      <Main 
      activeNote={getActiveNote ()}
      onUpdateNotes={onUpdateNotes}
       />

    </div>
  )
}