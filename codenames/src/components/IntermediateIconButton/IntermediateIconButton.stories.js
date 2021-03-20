import React from 'react';
import Button from './IntermediateIconButton';
import playerIcon from '../../assets/icon_player.png';

//👇 This default export determines where your story goes in the story list
const defaultExport = {
    title: 'Intermediate Icon Button',
    component: Button,
};

export default defaultExport;

//👇 We create a “template” of how args map to rendering
const Template = args => <Button {...args} />;

export const TextOnly = Template.bind({});

TextOnly.args = {
    /*👇 The args you need here will depend on your component */
    leftText: 'left',
};

export const LeftTextImage = Template.bind({});

LeftTextImage.args = {
    leftText: 'left',
    image: playerIcon,
};

export const rightTextImage = Template.bind({});

rightTextImage.args = {
    rightText: 'right',
    image: playerIcon,
};
