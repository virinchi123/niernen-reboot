import React from 'react';
import classes from './PlayerList.module.css';

const PlayerList = props => {
    let playerCode = props.names.map((el, index) => {
        return <h4 key={index}>{el}</h4>;
    });

    let containerClasses = [];
    containerClasses.push(classes.container);

    if (props.team === 'red') {
        containerClasses.push(classes.redTeam);
    } else if (props.team === 'blue') {
        containerClasses.push(classes.blueTeam);
    }

    return (
        <div className={containerClasses.join(' ')}>
            <h3>{props.type}</h3>
            {playerCode}
        </div>
    );
};

export default PlayerList;
