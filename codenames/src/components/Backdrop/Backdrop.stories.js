import React from 'react';
import Backdrop from './Backdrop';

//👇 This default export determines where your story goes in the story list
const defaultExport = {
    title: 'Backdrop',
    component: Backdrop,
};

export default defaultExport;

//👇 We create a “template” of how args map to rendering
const Template = args => <Backdrop {...args} />;

export const red = Template.bind({});
export const blue = Template.bind({});

red.args = {
    type: 'red',
};

blue.args = {
    type: 'blue',
};
