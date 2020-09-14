import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/jornal/JournalScreen';
import {firebase} from "../firebase/firebaseConfig";
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { Loader } from '../components/jornal/Loader';

export const AppRouter = () => {

    //Este estado va aestar chequeando el login del usuario
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const dispatch = useDispatch();

    //Mantiene al usuario logueado
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) =>{
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setisLoggedIn(true);
            }else{
                setisLoggedIn(false);
            }
            //Cambio el estado del checking para quitar el loader una vez que se autentica el usuario
            setChecking(false);
        });
    }, [dispatch, setChecking, setisLoggedIn]);

    //Mientras que el usuario se loguea y firebase responde, el loader se verá
    if (checking) {
        return(
            <Loader/>       
        );
    }

    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth" 
                        component={
                            () => (
                                (!isLoggedIn)
                                    ? (<AuthRouter/>)
                                    : (<Redirect to="/"/>)
                            )
                    }/>
                    <Route 
                        exact path="/" 
                        component={
                            () => (
                                (isLoggedIn)
                                    ? (<JournalScreen/>)
                                    : (<Redirect to="/auth/login"/>)
                            )
                        }
                    />
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>            
        </Router>
    )
}
