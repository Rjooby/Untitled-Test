import React from 'react';
import { Route } from 'react-router-dom';
import Settings from 'Settings'

const Account = (props) => {

    const {
        firstName,
        lastName,
        email
    } = props;

    console.log(props);

    return (
        <div>
            Settings
            <Route
                path={`${props.match.url}/profile`}
                render={(props) => <Profile {...props}/>}
            />
            <Route
                path={`${props.match.url}/settings`}
                component={<Settings {...props}/>}
            />
        </div>
    )
}

const Profile = (props) => {

    console.log('Profile', props);
    return (
        <div>
            PROFILE
        </div>
    )
}





export default Account
