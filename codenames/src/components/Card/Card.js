import React from 'react';
import classes from './Card.module.css';
import grayImage from '../../assets/card-gray-back.png';
import redImage from '../../assets/card-red-back-1.png';
import blueImage from '../../assets/card-blue-back-4.png';
import blackImage from '../../assets/card-black-back.png';

const Card = props => {
    let imageSrc;

    imageSrc = grayImage;
    let cardClass = [classes.card];
    let cardCode = null;

    if (props.revealed) {
        if (props.type === 'red') {
            cardClass.push(classes.redRevealedCard);
            imageSrc = redImage;
        } else if (props.type === 'blue') {
            cardClass.push(classes.blueRevealedCard);
            imageSrc = blueImage;
        } else if (props.type === 'black') {
            cardClass.push(classes.blackRevealedCard);
            imageSrc = blackImage;
        }
    } else {
        if (props.trueSight) {
            if (props.type === 'red') {
                console.log('reddy');
                cardClass.push(classes.redCard);
            } else if (props.type === 'blue') {
            }
        }
    }

    if (props.hover) {
        cardClass.push(classes.hover);
    }

    //   const clickHandler = event => {
    //     if (props.click) {
    //       props.click(event, props.word, props.index);
    //     }
    //   };

    console.log(imageSrc);

    let cardWordCode = <p>{props.word}</p>;

    if (props.word.length > 8) {
        cardWordCode = <p className={classes.fitTextToBox}>{props.word}</p>;
    }

    cardCode = (
        <div
            className={
                cardClass.join(
                    ' '
                ) /* add another argument onClick = {clickHandler} after clickHandler has been*/
            }
        >
            <div className={classes.cardText}>{cardWordCode}</div>
        </div>
    );

    console.log(imageSrc);
    if (props.revealed) {
        cardCode = <img src={imageSrc} alt='src' />;
    }

    return <React.Fragment>{cardCode}</React.Fragment>;
};

export default Card;
