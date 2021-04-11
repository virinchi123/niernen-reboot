import React from 'react';
import classes from './TeamCard.module.css';
import redTeamIcon from '../../assets/card-red-back-1.png';
import blueTeamIcon from '../../assets/card-blue-back-4.png';
import PlayerList from './PlayerList/PlayerList';

const TeamCard = props => {
    let imageCode = null;
    const bannerClasses = [classes.teamBanner];
    const containerClasses = [classes.container];

    if (props.team === 'red') {
        imageCode = <img src={redTeamIcon} alt='unable to load' />;
        containerClasses.push(classes.redContainer);
    } else if (props.team === 'blue') {
        imageCode = <img src={blueTeamIcon} alt='unable to load' />;
        containerClasses.push(classes.blueContainer);
        bannerClasses.push(classes.inverted);
    }
    return (
        <div className={containerClasses.join(' ')}>
            <div className={bannerClasses.join(' ')}>
                {imageCode}
                <h2>{props.numberOfCardsLeft}</h2>
            </div>
            <PlayerList
                names={props.operativesList}
                type='Operatives'
                team={props.team}
            />
            <PlayerList
                names={props.spymastersList}
                type='Spymasters'
                team={props.team}
            />
        </div>
    );
};

export default TeamCard;
