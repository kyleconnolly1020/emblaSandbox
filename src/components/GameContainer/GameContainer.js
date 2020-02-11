import React from 'react';
import Game from '../Game';
import { Container, Row, Col } from 'react-bootstrap';

import { connect } from 'react-redux'; 

import { css } from 'aphrodite';
import { styles } from './GameContainerStyles.js';

import { data } from '../../JSON/games.js'; 

class GameContainer extends React.Component {

    createGameRows(gameList) {
        let gameSetArray = [];
        let tempGameArray = [];
        for (let i = 0; i < gameList.length; i++) {
            if (Number.isInteger(i / 3) && i / 3 !== 0) {
                gameSetArray.push(tempGameArray);
                tempGameArray = [];
                tempGameArray.push(gameList[i]);
            }
            else {
                tempGameArray.push(gameList[i]);
            }
        }
        if (tempGameArray !== []) {
            gameSetArray.push(tempGameArray);
        }
        return gameSetArray;
    }

    mapGameRows(gameSetArray) {
        let gameGrid = gameSetArray.map((gameSet) =>
            <Row>
                {gameSet.map((game) =>
                    <Game game={game}></Game>
                )}
            </Row>
        );
        return gameGrid;
    }

    renderGames() {
        return this.mapGameRows(this.createGameRows(data));

    }

    componentDidMount() {
    }

    render() {
        this.createGameRows(this.props.gamesList);

        return (
            <>
                <br />
                <br />
                <br />
                <Container className={css(styles.containerBounds)}>
                    {this.renderGames()}
                </Container>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        gamesList: state.gameReducer.gamesList
    }
}

export default connect(mapStateToProps, {
})(GameContainer);