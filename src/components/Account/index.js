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

    const [signInEmail, setEmail] = useState(null);

    const onSignIn = (e) => {
        e.preventDefault();
        onLogin(signInEmail);
    }

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    //  Should ideally be extracted into its own authentication component and
    //  rendered whenever needing auth with redirect parameters preserved in URL
    if (!isLoggedIn) {
        return (
            <div>
                You gotta sign in
                <form className="signin-form" onSubmit={onSignIn}>

                    <label htmlFor="emailSignin">
                        Email:
                        <input type="email" name="emailSignin" onChange={handleChange}/>
                    </label>
                    <label htmlFor="signIn">
                        <input type="submit" name="signIn" value="Submit"/>
                    </label>
                </form>
            </div>
        )
    }
    //

    return (
        <div>
            <Route
                exact
                path={`${props.match.url}/profile`}
                render={(props) => <Profile {...props} userInfo={userInfo}/>}
            />
            <Route
                exact
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
