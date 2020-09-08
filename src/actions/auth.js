import { types } from "../types/types";
import {firebase, googleAuthProvider} from "../firebase/firebaseConfig";


//Esta función nos permite iniciar sesión con las credenciales que el usuario ingresa en la aplicación
//Esta función retorna un callback que ejecuta la petición asincrona para validar las credenciales ingresadas
export const startLoginWithEmailPassword = (email, password) => {
    return (dispatch) =>{
        setTimeout(() => {
            dispatch(login(email, password));
        }, 3500);
    };
}

export const startLoginWithGoogle = () =>{
    return(dispatch) =>{
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( ({user}) =>{
                dispatch(login(user.uid, user.displayName));
            });
    };
}

export const login = (uid, name) => {
    return{
        type: types.login,
        payload: {
            uid,
            name
        }
    };
}