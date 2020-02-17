import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Activities from '../Activities'
import Account from '../Account'
import NavigationBar from '../NavigationBar';
import { createBrowserHistory } from 'history';

import logo from '../../logo.svg';
import './App.css';

function App(props) {
    const defaultUserState = {firstName: null, lastName: null, email: null};

    const [userInfo, setUserInfo] = useState(defaultUserState);
    const [isLoggedIn, setLoginStatus] = useState(false);
    const [isAccordionOpen, setAccordion] = useState({activities: false, account: false })

    const onLogin = (email) => {

        const newUser = {
            ...userInfo,
            email: email,
        };

        console.log(newUser);
        setUserInfo(newUser);
        setLoginStatus(true);
    }

    const onLogout = () => {
        setUserInfo(defaultUserState);
        setLoginStatus(false);
    }

    return (
        <div className="App">
            <div className="header">
                <div className="logo">
                    <a href="/Untitled-Test">BORED LOGO</a>
                </div>
                <div>
                    <button onClick={() => onLogout()}>Log Out</button>
                </div>
            </div>
            <div className="body">
                <Router>
                    <NavigationBar
                        {...props}
                        accordionStatus={isAccordionOpen}
                        setAccordionStatus={setAccordion}
                    />
                    <div className="app-content">
                        <Switch>
                            <Route exact path="/Untitled-Test" render={() => <div>Whatever I want</div>}/>
                            <Route path="/Untitled-Test/activities" component={Activities} />
                            <Route path="/Untitled-Test/account"
                                   render={(props) =>(
                                       <Account {...props}
                                                isLoggedIn={isLoggedIn}
                                                onLogin={onLogin}
                                                userInfo={userInfo}
                                                setInfo={setUserInfo}
                                       />
                                   )}
                            />
                        </Switch>
                    </div>
                </Router>

            </div>
        </div>
    );
}

export default App;
