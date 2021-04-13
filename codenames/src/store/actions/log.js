import * as actionTypes from './actionTypes';

export const addLog = log => {
    return {
        type: actionTypes.addLog,
        payload: log,
    };
};
