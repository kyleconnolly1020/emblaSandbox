/*
InterestsActions.js
These are actions that return information assocaited with Interests Feature on the Ads Page
*/

import { interestsActionTypes, pending_function, rejected_function, fulfilled_function } from '../constants/ActionConstants';
import axios from 'axios';

export function showMoreInterestsTodo() {
    const { SHOW_MORE_INTERESTS_TODO } = interestsActionTypes;

    return function(dispatch) {
        dispatch(fulfilled_function(SHOW_MORE_INTERESTS_TODO)); 
    }
}

export function showMoreInterestsGeneral() {
    const { SHOW_MORE_INTERESTS_GENERAL } = interestsActionTypes;

    return function(dispatch) {
        dispatch(fulfilled_function(SHOW_MORE_INTERESTS_GENERAL));
    }
}

export function hideInterestsToDo() {
    const { HIDE_INTERESTS_TODO } = interestsActionTypes; 
    
    return function(dispatch) {
        dispatch(fulfilled_function(HIDE_INTERESTS_TODO)); 
    }
}

export function hideInterestsGeneral() {
    const { HIDE_INTERESTS_GENERAL } = interestsActionTypes; 

    return function(dispatch) {
        dispatch(fulfilled_function(HIDE_INTERESTS_GENERAL)); 
    }
}