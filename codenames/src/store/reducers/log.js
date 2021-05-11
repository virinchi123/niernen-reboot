import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
    let newState = [...state];
    let log;
    switch (action.type) {
        case actionTypes.addLog:
            switch (action.payload.type) {
                case 'tap':
                    log = {
                        type: action.payload.type,
                        name: action.payload.name,
                        word: action.payload.word,
                        team: action.payload.team,
                    };
                    newState.push(log);
                    return newState;
                case 'clue':
                    log = {
                        type: action.payload.type,
                        name: action.payload.name,
                        clue: action.payload.clue,
                        team: action.payload.team,
                        number: action.payload.number,
                    };
                    newState.push(log);
                    return newState;
                case 'endTurn': {
                    log = {
                        type: action.payload.type,
                        name: action.payload.name,
                    };
                    newState.push(log);
                    return newState;
                }
                case 'endGuessing': {
                    log = {
                        type: action.payload.type,
                        name: action.payload.name,
                    };
                    newState.push(log);
                    return newState;
                }
                default:
                    return state;
            }
        default:
            return state;
    }
};

export default reducer;
