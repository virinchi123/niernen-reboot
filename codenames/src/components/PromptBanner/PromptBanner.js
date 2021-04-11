import React from 'react';
import classes from './PromptBanner.module.css';

const PromptBanner = props => {
    let bannerCode = null;
    //console.log(props);
    if (props.show) {
        bannerCode = (
            <div className={classes.container}>
                <h2>{props.text}</h2>
            </div>
        );
    }
    return bannerCode;
};

export default PromptBanner;
