import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import GameContainer from '../GameContainer';
import GameView from '../GameView'; 

import { Container, Row, Col } from 'react-bootstrap';


import { connect } from 'react-redux';

import { css } from 'aphrodite';
import { styles } from './HomeStyles.js';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <Router>
                <div className={css(styles.plndrViewContainer)}>
                    <Route path='/'>
                        <Switch>
                            <Route path='/game/:id'>
                                <GameView />
                            </Route>
                            <Route path='/'>
                                <Row className={css(styles.homeContentRow)}>
                                    <Col md={8}>
                                        <Switch>
                                            <Route path='/'>
                                                <GameContainer className={css(styles.gameContainer)} />
                                            </Route>
                                        </Switch>
                                    </Col>
                                </Row>
                            </Route>
                        </Switch>
                    </Route>
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps, {
})(Home);