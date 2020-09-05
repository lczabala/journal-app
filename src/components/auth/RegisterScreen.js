import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <div>
            <h3 className="auth__title">Create Account</h3>
            <form>
                <input 
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="none"
                />
                <input 
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="none"
                />
                <input 
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                />
                <input 
                    className="auth__input"
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmpassword"
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
