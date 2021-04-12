import * as actionTypes from '../actions/actionTypes';

const initialState = {
    redOperatives: [],
    blueOperatives: [],
    redSpymasters: [],
    blueSpymasters: [],
    playerCount: 0,
};

const reducer = (state = initialState, action) => {
    let newState;
    let redOperatives, blueOperatives, redSpymasters, blueSpymasters;
    let playerCount;
    switch (action.type) {
        case actionTypes.setRedOperatives:
            playerCount =
                state.playerCount -
                state.redOperatives.length +
                action.payload.length;
            newState = {
                ...state,
                redOperatives: action.payload,
                playerCount: playerCount,
            };
            return newState;

        case actionTypes.setBlueOperatives:
            playerCount =
                state.playerCount -
                state.blueOperatives.length +
                action.payload.length;
            newState = {
                ...state,
                blueOperatives: action.payload,
                playerCount: playerCount,
            };
            return newState;

        case actionTypes.setRedSpymasters:
            playerCount =
                state.playerCount -
                state.redSpymasters.length +
                action.payload.length;
            newState = {
                ...state,
                redSpymasters: action.payload,
                playerCount: playerCount,
            };
            return newState;

        case actionTypes.setBlueSpymasters:
            playerCount =
                state.playerCount -
                state.blueSpymasters.length +
                action.payload.length;
            newState = {
                ...state,
                blueSpymasters: action.payload,
                playerCount: playerCount,
            };
            return newState;

        case actionTypes.addRedOperative:
            playerCount = state.playerCount + 1;
            redOperatives = state.redOperatives;
            redOperatives.push(action.payload);
            newState = {
                ...state,
                redOperatives: redOperatives,
                playerCount: playerCount,
            };
            return newState;

        case actionTypes.addBlueOperative:
            playerCount = state.playerCount + 1;
            blueOperatives = state.blueOperatives;
            blueOperatives.push(action.payload);
            newState = {
                ...state,
                blueOperatives: blueOperatives,
                playerCount: playerCount,
            };
            return newState;

        case actionTypes.addRedSpymaster:
            playerCount = state.playerCount + 1;
            redSpymasters = state.redSpymasters;
            redSpymasters.push(action.payload);
            newState = {
                ...state,
                redSpymasters: redSpymasters,
                playerCount: playerCount,
            };
            return newState;

        case actionTypes.addBlueSpymaster:
            playerCount = state.playerCount + 1;
            blueSpymasters = state.blueSpymasters;
            blueSpymasters.push(action.payload);
            newState = {
                ...state,
                blueSpymasters: blueSpymasters,
                playerCount: playerCount,
            };
            return newState;

        case actionTypes.removeRedOperative:
            playerCount = state.playerCount - 1;
            redOperatives = state.redOperatives;
            redOperatives.filter(el => el !== action.payload);
            newState = {
                ...state,
                redOperatives: redOperatives,
                playerCount: playerCount,
            };
            return newState;

        case actionTypes.removeBlueOperative:
            playerCount = state.playerCount - 1;
            blueOperatives = state.blueOperatives;
            blueOperatives.filter(el => el !== action.payload);
            newState = {
                ...state,
                blueOperatives: blueOperatives,
                playerCount: playerCount,
            };
            return newState;

        case actionTypes.removeRedSpymaster:
            playerCount = state.playerCount - 1;
            redSpymasters = state.redSpymasters;
            redSpymasters.filter(el => el != action.payload);
            newState = {
                ...state,
                redSpymasters: redSpymasters,
                playerCount: playerCount,
            };
            return newState;

        case actionTypes.removeBlueSpymaster:
            playerCount = state.playerCount - 1;
            blueSpymasters = state.blueSpymasters;
            blueSpymasters.filter(el => el != action.payload);
            newState = {
                ...state,
                blueSpymasters: blueSpymasters,
                playerCount: playerCount,
            };
            return newState;

        default:
            return state;
    }
};

export default reducer;
