import React from 'react';
import Topbar from './Topbar';

//👇 This default export determines where your story goes in the story list
const defaultExport = {
    title: 'Topbar',
    component: Topbar,
};

export default defaultExport;

//👇 We create a “template” of how args map to rendering
const Template = args => <Topbar {...args} />;

export const Default = Template.bind({});

Default.args = {
    numberOfPlayers: 1,
    username: 'Virinchi',
};
