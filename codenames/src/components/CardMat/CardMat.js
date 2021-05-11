import React from 'react';
import classes from './CardMat.module.css';
import Card from '../Card/Card';

const CardMat = props => {
    let trueSight = false;
    console.log(props.role);
    if (props.role === 'spymaster') {
        trueSight = true;
    }
    console.log('trueSight: ' + trueSight);
    const cardCode = props.cards.map(card => {
        return (
            <Card
                type={card.type}
                word={card.word}
                revealed={card.revealed}
                key={card.word}
                trueSight={trueSight}
                tap={() => props.tap(card.word)}
            />
        );
    });

    return <div className={classes.container}>{cardCode}</div>;
};

export default CardMat;
