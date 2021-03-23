import React from 'react';
import PlayerList from './PlayerList';

//👇 This default export determines where your story goes in the story list
const defaultExport = {
    title: 'Player List',
    component: PlayerList,
};

export default defaultExport;

//👇 We create a “template” of how args map to rendering
const Template = args => <PlayerList {...args} />;

export const redTeam = Template.bind({});
redTeam.args = {
    team: 'red',
    type: 'Operatives/Spymasters',
    names: ['Ready', 'Player', 'One'],
};

export const blueTeam = Template.bind({});
blueTeam.args = {
    team: 'blue',
    type: 'Operatives/Spymasters',
    names: ['Ready', 'Player', 'One'],
};
