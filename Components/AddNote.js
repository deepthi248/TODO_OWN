import React, { useState } from 'react'

function AddNote(props) {
    //state 
    const [note, setNote] = useState('');
    const Add = (event) => {
        event.preventDefault();
        if (note !== "")
            props.addNote(note);
        setNote("")
    }
    return (
        <div>
            <form onSubmit={Add}>
                <input value={note}
                    placeholder='enter note'
                    onChange={event => setNote(event.target.value)} />
                <button>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
