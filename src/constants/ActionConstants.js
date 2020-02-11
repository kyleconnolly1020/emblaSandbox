/*
    ActionConstants.js

    Created by Kyle Connolly
*/


export const pending = function (status) {
    return status.concat("_PENDING");

}

export const rejected = function (status) {
    return status.concat("_REJECTED");
}

export const fulfilled = function (status) {
    return status.concat("_FULFILLED");
}

export function pending_function(type) {
    return {
        type: pending(type)
    }
}

export function rejected_function(type, err) {
    return {
        type: rejected(type),
        payload: err
    }
}

export function fulfilled_function(type, res) {
    return {
        type: fulfilled(type),
        payload: res
    }
}

export const blankGame = {
    id: 0, maxUsers: 0, entryValue: 0, prizeValue: 0, filled: false, templateID: 0, leaderboard: 0, fillStatusFiat: 0, fillStatusUsers: 0, userEntered: false, cannonsGiven: 0, players: [], id: 0, name: ""
};

export const gameActionTypes = {
    CLEAR_CURRENT_GAME: "CLEAR_CURRENT_GAME"
};

export const interestsActionTypes = {
    SHOW_MORE_INTERESTS_TODO: "SHOW_MORE_INTERESTS_TODO",
    SHOW_MORE_INTERESTS_GENERAL: "SHOW_MORE_INTERESTS_GENERAL",
    HIDE_INTERESTS_TODO: "HIDE_INTERESTS_TODO", 
    HIDE_INTERESTS_GENERAL: "HIDE_INTERESTS_GENERAL"
};

export const menuActionTypes = {
    OPEN_USER_MENU: "OPEN_USER_MENU",
    CLOSE_USER_MENU: "CLOSE_USER_MENU", 
    PLAY_AD_CONTENT: "PLAY_AD_CONTENT", 
    PLAY_ALL_CONTENT: "PLAY_ALL_CONTENT", 
    STOP_AD_CONTENT: "STOP_AD_CONTENT",
    STOP_ALL_CONTENT: "STOP_ALL_CONTENT"
};


    