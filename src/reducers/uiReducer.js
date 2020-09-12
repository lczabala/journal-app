import { types } from "../types/types";

//Este reducer nos permitirá mostrar el error al momento de ingresar los campos en el formulario de registro
//Podremos mostrar y ocultar el error

//Este siempre será el valor del estado inicial
const initialState = {
    loading: false,
    msgError: null
}

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.uiSetError:
           return{
               ...state,
               msgError: action.payload
           }; 

        case types.uiRemoveError:
            return{
                ...state,
                msgError: null
            };  
    
        default:
            return state;
    }
}
