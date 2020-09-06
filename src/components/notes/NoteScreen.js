import React from 'react'
import { NoteAppBar } from './NoteAppBar'

export const NoteScreen = () => {
    return (
        <div className="note__main-content">
            <NoteAppBar/>

            <div className="note__content">
                <form>
                    <input type="text" placeholder="Title" className="note__input note__title-input"/>
                    <textarea placeholder="What happend today?" className="note__input note__textarea"/>
                </form>
            </div>

            <div className="note__image">
                <img src="https://cdn.pixabay.com/photo/2016/11/29/04/13/architecture-1867262_960_720.jpg" alt="image"/>
            </div>
        </div>
    )
}
