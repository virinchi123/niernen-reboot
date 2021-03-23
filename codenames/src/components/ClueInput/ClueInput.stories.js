import React from 'react';
import ClueInput from './ClueInput';

//👇 This default export determines where your story goes in the story list
const defaultExport = {
    title: 'Clue Input',
    component: ClueInput,
};

export default defaultExport;

//👇 We create a “template” of how args map to rendering
const Template = args => <ClueInput {...args} />;

export const Default = Template.bind({});

Default.args = {};
