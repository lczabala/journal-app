import React from 'react'

export const NoteAppBar = () => {
    return (
        <div className="note__appbar">
            <span>06/09/2020</span>
            <div>
                <button className="button__btn button__picture mr-1">
                    Picture
                </button>
                <button className="button__btn button__primary button__save mr-1">
                    Save
                </button>
            </div>
        </div>
    )
}
