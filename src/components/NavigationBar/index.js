import React, {memo} from 'react';
import { Link, NavLink } from 'react-router-dom'
import './NavigationBar.css';
import Accordion from '../Accordion';

const NavigationBar = memo(({accordionStatus, setAccordionStatus}) => {
    console.log(accordionStatus);

    const {activities, account} = accordionStatus;

    const onClick = (name) => {
        const newState = {
            ...accordionStatus,
            [name]: !accordionStatus[name],
        }
        setAccordionStatus(newState);
    }

    return (
        <div className="navbar">
            <ul className="nav-section-list">
                <li className="section-item">
                    <Accordion
                        name="activities"
                        isOpen={activities}
                        onClick={onClick}
                        title="Activities">
                        <NavLink to="/activities/recreational">Recreational</NavLink>
                        <NavLink to="/activities/cooking">Cooking</NavLink>
                    </Accordion>
                </li>
                <li className="section-item">
                    <Accordion
                        name="account"
                        isOpen={account}
                        onClick={onClick}
                        title="Account"
                    >
                        <NavLink to="/account/profile">Profile</NavLink>
                        <NavLink to="/account/settings">Settings</NavLink>
                    </Accordion>
                </li>

            </ul>
        </div>
    )
})

export default NavigationBar;
