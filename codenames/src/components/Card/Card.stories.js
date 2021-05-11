import React from 'react';
import Card from './Card';

//👇 This default export determines where your story goes in the story list
const defaultExport = {
    title: 'Card',
    component: Card,
};

export default defaultExport;

//👇 We create a “template” of how args map to rendering
const Template = args => <Card {...args} />;

export const redRevealedCard = Template.bind({});

redRevealedCard.args = {
    /*👇 The args you need here will depend on your component */
    type: 'red',
    word: 'sampleWord',
    revealed: true,
    tap: () => console.log('tapped'),
};

export const blueRevealedCard = Template.bind({});

blueRevealedCard.args = {
    type: 'blue',
    word: 'sampleWord',
    revealed: true,
    tap: () => console.log('tapped'),
};

export const blackRevealedCard = Template.bind({});

blackRevealedCard.args = {
    type: 'black',
    word: 'sampleWord',
    revealed: true,
    tap: () => console.log('tapped'),
};

export const grayRevealedCard = Template.bind({});

grayRevealedCard.args = {
    type: 'gray',
    word: 'sampleWord',
    revealed: true,
    tap: () => console.log('tapped'),
};

export const neutralUnrevealedCard = Template.bind({});

neutralUnrevealedCard.args = {
    /*👇 The args you need here will depend on your component */
    type: 'gray',
    word: 'sampleWord',
    revealed: false,
    trueSight: true,
    tap: () => console.log('tapped'),
};

export const redUnrevealedCard = Template.bind({});

redUnrevealedCard.args = {
    type: 'red',
    word: 'sampleWord',
    revealed: false,
    trueSight: true,
    tap: () => console.log('tapped'),
};

export const blueUnrevealedCard = Template.bind({});

blueUnrevealedCard.args = {
    type: 'blue',
    word: 'sampleWord',
    revealed: false,
    trueSight: true,
    tap: () => console.log('tapped'),
};
