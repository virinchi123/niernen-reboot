import * as actionTypes from './actionTypes';

export const setRedOperatives = redOperatives => {
    return {
        type: actionTypes.setRedOperatives,
        payload: redOperatives,
    };
};

export const setRedSpymasters = redSpymasters => {
    return {
        type: actionTypes.setRedSpymasters,
        payload: redSpymasters,
    };
};

export const setBlueOperatives = blueOperatives => {
    return {
        type: actionTypes.setBlueOperatives,
        payload: blueOperatives,
    };
};

export const setBlueSpymasters = blueSpymasters => {
    return {
        type: actionTypes.setBlueSpymasters,
        payload: blueSpymasters,
    };
};

export const addBlueOperative = operative => {
    return {
        type: actionTypes.addBlueOperative,
        payload: operative,
    };
};

export const addBlueSpymaster = spymaster => {
    return {
        type: actionTypes.addBlueSpymaster,
        payload: spymaster,
    };
};

export const addRedOperative = operative => {
    return {
        type: actionTypes.addRedOperative,
        payload: operative,
    };
};

export const addRedSpymaster = spymaster => {
    return {
        type: actionTypes.addRedSpymaster,
        payload: spymaster,
    };
};

export const removeBlueOperative = operative => {
    return {
        type: actionTypes.removeBlueOperative,
        payload: operative,
    };
};

export const removeBlueSpymaster = spymaster => {
    return {
        type: actionTypes.removeBlueSpymaster,
        payload: spymaster,
    };
};

export const removeRedOperative = operative => {
    return {
        type: actionTypes.removeRedOperative,
        payload: operative,
    };
};

export const removeRedSpymaster = spymaster => {
    return {
        type: actionTypes.removeRedSpymaster,
        payload: spymaster,
    };
};

export const setTaps = taps => {
    return {
        type: actionTypes.setTaps,
        payload: taps,
    };
};

export const decrementTaps = () => {
    return {
        type: actionTypes.decrementTaps,
    };
};

export const setZeroTaps = () => {
    return {
        type: actionTypes.setTaps,
        payload: 0,
    };
};
