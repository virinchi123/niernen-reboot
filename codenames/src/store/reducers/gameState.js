import * as actionTypes from '../actions/actionTypes';

const initialGameState = 0;

const incrementGameState = prevState => {
    if (prevState === 4) {
        prevState = 1;
    } else {
        prevState++;
    }
    return prevState;
};

const reducer = (state = initialGameState, action) => {
    switch (action.type) {
        case actionTypes.incrementGameState:
            return incrementGameState(state);

        case actionTypes.blueWin:
            return 5;

        case actionTypes.redWin:
            return 6;

        case actionTypes.setGameState:
            return action.payload;
        default:
            console.log('default state, doing nothing');
            return state;
    }
};

export default reducer;

//1:waiting for blue spymaster to give clue
//2:blue spymaster has given clue, waiting for blue operatives to solve
//3:waiting for red spymaster to give clue
//4:red spymaster has given clue, waiting for red operatives to solve
//5:blue team has won
//6: red team has won
