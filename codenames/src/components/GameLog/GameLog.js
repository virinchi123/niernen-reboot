import React from 'react';
import classes from './GameLog.module.css';
import LogMessage from './LogMessage/LogMessage';

const GameLog = props => {
    let logCode = null;

    if (props.logs) {
        logCode = props.logs.map(el => {
            if (el.type === 'tap') {
                return (
                    <LogMessage
                        type={el.type}
                        word={el.word}
                        name={el.name}
                        team={el.team}
                    />
                );
            } else if (el.type === 'clue') {
                return (
                    <LogMessage
                        name={el.name}
                        type={el.type}
                        clue={el.clue}
                        number={el.number}
                        team={el.team}
                    />
                );
            } else {
                return null;
            }
        });
    }

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <p>Game Log</p>
            </div>
            <div className={classes.logs}>{logCode}</div>
        </div>
    );
};

export default GameLog;
