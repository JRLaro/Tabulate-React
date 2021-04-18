import React from 'react'
import NoteForm from '../notes/NoteForm'
import Notes from '../notes/Notes'

function Home() {
    return (
        <div class='grid-2'>
            <div><Notes /></div>
            <div><NoteForm /></div>
            
        </div>
    )
}

export default Home
