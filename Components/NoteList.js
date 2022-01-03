import React from 'react'
import Note from './Note'
import { uuid } from 'uuidv4'

function NoteList(props) {
    const { notes } = props
    console.log(props)
    const getContactId = (id) => {
        console.log('got inside the getcontact in notelist', id)
        props.getContactId(id)
    }
    return (
        <div>
            {

                notes.map((note) => {
                    console.log("inside the note list comp", id)
                    return (<Note note={note} key={id} addDeletehandler={getContactId} />)

                })
            }
        </div >
    )
}

export default NoteList
