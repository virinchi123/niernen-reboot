import React from 'react';
import blueGameBackground from '../../assets/bg-blue.jpg';
import redGameBackground from '../../assets/bg-red.jpg';
import classes from './Backdrop.module.css';

const Backdrop = props => {
    let backdropCode = null;

    if (props.type === 'red') {
        backdropCode = <img src={redGameBackground} alt='red background' />;
    } else if (props.type === 'blue') {
        backdropCode = <img src={blueGameBackground} alt='blue background' />;
    }

    return <div className={classes.container}>{backdropCode}</div>;
};

export default Backdrop;
