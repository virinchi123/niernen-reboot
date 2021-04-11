import React from 'react';
import classes from './ClueInput.module.css';
import IntermediateIconButton from '../IntermediateIconButton/IntermediateIconButton';

const ClueInput = props => {
    const optionCode = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '∞',
    ].map(el => {
        return (
            <option value={el} key={el}>
                {el}
            </option>
        );
    });

    return (
        <div className={classes.container}>
            <input type='text' placeholder='Type your clue here' />
            <select>
                <option value='-' hidden>
                    -
                </option>
                {optionCode}
            </select>
            <IntermediateIconButton leftText='Give Clue' />
        </div>
    );
};

export default ClueInput;
