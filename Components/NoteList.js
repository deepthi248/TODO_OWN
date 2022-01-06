import { ConnectingAirportsOutlined } from '@mui/icons-material'
import React from 'react'
import NoteDetails from './NoteDetails'
function NoteList(props) {
    const notes = props.Notes
    console.log("in the noteList and printing props", notes)
    const addDeletHandler = (id) => { console.log('inside the notelist delet handler', id); props.addDeletHandler(id) }
    return (

        <div>
            {
                notes.map((note, index) => < NoteDetails key={index} id={index} Note={note} addDeletHandler={addDeletHandler} />
                )
            }
        </div>
    )
}

export default NoteList

