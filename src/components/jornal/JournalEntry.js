import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture">

            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Título
                </p>
                <p className="journal__entry-content">
                    Data de prueba que luego se rellenará con inf
                </p>
                <div className="journal__entry-date">
                    05/09/2020
                </div>
            </div>  
        </div>
    )
}
