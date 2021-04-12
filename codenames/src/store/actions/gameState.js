import * as actionTypes from './actionTypes';

export const incrementGameState = () => {
    return {
        type: actionTypes.incrementGameState,
    };
};

export const redWin = () => {
    return {
        type: actionTypes.redWin,
    };
};

export const blueWin = () => {
    return {
        type: actionTypes.blueWin,
    };
};

export const setGameState = newGameState => {
    return {
        type: actionTypes.setGameState,
        payload: newGameState,
    };
};
