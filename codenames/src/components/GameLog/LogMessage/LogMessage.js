import React from 'react';
import classes from './LogMessage.module.css';

const logMessage = props => {
    let divClass = null;
    if (props.team === 'red') {
        divClass = [classes.message, classes.red].join(' ');
    } else {
        divClass = [classes.message, classes.blue].join(' ');
    }

    let text = '';
    let highlightedText = null;
    if (props.type === 'tap') {
        let code = (
            <span className={classes.highlightedText}>
                {props.word.toUpperCase()}
            </span>
        );
        code = props.word.toUpperCase();
        text = 'taps ' + code;
    } else if (props.type === 'clue') {
        highlightedText = (
            <span className={classes.highlightedText}>
                {' ' + props.clue + ' ' + props.number}
            </span>
        );
        text = `gives clue`;
    }
    return (
        <div className={divClass}>
            <p>
                <span>{props.name}</span> {text}
                {highlightedText}
            </p>
        </div>
    );
};

export default logMessage;
