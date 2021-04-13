import * as actionTypes from '../actions/actionTypes';

const initialState = [
    {
        type: 'red',
        word: 'word1',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word2',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word3',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word4',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word5',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word6',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word7',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word8',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word9',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word10',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word11',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word12',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word13',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word14',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word15',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word16',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word17',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word18',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word19',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word20',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word21',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word22',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word23',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word24',
        revealed: false,
    },
    {
        type: 'red',
        word: 'word25',
        revealed: false,
    },
];

const reducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.setCards:
            newState = action.payload;
            return newState;
        case actionTypes.revealCard:
            newState = [...state];
            for (let el of newState) {
                if (el.word === action.payload) {
                    el.revealed = true;
                    break;
                }
            }
            return newState;
        default:
            return state;
    }
};

export default reducer;