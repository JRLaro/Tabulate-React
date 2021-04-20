import React, {useContext, useEffect} from 'react'
import AuthContext from '../../context/auth/authContext'
import NoteFilter from '../notes/NoteFilter'
import NoteForm from '../notes/NoteForm'
import Notes from '../notes/Notes'

function Home() {
const authContext = useContext(AuthContext)

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, [])
    
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
