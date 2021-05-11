import React from 'react';
import CardMat from './CardMat';

//👇 This default export determines where your story goes in the story list
const defaultExport = {
    title: 'Card Mat',
    component: CardMat,
};

export default defaultExport;

//👇 We create a “template” of how args map to rendering
const Template = args => <CardMat {...args} />;

export const regular = Template.bind({});

regular.args = {
    cards: [
        {
            type: 'red',
            word: 'word1',
            show: true,
        },
        {
            type: 'red',
            word: 'word2',
            show: true,
        },
        {
            type: 'red',
            word: 'word3',
            show: true,
        },
        {
            type: 'red',
            word: 'word4',
            show: true,
        },
        {
            type: 'red',
            word: 'word5',
            show: true,
        },
        {
            type: 'red',
            word: 'word6',
            show: true,
        },
        {
            type: 'red',
            word: 'word7',
            show: true,
        },
        {
            type: 'red',
            word: 'word8',
            show: true,
        },
        {
            type: 'red',
            word: 'word9',
            show: true,
        },
        {
            type: 'red',
            word: 'word10',
            show: true,
        },
        {
            type: 'red',
            word: 'word11',
            show: true,
        },
        {
            type: 'red',
            word: 'word12',
            show: true,
        },
        {
            type: 'red',
            word: 'word13',
            show: true,
        },
        {
            type: 'red',
            word: 'word14',
            show: true,
        },
        {
            type: 'red',
            word: 'word15',
            show: true,
        },
        {
            type: 'red',
            word: 'word16',
            show: true,
        },
        {
            type: 'red',
            word: 'word17',
            show: true,
        },
        {
            type: 'red',
            word: 'word18',
            show: true,
        },
        {
            type: 'red',
            word: 'word19',
            show: true,
        },
        {
            type: 'red',
            word: 'word20',
            show: true,
        },
        {
            type: 'red',
            word: 'word21',
            show: true,
        },
        {
            type: 'red',
            word: 'word22',
            show: true,
        },
        {
            type: 'red',
            word: 'word23',
            show: true,
        },
        {
            type: 'red',
            word: 'word24',
            show: true,
        },
        {
            type: 'red',
            word: 'word25',
            show: true,
        },
    ],
    playerRole: 'operative',
    tap: () => console.log('tapped'),
};

export const trueSight = Template.bind({});

trueSight.args = {
    cards: [
        {
            type: 'red',
            word: 'word1',
            show: true,
        },
        {
            type: 'red',
            word: 'word2',
            show: true,
        },
        {
            type: 'red',
            word: 'word3',
            show: true,
        },
        {
            type: 'red',
            word: 'word4',
            show: true,
        },
        {
            type: 'red',
            word: 'word5',
            show: true,
        },
        {
            type: 'red',
            word: 'word6',
            show: true,
        },
        {
            type: 'red',
            word: 'word7',
            show: true,
        },
        {
            type: 'red',
            word: 'word8',
            show: true,
        },
        {
            type: 'red',
            word: 'word9',
            show: true,
        },
        {
            type: 'red',
            word: 'word10',
            show: true,
        },
        {
            type: 'red',
            word: 'word11',
            show: true,
        },
        {
            type: 'red',
            word: 'word12',
            show: true,
        },
        {
            type: 'red',
            word: 'word13',
            show: true,
        },
        {
            type: 'red',
            word: 'word14',
            show: true,
        },
        {
            type: 'red',
            word: 'word15',
            show: true,
        },
        {
            type: 'red',
            word: 'word16',
            show: true,
        },
        {
            type: 'red',
            word: 'word17',
            show: true,
        },
        {
            type: 'red',
            word: 'word18',
            show: true,
        },
        {
            type: 'red',
            word: 'word19',
            show: true,
        },
        {
            type: 'red',
            word: 'word20',
            show: true,
        },
        {
            type: 'red',
            word: 'word21',
            show: true,
        },
        {
            type: 'red',
            word: 'word22',
            show: true,
        },
        {
            type: 'red',
            word: 'word23',
            show: true,
        },
        {
            type: 'black',
            word: 'word24',
            show: true,
        },
        {
            type: 'blue',
            word: 'word25',
            show: true,
        },
    ],
    playerRole: 'spymaster',
    tap: () => console.log('tapped'),
};
