import React from 'react'
import { useState } from 'react';

function AddNote(props) {
    const [note, setNote] = useState()

    const Add = (e) => {
        e.preventDefault();
        console.log("inAdd", note)
        props.addNoteHandler(note);
        setNote("")
    }
    return (
        <div>
            <form onSubmit={Add}>
                <input value={note}
                    onChange={(event) => {
                        setNote(event.target.value)

                    }} />
                <button>AddtoDO</button>
            </form>
        </div>
    )
}

export default AddNote
