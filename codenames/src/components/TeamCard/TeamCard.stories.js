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
};

export const blueTeam = Template.bind({});
blueTeam.args = {
    team: 'blue',
    numberOfCardsLeft: 9,
    operativesList: ['Ready', 'Player', 'One'],
    spymastersList: ['Spy', 'Master'],
};
