import React from 'react';
import PromptBanner from './PromptBanner';

//👇 This default export determines where your story goes in the story list
const defaultExport = {
    title: 'Prompt Banner',
    component: PromptBanner,
};

export default defaultExport;

//👇 We create a “template” of how args map to rendering
const Template = args => <PromptBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Banner',
};
