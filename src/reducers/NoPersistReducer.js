//THIS IS A BLACKLISTED REDUCER - i.e. The values contained within will not be persisted. 
//Keep this in mind if you want any values to be persisted

import { interestsActionTypes, menuActionTypes, pending, rejected, fulfilled } from '../constants/ActionConstants';

export default function reducer(state = {
    //Is the userMenu open? 
    userMenu: false, 
    //Should the specific ad/content play?
    playAdContent: false,
    //Global Flag for ad/content playing (used to control DOM Rendering) 
    contentPlaying: false, 
    //Dicatates how many rows of interests are displayed to the user
    toDoRowRender: 0, 
    generalRowRender: 0

}, action) {
    switch (action.type) {
        default:
            return state;
    }
};