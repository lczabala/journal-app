import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {useDispatch} from 'react-redux';
import { login } from '../../actions/auth';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        email: 'email@gmail.com',
        password: '123'
    });

    const {email, password} = formValues;

    const handleLogin = (e) =>{
        e.preventDefault();

        //Se usa el dispatch para disparar la acción login, enviando el email y el password del usuario
        //Este dispatch va al store, allí se identiica el reducer a usar, al encontrar el reducer, dependiendo del tipo de acción, se ejecuta el payload y se actuliza en el stado
        dispatch(login(12345, 'Luis'));
    }

    return (
        <div>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={handleLogin}>
                <input 
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    autoComplete="none"
                />

                <input 
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
                <button
                    className="button__btn button__primary button__block"                    
                    type="submit"
                >
                    Login
                </button>
                <div className="auth__social-media">
                    <p>
                        Login with social media
                    </p>
                    <div 
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>

                <Link to="/auth/register" className="links">
                    Join us!
                </Link>                
            </form>
        </div>
    )
}
