import React from 'react';
import GameLog from './GameLog';

//👇 This default export determines where your story goes in the story list
const defaultExport = {
    title: 'Game Log',
    component: GameLog,
};

export default defaultExport;

//👇 We create a “template” of how args map to rendering
const Template = args => <GameLog {...args} />;

export const Blank = Template.bind({});

Blank.args = {
    logs: [
        {
            type: 'tap',
            word: 'tappedWord',
            name: 'player',
            team: 'red',
        },
        {
            type: 'clue',
            clue: 'clue',
            name: 'player2',
            number: '2',
            team: 'blue',
        },
        {
            type: 'clue',
            clue: 'some other clue',
            name: 'player4',
            number: '2',
            team: 'blue',
        },
        {
            type: 'clue',
            clue: 'that clue',
            name: 'player4',
            number: '2',
            team: 'blue',
        },
    ],
};
