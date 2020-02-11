import { blankGame, gameActionTypes, pending, rejected, fulfilled, serverEnvironment } from '../constants/ActionConstants';

export default function reducer(state = {
    currentGame: blankGame,
    gamesList: [], 
    leaderboard: []
}, action) {
    switch (action.type) {
        case fulfilled(gameActionTypes.CLEAR_CURRENT_GAME): 
            return {
                ...state, 
                currentGame: blankGame
            }
        default:
            return state;
    }
};
