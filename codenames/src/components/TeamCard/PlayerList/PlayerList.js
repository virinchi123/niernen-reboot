import React from 'react';
import classes from './PlayerList.module.css';
import IntermediateIconButton from '../../IntermediateIconButton/IntermediateIconButton';

const PlayerList = props => {
    let playerCode = props.names.map((el, index) => {
        return <h4 key={index}>{el}</h4>;
    });

    let buttonCode = null;

    let role = null;

    if (props.type === 'Operatives') {
        role = 'operative';
    } else if (props.type === 'Spymasters') {
        role = 'spymaster';
    }

    if (props.showJoin) {
        buttonCode = (
            <IntermediateIconButton
                leftText={'Join as ' + role}
                click={props.joinPlayer}
            />
        );
    }

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
            {buttonCode}
        </div>
    );
};

export default PlayerList;
