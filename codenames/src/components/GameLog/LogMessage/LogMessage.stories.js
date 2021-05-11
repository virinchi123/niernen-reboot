import React from 'react';
import LogMessage from './LogMessage';

//👇 This default export determines where your story goes in the story list
const defaultExport = {
    title: 'Log Message',
    component: LogMessage,
};

export default defaultExport;

//👇 We create a “template” of how args map to rendering
const Template = args => <LogMessage {...args} />;

export const redTeamTap = Template.bind({});
export const redTeamClue = Template.bind({});
export const blueTeamTap = Template.bind({});
export const blueTeamClue = Template.bind({});
export const redEndTurn = Template.bind({});
export const blueEndTurn = Template.bind({});
export const redEndGuessing = Template.bind({});
export const blueEndGuessing = Template.bind({});

redTeamTap.args = {
    name: 'player',
    team: 'red',
    type: 'tap',
    word: 'word',
};

blueTeamTap.args = {
    name: 'player',
    team: 'blue',
    type: 'tap',
    word: 'word',
};

redTeamClue.args = {
    name: 'player',
    team: 'red',
    type: 'clue',
    clue: 'sample clue',
    number: 2,
};

blueTeamClue.args = {
    name: 'player',
    team: 'blue',
    type: 'clue',
    clue: 'sample clue',
    number: 2,
};

redEndTurn.args = {
    type: 'endTurn',
    name: 'player',
    team: 'red',
};

blueEndTurn.args = {
    type: 'endTurn',
    name: 'player',
    team: 'blue',
};

redEndGuessing.args = {
    type: 'endGuessing',
    name: 'player',
    team: 'red',
};

blueEndGuessing.args = {
    type: 'endGuessing',
    name: 'player',
    team: 'blue',
};
