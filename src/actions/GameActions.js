/*
GameActions.js
These are actions that return information assocaited with Main Games
*/

import { gameActionTypes, pending_function, rejected_function, fulfilled_function } from '../constants/ActionConstants';

export function clearCurrentGame() {
    const { CLEAR_CURRENT_GAME } = gameActionTypes; 

    return function (dispatch) {
        dispatch(fulfilled_function(CLEAR_CURRENT_GAME)); 
    }
}


