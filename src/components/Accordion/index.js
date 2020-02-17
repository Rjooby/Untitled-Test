import React, { useState } from 'react';
import './Accordion.css';

const Accordion = (props) => {
    const {title, children, isOpen, name, onClick} = props;

    return (
        <div className="accordion-container" >
            <div className="title"
                 onClick={() => onClick(name)}
            >
                {title}
            </div>
            <div className={isOpen ? "open" : "closed"}>
                <div className="collapsable-content">
                    {children}
                </div>
            </div>

        </div>
    )



}

export default Accordion;
