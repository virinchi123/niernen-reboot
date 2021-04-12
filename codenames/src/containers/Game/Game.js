import React, { Fragment } from 'react';
import classes from './Game.module.css';
import Topbar from '../../components/Topbar/Topbar';
import Banner from '../../components/PromptBanner/PromptBanner';
import TeamCard from '../../components/TeamCard/TeamCard';
import CardMat from '../../components/CardMat/CardMat';
import GameLog from '../../components/GameLog/GameLog';
import ClueInput from '../../components/ClueInput/ClueInput';
import Backdrop from '../../components/Backdrop/Backdrop';

const Game = props => {
    let numberOfPlayers = 2;
    let username = 'Virinchi';
    let showBanner = true;
    let bannerText = 'Wait for your spymasters to give you a clue...';
    let numberOfRedCardsLeft = 8;
    let numberOfBlueCardsLeft = 9;
    let redSpymasters = ['redSpy'];
    let redOperatives = [];
    let blueSpymasters = [];
    let blueOperatives = [];
    let cards = [
        {
            type: 'red',
            word: 'word1',
            show: false,
        },
        {
            type: 'red',
            word: 'word2',
            show: false,
        },
        {
            type: 'red',
            word: 'word3',
            show: false,
        },
        {
            type: 'red',
            word: 'word4',
            show: false,
        },
        {
            type: 'red',
            word: 'word5',
            show: false,
        },
        {
            type: 'red',
            word: 'word6',
            show: false,
        },
        {
            type: 'red',
            word: 'word7',
            show: false,
        },
        {
            type: 'red',
            word: 'word8',
            show: false,
        },
        {
            type: 'red',
            word: 'word9',
            show: false,
        },
        {
            type: 'red',
            word: 'word10',
            show: false,
        },
        {
            type: 'red',
            word: 'word11',
            show: false,
        },
        {
            type: 'red',
            word: 'word12',
            show: false,
        },
        {
            type: 'red',
            word: 'word13',
            show: false,
        },
        {
            type: 'red',
            word: 'word14',
            show: false,
        },
        {
            type: 'red',
            word: 'word15',
            show: false,
        },
        {
            type: 'red',
            word: 'word16',
            show: false,
        },
        {
            type: 'red',
            word: 'word17',
            show: false,
        },
        {
            type: 'red',
            word: 'word18',
            show: false,
        },
        {
            type: 'red',
            word: 'word19',
            show: false,
        },
        {
            type: 'red',
            word: 'word20',
            show: false,
        },
        {
            type: 'red',
            word: 'word21',
            show: false,
        },
        {
            type: 'red',
            word: 'word22',
            show: false,
        },
        {
            type: 'red',
            word: 'word23',
            show: false,
        },
        {
            type: 'red',
            word: 'word24',
            show: false,
        },
        {
            type: 'red',
            word: 'word25',
            show: false,
        },
    ];
    let gameLogs = [];
    let backdropType = 'red';

    let parentContainerClasses = [classes.container];

    // if (showBanner) {
    //     parentContainerClasses = [classes.showBannerContainer];
    // }

    return (
        <Fragment>
            <Backdrop type={backdropType} />
            <div className={parentContainerClasses.join(' ')}>
                <div className={classes.topbarContainer}>
                    <Topbar
                        numberOfPlayers={numberOfPlayers}
                        username={username}
                    />
                </div>
                <div className={classes.bannerContainer}>
                    <Banner show={showBanner} text={bannerText} />
                </div>
                <div className={classes.redTeamCardContainer}>
                    <TeamCard
                        team='red'
                        numberOfCardsLeft={numberOfRedCardsLeft}
                        operativesList={redOperatives}
                        spymastersList={redSpymasters}
                    />
                </div>
                <div className={classes.cardMatContainer}>
                    <CardMat cards={cards} />
                </div>
                <div className={classes.blueTeamCardContainer}>
                    <TeamCard
                        team='blue'
                        numberOfCardsLeft={numberOfBlueCardsLeft}
                        operativesList={blueOperatives}
                        spymastersList={blueSpymasters}
                    />
                </div>
                <div className={classes.gameLogContainer}>
                    <GameLog logs={gameLogs} />
                </div>
                <div className={classes.clueInputContainer}>
                    <ClueInput />
                </div>
            </div>
        </Fragment>
    );
};

export default Game;
