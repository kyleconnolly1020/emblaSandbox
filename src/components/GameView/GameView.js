import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import { Button, Container, Row, Col } from 'react-bootstrap';
import PlayerWheel from '../PlayerWheel';

import { connect } from 'react-redux';
import { clearCurrentGame,  } from '../../actions/GameActions';

import { css } from 'aphrodite';
import { styles } from './GameViewStyles.js';
import { data } from '../../JSON/games.js';

class GameView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            enteredGame: {}
        };
    }



    mapWheelNodes(slots) {
        let wheelNodes = [];

        for (let i = 1; i <= slots; i++) {
            wheelNodes.push(
                <div className={css(styles.wheelNodeDisplay)}>{i}</div>
            )
        }
        return wheelNodes;
    }

    componentDidMount() {
        const pageid = this.props.match.params.id;
        console.log(pageid);
        console.log(data[0].gameid);
        for (let i = 0; i <= data.length; i++) {
            if (data[i].gameid == pageid) {
                this.setState({ enteredGame: data[i] });
                console.log(this.state.enteredGame);
                break;
            }
        }
    }

    componentWillUnmount() {
        this.props.clearCurrentGame();
    }

    render() {
       
        return (
            <div className={css(styles.gameView, styles.noSelect)}>
                <Row className={css(styles.gameViewTopBar)}>
                    <Link to="/" className={css(styles.gameViewBackButton)}><img src={require('../../images/backToHome.svg')} /></Link>
                </Row>


                {(this.state.enteredGame.gameid !== 0 && this.state.enteredGame.gameid != 2) && (
                    <PlayerWheel>
                        {this.mapWheelNodes(20)}
                    </PlayerWheel>
                )}
                {this.state.enteredGame.gameid == 2 && (
                    <PlayerWheel>
                        {this.mapWheelNodes(6)}
                    </PlayerWheel>
                )} 
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

export default withRouter(connect(mapStateToProps, {
    clearCurrentGame,
}
)(GameView));