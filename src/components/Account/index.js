import React from 'react';
import { Route } from 'react-router-dom';
import Settings from './Settings'
import Profile from './Profile';

const Account = (props) => {

    const {
        userInfo,
        setInfo,
    } = props;

    console.log(props);

    return (
        <div>
            <Route
                path={`${props.match.url}/profile`}
                render={(props) => <Profile {...props} userInfo={userInfo}/>}
            />
            <Route
                path={`${props.match.url}/settings`}
                render={(props) => <Settings {...props}
                                             userInfo={userInfo}
                                             setInfo={setInfo}
                />}
            />
        </div>
    )
}

export default Account
