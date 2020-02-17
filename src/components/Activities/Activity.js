import React, { useState, useEffect } from 'react';

export const Activity = (props) => {

    const {
        type
    } = props;

    console.log('Activity', props);

    const [currentActivity, setActivity] = useState(null);

    useEffect(() => {
        let url = `http://www.boredapi.com/api/activity`;
        console.log(type);
        if (type) {
            url += `?type=${type}`;
            console.log(url);
        }

        fetch(url)
            .then((res) => (res.json()))
            .then((res) => {
                console.log(res);
                setActivity(res);
            })
    }, [])


    const renderActivity = () => {
        const { activity, type, participants } = currentActivity;
        return(
            <ul className="activity">
                <li>Activity: {activity}</li>
                <li>Type: {type}</li>
                <li>Participants: {participants}</li>
            </ul>
        )
    }

    const renderEmpty = () => {
        return(
            <div>
                Loading
            </div>
        )
    }

    return (
        <div>
            {/*Activity {props.match.url}*/}
            {currentActivity ? renderActivity() : renderEmpty()}

        </div>
    )

}
