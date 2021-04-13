import * as actionTypes from '../actions/actionTypes';

const initialState = {
    clue: '',
    number: 0,
};

const reducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.setClue:
            newState = {
                ...state,
                clue: action.payload,
            };
            return newState;
        case actionTypes.setNumber:
            newState = {
                ...state,
                number: action.payload,
            };
            return newState;
        case actionTypes.decrementNumber:
            if (state.number === 0) {
                console.log('Already at 0 taps left. Cannot decrement further');
                return state;
            } else {
                let newNumber = state.number - 1;
                newState = {
                    ...state,
                    number: newNumber,
                };
                return newState;
            }
        default:
            return state;
    }
};

export default reducer;
