import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import playerReducer from './store/reducers/player';
import gameReducer from './store/reducers/gameState';
import roomReducer from './store/reducers/room';
import cardReducer from './store/reducers/cards';
import logReducer from './store/reducers/log';
import clueReducer from './store/reducers/clue';

const rootReducer = combineReducers({
    player: playerReducer,
    game: gameReducer,
    room: roomReducer,
    cards: cardReducer,
    log: logReducer,
    clue: clueReducer,
}); //add reducers inside JSON object.
const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
