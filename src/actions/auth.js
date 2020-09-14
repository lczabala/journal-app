import { types } from "../types/types";
import {firebase, googleAuthProvider} from "../firebase/firebaseConfig";
import { startLoading, finishtLoading } from "./ui";


//Esta función nos permite iniciar sesión con las credenciales que el usuario ingresa en la aplicación
//Esta función retorna un callback que ejecuta la petición asincrona para validar las credenciales ingresadas
export const startLoginWithEmailPassword = (email, password) => {
    return (dispatch) =>{
        dispatch(startLoading());            

        setTimeout(() => {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then( ({user}) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName));

                dispatch(finishtLoading()); 
            })
            .catch(e=>{
                console.log(e);
                dispatch(finishtLoading()); 
            })
        }, 50000);
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

//Función para iniciar el logout
export const startLogout = () =>{
    return async(dispatch) =>{
        //Se llama a la función de firebase responsable de ejecutar la acción del logout
        await firebase.auth().signOut();
        //Al ejecutarse el logout en fasebase, se realiza el dispatch para actualizar el estado
        dispatch(logout());
    }
}

//Permite ejecutar la acción para quitar al usuario logueado
export const logout = () => {
    return{
        type: types.logout
    };
}