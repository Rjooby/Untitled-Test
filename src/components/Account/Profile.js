import React from 'react';

const Profile = (props) => {
    console.log(props);
    const {
        userInfo,
    } = props;

    const { firstName, lastName, email } = userInfo;
    return (
        <div>
            <ul>
                <li>First Name: {firstName} </li>
                <li>Last Name: {lastName}</li>
                <li>Email: {email} </li>
            </ul>


        </div>
    )
}

export default Profile;
