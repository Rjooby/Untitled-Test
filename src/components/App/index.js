import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Activities from '../Activities'
import Account from '../Account'
import NavigationBar from '../NavigationBar';
import { createBrowserHistory } from 'history';

import logo from '../../logo.svg';
import './App.css';

function App(props) {
    const [userInfo, setUserInfo] = useState({firstName: null, lastName: null, email: null})
    const [isLoggedIn, setLoginStatus] = useState(false);
    const [isAccordionOpen, setAccordion] = useState({activities: false, account: false })

    const history = createBrowserHistory();
    console.log(history);

    return (
        <div className="App">
            <div className="header">
                <div className="logo">
                    <a href="/Untitled-Test">BORED LOGO</a>
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
                            <Route path="/Untitled-Test/activities" component={Activities} />
                            <Route path="/Untitled-Test/account"
                                   render={(props) =>(
                                       <Account {...props}
                                                isLoggedIn={isLoggedIn}
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
