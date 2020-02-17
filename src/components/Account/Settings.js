import React from 'react';


const Settings = (props) {
    console.log(props);

    return (
        <div>
            SETTINGS

            <form action="">
                <input type="text" name="firstName" placeholder={"placeholder"}/>
                <input type="text" name="lastName" placeholder="placeholder"/>
                <input type="email" name="email" placeholder="email"/>
            </form>
        </div>
    )
}
