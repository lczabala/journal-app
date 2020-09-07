//Se crea el reducer para meanejar el login del usuario

//Se manejaran dos datos para el usuario, el uid y el name

import { types } from "../types/types";

export const authReducer = (state = {}, action) =>{
    switch (action.type) {
        //Al hacer login, se toma del actión los valores del uid y el name del usuario
        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.name
            };
        case types.logout:
            //Al hacer logout, se devuelve el objeto vacío
            return{
                
            };    
    
        default:
            return state;
    }
}