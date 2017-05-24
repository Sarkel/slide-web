/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 24/05/2017
 * @Description
 */
import {combineReducers} from "redux";
import {CHANGE_SLIDE, MASTER_STARTED_PRESENTATION} from "../action-types";

const initialSlideState = {
    currentSlide: null
};

const initialMasterState = {
    isStarted: false
};

function slide(state = initialSlideState, action) {
    switch (action.type) {
        case CHANGE_SLIDE:
            return Object.assign({}, state, {
                currentSlide: action.payload.currentSlide,
                currentSlideIdx: action.payload.currentSlideIdx
            });
        default:
            return state;
    }
}

function master(state = initialMasterState, action) {
    switch (action.type) {
        case MASTER_STARTED_PRESENTATION:
            return Object.assign({}, state, {isStarted: true});
        default:
            return state;
    }
}

export default combineReducers({
    slide,
    master
});

