import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <div>
            <h3 className="auth__title">Login</h3>
            <form>
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
