import { menuActionTypes, pending_function, rejected_function, fulfilled_function } from '../constants/ActionConstants';


export function openUserMenu() {
    const { OPEN_USER_MENU } = menuActionTypes; 

    return function (dispatch) {
        dispatch(fulfilled_function(OPEN_USER_MENU)); 
    }
}

export function closeUserMenu() {
    const { CLOSE_USER_MENU } = menuActionTypes; 

    return function(dispatch) {
        dispatch(fulfilled_function(CLOSE_USER_MENU)); 
    }

}
export function playAdContent() {
    const { PLAY_AD_CONTENT } = menuActionTypes;

    return function(dispatch) {
        dispatch(fulfilled_function(PLAY_AD_CONTENT)); 
    }
}

export function playAllContent() {
    const { PLAY_ALL_CONTENT } = menuActionTypes; 

    return function(dispatch) {
        dispatch(fulfilled_function(PLAY_ALL_CONTENT)); 
    }
}

export function stopAdContent() {
    const { STOP_AD_CONTENT } = menuActionTypes;

    return function(dispatch) {
        dispatch(fulfilled_function(STOP_AD_CONTENT));
    }
}

export function stopAllContent() {
    const { STOP_ALL_CONTENT } = menuActionTypes;

    return function(dispatch) {
        dispatch(fulfilled_function(STOP_ALL_CONTENT)); 
    }
}