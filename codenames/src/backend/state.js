const _ = require('lodash');

const state = {
    room: 500,
    players: [],
    game: 1,
    tapsLeft: 10,
    cards: [],
    log: [],
    clue: '',
    number: 0,
};

const getRedOperatives = () => {
    const list = [];
    for (let player of state.players) {
        if (player.role === 'Operative' && player.team === 'red') {
            list.push(player.name);
        }
    }
};

const getRedSpymasters = () => {
    const list = [];
    for (let player of state.players) {
        if (player.role === 'Spymaster' && player.team === 'red') {
            list.push(player.name);
        }
    }
};

const getBlueOperatives = () => {
    const list = [];
    for (let player of state.players) {
        if (player.role === 'Operative' && player.team === 'blue') {
            list.push(player.name);
        }
    }
};

const getBlueSpymasters = () => {
    const list = [];
    for (let player of state.players) {
        if (player.role === 'Spymaster' && player.team === 'blue') {
            list.push(player.name);
        }
    }
};

const setPlayerTeam = (player, team) => {
    const list = [];
    for (let oldPlayer of state.players) {
    }
};

const setPlayerRole = (player, role) => {};

const setGameState = state => {};

const incrementGameState = () => {};

const addLog = log => {};

const setLogs = logs => {};

const setClue = clue => {};

const setTaps = taps => {};

const decrementTaps = () => {};

const shuffleCards = () => {};

const setNumber = number => {};

const redWin = () => {};

const blueWin = () => {};

module.exports = {
    state,
};
