import React from 'react';

const Settings = (props) => {

    return (
        <div>
            Settings
            <Route
                path={`props.match.url`}
                component={Profile}
            />
            <Route />
        </div>
    )
}
