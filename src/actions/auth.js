import { types } from "../types/types";
import {firebase, googleAuthProvider} from "../firebase/firebaseConfig";


//Esta función nos permite iniciar sesión con las credenciales que el usuario ingresa en la aplicación
//Esta función retorna un callback que ejecuta la petición asincrona para validar las credenciales ingresadas
export const startLoginWithEmailPassword = (email, password) => {
    return (dispatch) =>{
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user}) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName));
            });
    };
}

//Permitirá registrar al usuario en firebase, ingresando los datos suministrados
export const startRegisterWithEmailPassword = (name, email, password) =>{
    return (dispatch) =>{
        //Como los datos se guardaran en firebase, se debe usar este
        //El createUser sólo permite registrar con el email y password, pero tras devolver la promesa, al usuario se le puede actualizar el profile (displayName) con el nombre que nos interesa
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async({user}) =>{
                //Se actualiza en nombre del usuario
                await user.updateProfile({displayName: name});
                //Se realiza el login
                dispatch(login(user.uid, user.displayName));
            });
    };
}

export const startLoginWithGoogle = () =>{
    return(dispatch) =>{
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then( ({user}) =>{
                dispatch(login(user.uid, user.displayName));
            })
            .catch(e =>{
                console.log(e)
            })
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