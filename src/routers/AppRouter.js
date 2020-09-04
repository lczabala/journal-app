import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/jornal/JournalScreen';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/auth" component={AuthRouter}/>
                <Route exact path="/" component={JournalScreen}/>
            </Switch>
        </Router>
    )
}
