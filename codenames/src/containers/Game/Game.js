import React, { Fragment, useState, useEffect } from 'react';
import classes from './Game.module.css';
import Topbar from '../../components/Topbar/Topbar';
import Banner from '../../components/PromptBanner/PromptBanner';
import TeamCard from '../../components/TeamCard/TeamCard';
import CardMat from '../../components/CardMat/CardMat';
import GameLog from '../../components/GameLog/GameLog';
import ClueInput from '../../components/ClueInput/ClueInput';
import Backdrop from '../../components/Backdrop/Backdrop';
import * as GameActions from '../../store/actions/allActions';
import GameFunctions from '../../functions/gameFunctions';
import { connect } from 'react-redux';
import { io } from 'socket.io-client';

console.log(GameFunctions.default);

const options = {
    secure: true,

    reconnect: true,

    rejectUnauthorized: false,
};

let socket = io.connect('http://localhost:9999', options);

socket
    .off('connectedAcknowledgementEvent')
    .on('connectedAcknowledgementEvent', () => {
        console.log('connected!');
    });

/*const setPlayerRole = (props, role) => {
    if (props.playerRole && props.playerTeam) {
        if (props.playerRole === 'operative') {
            if (props.playerTeam === 'red') {
                removeRedOperative(props,props.playerName);
            } else if (props.playerTeam === 'blue') {
                removeBlueOperative(props,props.playerName);
            }
        } else if (props.playerRole === 'spymaster') {
            if (props.playerTeam === 'red') {
                removeRedSpymaster(props,props.playerName);
            } else if (props.playerTeam === 'blue') {
                removeBlueSpymaster(props,props.playerName);
            }
        }
    }
    if (role === 'operative') {
        if (props.playerTeam === 'red') {
            addRedOperative(props, props.playerName);
        } else if (props.playerTeam === 'blue') {
            addBlueOperative(props, props.playerName);
        }
    } else if (role === 'spymaster') {
        if (props.playerTeam === 'red') {
            addRedSpymaster(props, props.playerName);
        } else if (props.playerTeam === 'blue') {
            addBlueSpymaster(props, props.playerName);
        }
    }
    props.setPlayerRole(role);
};

const setPlayerTeam = (props, team) => {
    if (props.playerRole && props.playerTeam) {
        if (props.playerRole === 'operative') {
            if (props.playerTeam === 'red') {
                removeRedOperative(props,props.playerName);
            } else if (props.playerTeam === 'blue') {
                removeBlueOperative(props,props.playerName);
            }
        } else if (props.playerRole === 'spymaster') {
            if (props.playerTeam === 'red') {
                removeRedSpymaster(props,props.playerName);
            } else if (props.playerTeam === 'blue') {
                removeBlueSpymaster(props,props.playerName);
            }
        }
    }
    if (props.playerRole === 'operative') {
        if (team === 'red') {
            addRedOperative(props, props.playerName);
        } else if (team === 'blue') {
            addBlueOperative(props, props.playerName);
        }
    } else if (props.playerRole === 'spymaster') {
        if (team === 'red') {
            addRedSpymaster(props, props.playerName);
        } else if (team === 'blue') {
            addBlueSpymaster(props, props.playerName);
        }
    }
    props.setPlayerTeam(team);
};*/

const shouldShowClueInput = (turn, playerTeam, playerRole) => {
    if (turn === 1 && playerTeam === 'blue' && playerRole === 'spymaster') {
        return true;
    } else if (
        turn === 3 &&
        playerTeam === 'red' &&
        playerRole === 'spymaster'
    ) {
        return true;
    } else {
        return false;
    }
};

const shouldShowJoinButtons = (playerTeam, playerRole) => {
    if (playerTeam || playerRole) {
        return false;
    } else {
        return true;
    }
};

const initPlayerTeamAndRole = (props, team, role) => {
    if (props.playerTeam || props.playerRole) {
        console.log('role or team is already set!');
    } else {
        props.setPlayerRole(role);
        props.setPlayerTeam(team);
        if (role === 'operative') {
            if (team === 'red') {
                addRedOperative(props, props.playerName);
            } else if (team === 'blue') {
                addBlueOperative(props, props.playerName);
            }
        } else if (role === 'spymaster') {
            if (team === 'red') {
                addRedSpymaster(props, props.playerName);
            } else if (team === 'blue') {
                addBlueSpymaster(props, props.playerName);
            }
        }
    }
};

const setClue = (props, clue) => {
    props.setClue(clue);
};

const setNumber = (props, number) => {
    props.setNumber(number);
    props.setTaps(+number + 1);
};

const endTurn = props => {
    if (
        props.turn === 3 &&
        props.playerTeam === 'red' &&
        props.playerRole === 'spymaster'
    ) {
        props.addLog({
            type: 'clue',
            name: props.playerName,
            clue: props.clue,
            team: props.playerTeam,
            number: props.number,
        });
        props.addLog({
            type: 'endTurn',
            name: props.playerName,
            team: props.playerTeam,
        });
    } else if (
        props.turn === 1 &&
        props.playerTeam === 'blue' &&
        props.playerRole === 'spymaster'
    ) {
        props.addLog({
            type: 'clue',
            name: props.playerName,
            clue: props.clue,
            team: props.playerTeam,
            number: props.number,
        });
        props.addLog({
            type: 'endTurn',
            name: props.playerName,
            team: props.playerTeam,
        });
    } else if (
        props.turn === 2 &&
        props.playerTeam === 'blue' &&
        props.playerRole === 'operative'
    ) {
        props.addLog({
            type: 'endGuessing',
            name: props.playerName,
            role: props.playerRole,
        });
    } else if (
        props.turn === 4 &&
        props.playerTeam === 'red' &&
        props.playerRole === 'operative'
    ) {
        props.addLog({
            type: 'endGuessing',
            name: props.playerName,
            role: props.playerRole,
        });
    }
    props.endTurn();
};

const addRedOperative = (props, name) => {
    props.addRedOperative(name);
};

const addBlueOperative = (props, name) => {
    props.addBlueOperative(name);
};

const addRedSpymaster = (props, name) => {
    props.addRedSpymaster(name);
};

const addBlueSpymaster = (props, name) => {
    props.addBlueSpymaster(name);
};

const removeRedOperative = (props, name) => {
    props.removeRedOperative(name);
};

const removeBlueOperative = (props, name) => {
    props.removeBlueOperative(name);
};

const removeRedSpymaster = (props, name) => {
    props.removeRedSpymaster(name);
};

const removeBlueSpymaster = (props, name) => {
    props.removeBlueSpymaster(name);
};

const redWin = props => {
    props.redWin();
};

const blueWin = props => {
    console.log('blue Won!');
    props.blueWin();
};

const tapCard = (
    props,
    word,
    numberOfBlueCardsLeft,
    numberOfRedCardsLeft,
    redWin,
    blueWin
) => {
    let isAppropriateBlueTap =
        props.turn === 2 &&
        props.playerTeam === 'blue' &&
        props.playerRole === 'operative';
    let isAppropriateRedTap =
        props.turn === 4 &&
        props.playerTeam === 'red' &&
        props.playerRole === 'operative';
    if (isAppropriateBlueTap || isAppropriateRedTap) {
        let correct = false;
        props.revealCard(word);
        let cards = props.cards.filter(el => el.word === word);
        if (cards[0].type === props.playerTeam) {
            correct = true;
        }
        props.addLog({
            type: 'tap',
            name: props.playerName,
            word: word,
            team: props.playerTeam,
        });
        props.decrementTaps();
        if (
            GameFunctions.gameHasEnded(
                props.cards,
                props.turn,
                word,
                numberOfBlueCardsLeft,
                numberOfRedCardsLeft
            )
        ) {
            if (
                GameFunctions.gameHasEnded(
                    props.cards,
                    props.turn,
                    word,
                    numberOfBlueCardsLeft,
                    numberOfRedCardsLeft
                ) === 1
            ) {
                redWin(props);
            } else if (
                GameFunctions.gameHasEnded(
                    props.cards,
                    props.turn,
                    word,
                    numberOfBlueCardsLeft,
                    numberOfRedCardsLeft
                ) === 2
            ) {
                blueWin(props);
            } else {
                console.log('invalid winner');
            }
            return;
        }
        if (correct) {
            console.log(props.taps);
            if (props.taps === 1) {
                //^might screw me over later idk
                endTurn(props);
            }
        } else {
            endTurn(props);
        }
    } else {
        console.log('incorrect tap');
    }
};

const switchPlayerRole = props => {
    if (props.playerRole && props.playerTeam) {
        if (props.playerRole === 'operative') {
            if (props.playerTeam === 'red') {
                removeRedOperative(props, props.playerName);
                addRedSpymaster(props, props.playerName);
            } else if (props.playerTeam === 'blue') {
                removeBlueOperative(props, props.playerName);
                addBlueSpymaster(props, props.playerName);
            }
        } else if (props.playerRole === 'spymaster') {
            if (props.playerTeam === 'red') {
                removeRedSpymaster(props, props.playerName);
                addRedOperative(props, props.playerName);
            } else if (props.playerTeam === 'blue') {
                removeBlueSpymaster(props, props.playerName);
                addBlueOperative(props, props.playerName);
            }
        }
    }
    props.switchPlayerRole();
};

const switchPlayerTeam = props => {
    if (props.playerRole && props.playerTeam) {
        if (props.playerRole === 'operative') {
            if (props.playerTeam === 'red') {
                removeRedOperative(props, props.playerName);
                addBlueOperative(props, props.playerName);
            } else if (props.playerTeam === 'blue') {
                removeBlueOperative(props, props.playerName);
                addRedOperative(props, props.playerName);
            }
        } else if (props.playerRole === 'spymaster') {
            if (props.playerTeam === 'red') {
                removeRedSpymaster(props, props.playerName);
                addBlueSpymaster(props, props.playerName);
            } else if (props.playerTeam === 'blue') {
                removeBlueSpymaster(props, props.playerName);
                addRedSpymaster(props, props.playerName);
            }
        }
    }
    props.switchPlayerTeam();
};

const resetFunction = props => {
    switchPlayerRole(props);
};

const playerFunction = props => {
    switchPlayerTeam(props);
};

const Game = props => {
    let numberOfPlayers = props.playerCount;
    let username = props.playerName;
    let showBanner = true;
    let cards = props.cards;
    let numberOfRedCardsLeft = GameFunctions.getCardsByType(cards, 'red');
    let numberOfBlueCardsLeft = GameFunctions.getCardsByType(cards, 'blue');
    let redSpymasters = props.redSpymasters;
    let redOperatives = props.redOperatives;
    let blueSpymasters = props.blueSpymasters;
    let blueOperatives = props.blueOperatives;
    let gameLogs = props.logs;
    console.log(GameFunctions);
    let backdropType = GameFunctions.backdropColorFunction(props.turn);
    let showJoin = shouldShowJoinButtons(props.playerTeam, props.playerRole);

    const [bannerState, setBannerState] = useState('');

    let bannerCode = null;

    console.log(bannerState);
    if (bannerState) {
        bannerCode = <Banner show={showBanner} text={bannerState} />;
    }
    console.log(props.turn);
    useEffect(() => {
        console.log('effecting');
        switch (props.turn) {
            case 1:
                if (props.playerTeam === 'red') {
                    setBannerState('Wait for blue spymaster to give clue');
                } else if (props.playerTeam === 'blue') {
                    if (props.playerRole === 'operative') {
                        setBannerState('Wait for yout spymaster to give clue');
                    } else if (props.playerRole === 'spymaster') {
                        console.log('spying');
                        setBannerState('Give your operatives a clue');
                    }
                }
                break;
            case 2:
                if (props.playerTeam === 'red') {
                    setBannerState(
                        'Wait for other team team to end their turn'
                    );
                } else if (props.playerTeam === 'blue') {
                    if (props.playerRole === 'operative') {
                        setBannerState('Select cards based on clue');
                    } else if (props.playerRole === 'spymaster') {
                        setBannerState('Your operatives are working');
                    }
                }
                break;
            case 3:
                if (props.playerTeam === 'red') {
                    if (props.playerRole === 'operative') {
                        setBannerState('Wait for your spymaster to give clue');
                    } else if (props.playerRole === 'spymaster') {
                        setBannerState('Give your operatives a clue');
                    }
                } else if (props.playerTeam === 'blue') {
                    setBannerState('Wait for red spymaster to give clue');
                }
                break;
            case 4:
                if (props.playerTeam === 'red') {
                    if (props.playerRole === 'operative') {
                        setBannerState('Select cards based on clue');
                    } else if (props.playerRole === 'spymaster') {
                        setBannerState('Your operatives are working');
                    }
                } else if (props.playerTeam === 'blue') {
                    setBannerState('Wait for other team to end their turn');
                }
                break;
            case 5:
                setBannerState('Blue team wins!');
                break;
            case 6:
                setBannerState('Red team wins!');
                break;
            default:
                console.log('invalid turn');
        }
    }, [props.turn, props.playerRole, props.playerTeam]);

    console.log(bannerState);

    let parentContainerClasses = [classes.container];

    let showClueInput = false;

    if (shouldShowClueInput(props.turn, props.playerTeam, props.playerRole)) {
        showClueInput = true;
    }

    let clueInputCode = null;

    if (showClueInput) {
        clueInputCode = (
            <ClueInput
                setClue={clue => setClue(props, clue)}
                setNumber={number => setNumber(props, number)}
                endTurn={() => endTurn(props)}
            />
        );
    }

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
                        resetFunction={() => resetFunction(props)}
                        playerFunction={() => playerFunction(props)}
                    />
                </div>
                <div className={classes.bannerContainer}>{bannerCode}</div>
                <div className={classes.redTeamCardContainer}>
                    <TeamCard
                        team='red'
                        numberOfCardsLeft={numberOfRedCardsLeft}
                        operativesList={redOperatives}
                        spymastersList={redSpymasters}
                        showJoin={showJoin}
                        joinPlayer={role =>
                            initPlayerTeamAndRole(props, 'red', role)
                        }
                    />
                </div>
                <div className={classes.cardMatContainer}>
                    <CardMat
                        cards={cards}
                        role={props.playerRole}
                        tap={word =>
                            tapCard(
                                props,
                                word,
                                numberOfBlueCardsLeft,
                                numberOfRedCardsLeft,
                                redWin,
                                blueWin
                            )
                        }
                    />
                </div>
                <div className={classes.blueTeamCardContainer}>
                    <TeamCard
                        team='blue'
                        numberOfCardsLeft={numberOfBlueCardsLeft}
                        operativesList={blueOperatives}
                        spymastersList={blueSpymasters}
                        showJoin={showJoin}
                        joinPlayer={role =>
                            initPlayerTeamAndRole(props, 'blue', role)
                        }
                    />
                </div>
                <div className={classes.gameLogContainer}>
                    <GameLog logs={gameLogs} />
                </div>
                <div className={classes.clueInputContainer}>
                    {clueInputCode}
                </div>
            </div>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        turn: state.game,
        playerRole: state.player.role,
        playerTeam: state.player.team,
        playerCount: state.room.playerCount,
        playerName: state.player.name,
        cards: state.cards,
        redOperatives: state.room.redOperatives,
        redSpymasters: state.room.redSpymasters,
        blueOperatives: state.room.blueOperatives,
        blueSpymasters: state.room.blueSpymasters,
        logs: state.log,
        clue: state.clue.clue,
        number: state.clue.number,
        taps: state.room.tapsLeft,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setPlayerRole: role => dispatch(GameActions.setPlayerRole(role)),
        setPlayerTeam: team => dispatch(GameActions.setPlayerTeam(team)),
        setClue: clue => dispatch(GameActions.setClue(clue)),
        setNumber: number => dispatch(GameActions.setNumber(number)),
        setTaps: taps => dispatch(GameActions.setTaps(taps)),
        endTurn: () => dispatch(GameActions.incrementGameState()),
        addLog: log => dispatch(GameActions.addLog(log)),
        decrementTaps: () => dispatch(GameActions.decrementTaps()),
        revealCard: word => dispatch(GameActions.revealCard(word)),
        switchPlayerTeam: () => dispatch(GameActions.switchPlayerTeam()),
        switchPlayerRole: () => dispatch(GameActions.switchPlayerRole()),
        addRedOperative: name => dispatch(GameActions.addRedOperative(name)),
        addBlueOperative: name => dispatch(GameActions.addBlueOperative(name)),
        addRedSpymaster: name => dispatch(GameActions.addRedSpymaster(name)),
        addBlueSpymaster: name => dispatch(GameActions.addBlueSpymaster(name)),
        removeRedOperative: name =>
            dispatch(GameActions.removeRedOperative(name)),
        removeBlueOperative: name =>
            dispatch(GameActions.removeBlueOperative(name)),
        removeRedSpymaster: name =>
            dispatch(GameActions.removeRedSpymaster(name)),
        removeBlueSpymaster: name =>
            dispatch(GameActions.removeBlueSpymaster(name)),
        redWin: () => dispatch(GameActions.redWin()),
        blueWin: () => dispatch(GameActions.blueWin()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
