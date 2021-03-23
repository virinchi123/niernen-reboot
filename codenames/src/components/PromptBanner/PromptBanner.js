import React from 'react';
import classes from './PromptBanner.module.css';

const PromptBanner = props => {
    return (
        <div className={classes.container}>
            <h2>{props.text}</h2>
        </div>
    );
};

export default PromptBanner;
