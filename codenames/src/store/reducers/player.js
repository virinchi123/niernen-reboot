import * as actionTypes from '../actions/actionTypes';

const initialState = {
    name: 'Virinchi',
    team: '',
    role: '',
};

const reducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case actionTypes.setPlayerName:
            newState = {
                ...state,
                name: action.payload,
            };
            return newState;
        case actionTypes.setPlayerTeam:
            newState = {
                ...state,
                team: action.payload,
            };
            return newState;
        case actionTypes.setPlayerRole:
            newState = {
                ...state,
                role: action.payload,
            };
            console.log('set role');
            return newState;
        case actionTypes.switchPlayerRole:
            switch (state.role) {
                case '':
                    console.log('Select role before switching');
                    return state;
                case 'operative':
                    newState = {
                        ...state,
                        role: 'spymaster',
                    };
                    break;
                case 'spymaster':
                    newState = {
                        ...state,
                        role: 'operative',
                    };
                    break;
                default:
                    return state;
            }
            return newState;
        case actionTypes.switchPlayerTeam:
            switch (state.team) {
                case '':
                    console.log('Select team before switching');
                    return state;
                case 'red':
                    newState = {
                        ...state,
                        team: 'blue',
                    };
                    break;
                case 'blue':
                    newState = {
                        ...state,
                        team: 'red',
                    };
                    break;
                default:
                    return state;
            }
            return newState;
        default:
            return state;
    }
};

export default reducer;
