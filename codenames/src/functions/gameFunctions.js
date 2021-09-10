const backdropColorFunction = turn => {
    if (turn === 1 || turn === 2 || turn === 5) {
        return 'blue';
    } else if (turn === 3 || turn === 4 || turn === 6) {
        return 'red';
    }
};

const getCardColour = (cards, word) => {
    for (let card of cards) {
        if (card.word === word) {
            return card.type;
        }
    }
    console.log('Card not found!');
};

const getCardsByType = (cards, type) => {
    return cards.filter(el => el.type === type && !el.revealed).length;
};

//return 0 for not ended, 1 for redWin, and 2 for blueWin
const gameHasEnded = (
    cards,
    turn,
    word,
    numberOfBlueCardsLeft,
    numberOfRedCardsLeft
) => {
    if (turn === 2) {
        console.log('blue turned');
        const colour = getCardColour(cards, word);
        console.log(colour);
        console.log(numberOfBlueCardsLeft);
        if (colour === 'blue' && numberOfBlueCardsLeft === 1) {
            //blueWin();
            return 2;
        } else if (colour === 'red' && numberOfRedCardsLeft === 1) {
            //redWin();
            return 1;
        } else if (colour === 'black') {
            //redWin();
            return 1;
        } else if (colour === 'gray') {
            return 0;
        } else {
            return 0;
        }
    } else if (turn === 4) {
        const colour = getCardColour(cards, word);
        if (colour === 'blue' && numberOfBlueCardsLeft === 1) {
            //blueWin();
            return 2;
        } else if (colour === 'red' && numberOfRedCardsLeft === 1) {
            //redWin();
            return 1;
        } else if (colour === 'black') {
            //blueWin();
            return 1;
        } else if (colour === 'gray') {
            return 0;
        } else {
            console.log('invalid colour');
        }
    }
};

const defaultExport = {
    backdropColorFunction,
    getCardsByType,
    gameHasEnded,
};

export default defaultExport;
