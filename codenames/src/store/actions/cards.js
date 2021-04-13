import * as actionTypes from './actionTypes';

export const setCards = cards => {
    return {
        type: actionTypes.setCards,
        payload: cards,
    };
};

export const revealCard = word => {
    return {
        type: actionTypes.revealCard,
        payload: word,
    };
};
