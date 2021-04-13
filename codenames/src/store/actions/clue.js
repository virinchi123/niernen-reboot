import * as actionTypes from './actionTypes';

export const setClue = clue => {
    return {
        type: actionTypes.setClue,
        payload: clue,
    };
};

export const setNumber = number => {
    return {
        type: actionTypes.setNumber,
        payload: number,
    };
};

export const decrementNumber = () => {
    return {
        type: actionTypes.decrementNumber,
    };
};
