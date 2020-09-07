import React from 'react';
import {Provider} from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

//El Provider nos permitirá compartir el store desde JournalApp, haciéndolo disponible y accesible desde toda la app
export const JournalApp = () => {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    )
}
