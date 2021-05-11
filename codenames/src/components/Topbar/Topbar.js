import React from 'react';
import playerIcon from '../../assets/icon_player.png';
import classes from './Topbar.module.css';
import IntermediateIconButton from '../IntermediateIconButton/IntermediateIconButton';
import smiley from '../../assets/smiley.svg';

const Topbar = props => {
    return (
        <div className={classes.topbar}>
            <IntermediateIconButton
                leftText='Players'
                image={playerIcon}
                rightText={'' + props.numberOfPlayers}
            />
            <div className={classes.rightTop}>
                <IntermediateIconButton
                    leftText='Reset Game'
                    click={props.resetFunction}
                />
                <IntermediateIconButton
                    leftText={props.username}
                    image={smiley}
                    click={props.playerFunction}
                />
            </div>
        </div>
    );
};

export default Topbar;
