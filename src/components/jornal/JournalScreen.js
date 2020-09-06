import React from 'react'
import { Sidebar } from './Sidebar'
import { NothingSelected } from './NothingSelected'
import { NoteScreen } from '../notes/NoteScreen'

export const JournalScreen = () => {
    return (
        <div className="journal__main-counter">
            <Sidebar/>
            <main>
                <NoteScreen/>
                {/* <NothingSelected/>                */}
            </main>
        </div>
    )
}
