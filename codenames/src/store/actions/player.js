import * as actionTypes from './actionTypes';

export const setPlayerName = name => {
    return {
        type: actionTypes.setPlayerName,
        payload: name,
    };
};

export const setPlayerTeam = team => {
    return {
        type: actionTypes.setPlayerTeam,
        payload: team,
    };
};

export const setPlayerRole = role => {
    return {
        type: actionTypes.setPlayerRole,
        payload: role,
    };
};

export const switchPlayerTeam = () => {
    return {
        type: actionTypes.switchPlayerTeam,
    };
};

export const switchPlayerRole = () => {
    return {
        type: actionTypes.switchPlayerRole,
    };
};
