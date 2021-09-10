const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);
const path = require('path');
const cors = require('cors');
const options = {
    cors: {
        origins: false,
    },
};
const io = require('socket.io')(httpServer, options);
app.use(cors());
app.use(express.static(path.join(__dirname, '..', '..', 'build')));

app.get('/', function (req, res) {
    console.log(path.join(__dirname, '..', '..', './public', 'index.html'));
    res.sendFile(path.join(__dirname, '..', '..', './build', 'index.html'));
});

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Used like so

const room = '500';
let status = 1;
let clue = {};

const serverState = {
    room: room,
};

const words = [
    'Virinchi',
    'Chris',
    'Melvin',
    'Srivatsan',
    'Harshit',
    'Ishan',
    'Srijet',
    'Akshitha',
    'Edith',
    'Paulson',
    'Rohan',
    'Sanjax',
    'Shreyaa',
    'Mansi',
    'Dobby',
    'Ishita',
    'Sharthak',
    'Chet',
    'Harsh',
    'Chandy',
    'Rajneel',
    'Balaji',
    'Mohit',
    'Vaishnavi',
    'Snigdha',
];
let types = [
    'red',
    'red',
    'red',
    'red',
    'red',
    'red',
    'red',
    'red',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'blue',
    'black',
    'grey',
    'grey',
    'grey',
    'grey',
    'grey',
    'grey',
    'grey',
];
shuffle(types);
const cards = words.map((el, index) => {
    return {
        word: el,
        type: types[index],
        revealed: false,
    };
});

console.log(cards);

io.on('connection', socket => {
    socket.emit('connectedAcknowledgementEvent');
    console.log(socket.id);
    console.log(io.sockets.sockets.size);
});

io.on('disconnect', socket => {
    console.log('socket disconnected: ' + socket.id);
});

io.on('cardIsTapped', card => {});

httpServer.listen(9999);
