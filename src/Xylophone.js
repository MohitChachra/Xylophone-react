import React, { useState } from 'react';
import notes from './assets/notes.js';
import './App.scss';

const NoteButton=(props)=>{
  return(
    <button
      className="note-button"
      style={{height:(200-(15*props.index))+'px'}}
      onClick={()=>{
    //  props.addPlayedNote(props.note);
      //console.log(props.playedNotes);
      new Audio(props.note.file).play();
      }}>
        {props.note.name}
    </button>
  )
}

function xylophone(){
  //const[playedNotes, setPlayedNotes] = useState([]);

  // const replayNotes = () => {
  //   playedNotes.map((note,index) => {
  //     window.setTimeout(() => new Audio(node.file).play(),500*index);
  //   });
  // }

  // const resetNotes = () =>{
  //   setPlayedNotes([]);
  // }

  // const addPlayedNote = (note) =>{
  //   setPlayedNotes([...playedNotes,note]);
  // }
  return(
    <div className="page">
      <h1>Xylophone</h1>
      <div className="xylophone">
        {notes.map((note,index)=>(
        <NoteButton
          index = {index}
        //  addPlayedNote={addPlayedNote}
          key={note.name}
          note={note}/>
          ))}
      </div>
      {/* {JSON.stringify(playedNotes)} */}
      {/* <button onClick={()=>replayNotes([])}>Replay</button> */}
      {/* <button onClick={()=>resetNotes([])}>Clear</button> */}
    </div>
  )
}








export default xylophone;
