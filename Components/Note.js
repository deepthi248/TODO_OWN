import React from 'react'

function Note(props) {

    const { note, id } = props
    console.log("insidfe the note", id);
    return (
        <div>
            <h2>{note}</h2>
            <button onClick={() => props.addDeletehandler(props.note.id)} >Delete Note</button>
        </div>
    )
}

export default Note
