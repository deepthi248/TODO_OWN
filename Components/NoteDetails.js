import React from 'react'

function NoteDetails(props) {
    console.log(props
        , "inside the props og the note")
    const deletHandler = () => {
        console.log(props.id, "inside the notedetails deletion");
        return props.addDeletHandler(props.id);
    }
    const editHandler = () => {
        return props.editHandler(props.id);
    }
    return (
        <div>
            <h2>{props.Note}</h2>
            <button onClick={deletHandler}>Dlete Note</button>
            <button onClick={editHandler}>Edit Note</button>
        </div>
    )
}

export default NoteDetails
