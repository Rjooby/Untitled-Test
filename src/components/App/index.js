import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Activities from '../Activities'
import Account from '../Account'
import NavigationBar from '../NavigationBar';

import logo from '../../logo.svg';
import './App.css';

function App(props) {
    const [userInfo, setUserInfo] = useState({firstName: null, lastName: null, email: null})
    const [isLoggedIn, setLoginStatus] = useState(false);

    //  Accordion statuses
    const [isAccordionOpen, setAccordion] = useState({activities: false, account: false })

    console.log(isAccordionOpen);

    return (
        <div className="App">
            <div className="header">
                <div className="logo">
                    <a href="/">BORED LOGO</a>
                </div>
            </div>
            <div className="body">
                <Router>
                    <NavigationBar
                        accordionStatus={isAccordionOpen}
                        setAccordionStatus={setAccordion}
                    />
                    <div className="appcontent">
                        <Switch>
                            <Route path="/activities" component={Activities} />
                            <Route path="/account" component={Account}></Route>
                        </Switch>
                    </div>
                </Router>

            </div>
        </div>
    );
}

export default App;
