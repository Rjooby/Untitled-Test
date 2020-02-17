import React, { useState, useEffect } from 'react';

export const Activity = (props) => {

    const {
        type
    } = props;

    const [currentActivity, setActivity] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        let url = `https://www.boredapi.com/api/activity`;
        if (type) {
            url += `?type=${type}`;
        }

        fetch(url)
            .then((res) => (res.json()))
            .then((res) => {
                console.log(res);
                setActivity(res);
            })
    }

    const onRefresh = () => {
        fetchData();
    }


    const renderActivity = () => {
        const { activity, type, participants } = currentActivity;
        return(
            <React.Fragment>
                <ul className="activity">
                    <li>Activity: {activity}</li>
                    <li>Type: {type}</li>
                    <li>Participants: {participants}</li>
                </ul>

                <button onClick={onRefresh}>Refresh</button>
            </React.Fragment>
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
            {currentActivity ? renderActivity() : renderEmpty()}
        </div>
    )

}
