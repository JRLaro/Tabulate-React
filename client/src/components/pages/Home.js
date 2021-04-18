import React from 'react'
import NoteFilter from '../notes/NoteFilter'
import NoteForm from '../notes/NoteForm'
import Notes from '../notes/Notes'

function Home() {
    return (
        <div class='grid-2'>
            <div>
                <NoteFilter />
                <Notes /></div>
            <div><NoteForm /></div>
            
        </div>
    )
}

export default Home
