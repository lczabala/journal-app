import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleLogout = () =>{
        dispatch(startLogout());
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="">
                    <i className="far fa-smile-beam"></i>
                    <span> ¡Hola, Luis!</span>
                </h3>
                <button 
                    className="button__btn button__primary button__logout"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div> 

            <button className="button__btn button__primary mt-5">
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-1">
                    New entry
                </p>
            </button> 

            <JournalEntries/>          
        </aside>
    )
}
