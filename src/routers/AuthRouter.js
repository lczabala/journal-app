import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__main-2">
                <img className="auth__main-2-img" src={`../assets/LoginImage.png`} alt="Image"/>
            </div>
            <div className="auth__main-1">
                
                <div className="auth__box-container">
                    <Switch>
                        <Route exact path="/auth/login" component={LoginScreen}/>
                        <Route exact path="/auth/register" component={RegisterScreen}/>
                        <Redirect to="/auth/login"/>
                    </Switch>
                </div>            
            </div>    
        </div>
            
    )
}
