import React from 'react';
import { JournalEntry } from './JournalEntry';

const entries = [1,2,3,4,5,6,7,8,9];

export const JournalEntries = () => {
    return (
        <div className="journal__entries">
            {
                entries.map( entry =>(
                    <JournalEntry key={entry}/>
                ))
            }
        </div>
    )
}
