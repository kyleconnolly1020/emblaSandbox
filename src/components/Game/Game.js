import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    Button,
    Col
} from "react-bootstrap";

import { css as cssAphro } from 'aphrodite';
import { styles } from './GameStyles.js';
import styled, { css, keyframes } from 'styled-components';

export default function Game(props) {
    const dash = keyframes`
        from {
            stroke-dashoffset: 792
        }
        to {
            stroke-dashoffset: 792 - (792 * (${props.game.fillStatusUsers}/${props.game.maxUsers}));
        }
    `
    const dashAnimation =
        css`
            ${dash} 1.5s linear forwards;
        `

    const Circle = styled.circle`
        width: 100%;
        height: 100%; 
        fill: none; 
        stroke-width: 15; 
        transform: translate(3.5%, 3.5%);
        stroke-dasharray: 792;
        stroke-dashoffset: calc(792 - (792 * (${props.game.fillStatusUsers}/${props.game.maxUsers})));
        animation: ${dashAnimation};
    `
    return (
        <Col md={4}>
            <Card className={cssAphro(styles.gameCard, styles.noSelect)}>
                <div className={cssAphro(styles.gameBodyWrapper)}>
                    <img className={cssAphro(styles.gameBodyBase)} src={require('../../images/coinBase.svg')} />
                    <Card.Body className={cssAphro(styles.gameBodyshadow)}>
                    <Link to={`/game/${props.game.gameid}`}>
                        <img className={cssAphro(styles.gameHashMarks)} src={require('../../images/coinHashMarks.svg')} />
                    </Link>

                        <div className={cssAphro(styles.prizeTextContainer)}>
                            <div className={cssAphro(styles.prizeValue)}>Click</div>
                            <div className={cssAphro(styles.prizeText)}></div>
                            {//PUT CANNONBALL COUNT COMPONENT HERE
                            }
                        </div>
                        <svg className={cssAphro(styles.progressBorderSVG)}>
                            <defs>
                                <linearGradient id="linear" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stop-color="#FFE500" />
                                    <stop offset="100%" stop-color="#FAC51C" />
                                </linearGradient>
                            </defs>
                            <Circle stroke="url(#linear)" cx="128" cy="130" r="128"></Circle>
                        </svg>
                        <svg className={cssAphro(props.game.fillStatusUsers < 10 && styles.enteredPlayersSVG, (10 <= props.game.fillStatusUsers && props.game.fillStatusUsers < 100) && styles.enteredPlayersSVG2, (100 <= props.game.fillStatusUsers && props.game.fillStatusUsers < 1000) && styles.enteredPlayersSVG3, (1000 <= props.game.fillStatusUsers && props.game.fillStatusUsers < 10000) && styles.enteredPlayersSVG4)} viewBox="0 0 220 220">
                            <path id="curveText" d="M0,110a110,110 0 1,0 220,0a110,110 0 1,0 -220,0" fill="transparent" />
                            <text className={cssAphro(styles.enteredPlayersText)} width="220">
                                <textPath alignment-baseline="bottom" xlinkHref="#curveText">
                                    {props.game.fillStatusUsers} PLAYERS IN
                                </textPath>
                            </text>
                        </svg>
                    </Card.Body>

                </div>
                <Card.Footer className={cssAphro(styles.gameFooter)}>
                <Link to={`/game/${props.game.gameid}`}><Button className={cssAphro(styles.joinGameButton)}>Click</Button></Link><br />
                   
                    <div className={cssAphro((Number(props.game.fillStatusUsers / props.game.maxUsers) < 0.95) && (props.game.maxUsers - props.game.fillStatusUsers >= 5) ? styles.remainingSlotsOpaque : styles.remainingSlots)}>{(props.game.maxUsers - props.game.fillStatusUsers)}{(Number(props.game.fillStatusUsers / props.game.maxUsers) < 0.95) && (props.game.maxUsers - props.game.fillStatusUsers >= 5) ? ' Slots Remaining' : ' Slots Left!'}</div>
                </Card.Footer>
            </Card>
        </Col>
    );
}