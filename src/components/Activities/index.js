import React from 'react';
import { Route } from 'react-router-dom';
import {Activity} from "./Activity";

const Activities = (props) => {
    console.log('Activities', props);

    return(
        <div>
            Activities
            <Route
                path={`${props.match.url}/recreational`}
                render={(props) => <Activity {...props} type="recreational"/>}
            />
            <Route
                path={`${props.match.url}/cooking`}
                render={(props) => <Activity {...props} type="cooking"/>}
            />
        </div>
    )
}

export default Activities;
