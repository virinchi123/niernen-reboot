import React from 'react';
import classes from './IntermediateIconButton.module.css';

const IntermediateIconButton = props => {
    let imageCode = null;
    let leftTextCode = null;
    let rightTextCode = null;
    if (props.image) {
        imageCode = (
            <div className={classes.image}>
                <img src={props.image} alt='unable to display' />
            </div>
        );
    }

    if (props.leftText) {
        leftTextCode = (
            <div className={classes.leftTextContainer}>
                <p>{props.leftText}</p>
            </div>
        );
    }

    if (props.rightText) {
        rightTextCode = (
            <div className={classes.rightTextContainer}>
                <p>{props.rightText}</p>
            </div>
        );
    }

    return (
        <div className={classes.container} onClick={props.click}>
            {leftTextCode}
            {imageCode}
            {rightTextCode}
        </div>
    );
};

export default IntermediateIconButton;
