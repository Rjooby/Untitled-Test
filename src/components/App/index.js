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

    const history = createBrowserHistory();

    const [userInfo, setUserInfo] = useState(defaultUserState);
    const [isLoggedIn, setLoginStatus] = useState(false);
    const [isAccordionOpen, setAccordion] = useState({activities: false, account: false })

    const onLogin = (email) => {
        const newUser = {
            ...userInfo,
            email: email,
        };

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
                    <div>Hello</div>
                </div>
                <div>
                    <label htmlFor="logout">
                        <button name="logout" onClick={() => onLogout()}>Log Out</button>
                    </label>
                </div>
            </div>
            <div className="body">
                <Router history={history}>
                    <NavigationBar
                        {...props}
                        accordionStatus={isAccordionOpen}
                        setAccordionStatus={setAccordion}
                    />
                    <div className="app-content">
                        <Switch>
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
                            <Route path="/" render={() => <div>Whatever I want</div>}/>

                        </Switch>
                    </div>
                </Router>

            </div>
        </div>
    );
}

export default App;
