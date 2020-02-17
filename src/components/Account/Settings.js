import React, { useState, useEffect } from 'react';
import "./Account.css";


const Settings = (props) => {

    const { userInfo, setInfo } = props;

    const {
        firstName, lastName, email
    } = userInfo;

    const [formValues, setFormValues] = useState({
        firstName: null,
        lastName: null,
        email: null,
    })

    // useEffect(() => {
    //     if (userInfo) {
    //
    //     }
    // }, [])
    //

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        setInfo(formValues);
    }

    const handleChange = (e) => {
        const newState = {
            ...formValues,
            [e.target.name]: e.target.value,
        }

        setFormValues(newState);
    }

    return (
        <div className="form-container">
            <form className="user-form" onSubmit={handleSubmit}>
                <label htmlFor="firstNameInput">First Name</label>
                <input
                    id="firstNameInput"
                    type="text"
                    name="firstName"
                    placeholder={firstName}
                    aria-label="First Name"
                    onChange={handleChange}
                    // aria-required={true}
                />

                <label htmlFor="lastNameInput">Last Name</label>
                <input
                    id="lastNameInput"
                    type="text"
                    name="lastName"
                    placeholder={lastName}
                    aria-label="Last Name"
                    onChange={handleChange}
                />

                <label htmlFor="emailInput">Email</label>
                <input
                    label="emailInput"
                    type="email"
                    name="email"
                    placeholder={email}
                    aria-label="Email"
                    onChange={handleChange}
                />

                <input type="submit" value="Save"/>
            </form>
        </div>
    )
}

export default Settings;
