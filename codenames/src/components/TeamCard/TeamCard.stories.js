import React from 'react';
import TeamCard from './TeamCard';

//👇 This default export determines where your story goes in the story list
const defaultExport = {
    title: 'TeamCard',
    component: TeamCard,
};

export default defaultExport;

//👇 We create a “template” of how args map to rendering
const Template = args => <TeamCard {...args} />;

export const redTeam = Template.bind({});
redTeam.args = {
    team: 'red',
    numberOfCardsLeft: 9,
    operativesList: ['Ready', 'Player', 'One'],
    spymastersList: ['Spy', 'Master'],
    showJoin: false,
    setPlayerRole: () => console.log('Set Player Role'),
    setPlayerTeam: () => console.log('Set Player Team'),
};

export const blueTeam = Template.bind({});
blueTeam.args = {
    team: 'blue',
    numberOfCardsLeft: 9,
    operativesList: ['Ready', 'Player', 'One'],
    spymastersList: ['Spy', 'Master'],
    showJoin: false,
    setPlayerRole: () => console.log('Set Player Role'),
    setPlayerTeam: () => console.log('Set Player Team'),
};

export const unassignedRedTeam = Template.bind({});

unassignedRedTeam.args = {
    team: 'red',
    numberOfCardsLeft: 9,
    operativesList: ['Ready', 'Player', 'One'],
    spymastersList: ['Spy', 'Master'],
    showJoin: true,
    setPlayerRole: () => console.log('Set Player Role'),
    setPlayerTeam: () => console.log('Set Player Team'),
};

export const unassignedBlueTeam = Template.bind({});

unassignedBlueTeam.args = {
    team: 'blue',
    numberOfCardsLeft: 9,
    operativesList: ['Ready', 'Player', 'One'],
    spymastersList: ['Spy', 'Master'],
    showJoin: true,
    setPlayerRole: () => console.log('Set Player Role'),
    setPlayerTeam: () => console.log('Set Player Team'),
};
