import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui';
import { startRegisterWithEmailPassword } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const {msgError} = useSelector(state => state.ui);
    
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const {name, email, password, confirmPassword} = formValues;

    const handleRegister = (e) =>{
        e.preventDefault();  
        
        if (isFormValid()) {
            //Se hace el dispatch usando la función para crear el usuario el firebase
            dispatch(startRegisterWithEmailPassword(name, email, password));
        } 
    }

    const isFormValid = () => {
        if (validator.isEmpty(name)) {
            dispatch(setError("Name is required"));            
            return false
        }else if (!validator.isEmail(email)) {            
            dispatch(setError("Email is required"));
            return false
        }else if (validator.isLength(password, {min:0, max: 6})) {
            dispatch(setError("Password should be at last 6 characters"));
            return false        
        }else if (password.trim() !== confirmPassword.trim()) {
            dispatch(setError("Password must be the same"));
            return false
        }

        dispatch(removeError());
        return true
    }

    return (
        <div>
            {
                (msgError !== null)
                    &&<div className="auth__alert-error">{msgError}</div>
            }

            <h3 className="auth__title">Create Account</h3>
            <form onSubmit={handleRegister}>
                <input 
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    autoComplete="none"
                />
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
                <input 
                    className="auth__input"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword} 
                    onChange={handleInputChange}

                />
                <button
                    className="button__btn button__primary button__block mb-5"                    
                    type="submit"
                >
                    Join us!
                </button>                

                <Link to="/auth/login" className="links">
                    Alredy register?
                </Link>                
            </form>
        </div>
    )
}
