//Store del Redux, para el manejo de los reducers

import {createStore, combineReducers} from 'redux';
import { authReducer } from '../reducers/authReducer';

//El combineReducers nos permite listar los reducers que se tendrán en la aplicación.
//El createStore sólo puede recibir un reduser a la vez, sin el ambrgo, siempre se le puede enviar el combineReducer el cual tiene todos los reducesrs listados

//A medida que la app crezca, se agregarán los reducers acá
const reducers = combineReducers({
    auth: authReducer
});

export const store = createStore(
    reducers,
    //Nos permitirá utilizar las devtools de redux
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    
);