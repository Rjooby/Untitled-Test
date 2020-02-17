import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import Settings from './Settings'
import Profile from './Profile';

const Account = (props) => {

    const {
        userInfo,
        setInfo,
        isLoggedIn,
        onLogin,
    } = props;

    console.log(props);

    const [signInEmail, setEmail] = useState(null);

    const onSignIn = (e) => {
        e.preventDefault();
        onLogin(signInEmail);
    }

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    if (!isLoggedIn) {

        return (
            <div>
                You gotta sign in
                <form className="signin-form" onSubmit={onSignIn}>
                    <input type="email" onChange={handleChange}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }

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
