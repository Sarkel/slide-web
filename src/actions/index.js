/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 24/05/2017
 * @Description
 */
import Reveal from "reveal.js";
import {CHANGE_SLIDE, MASTER_STARTED_PRESENTATION} from "../action-types";
import _ from "lodash";

function changeSlide(currentSlide, currentSlideIdx) {
    return {
        type: CHANGE_SLIDE,
        payload: {
            currentSlide,
            currentSlideIdx
        }
    }
}

function masterStarted() {
    return {
        type: MASTER_STARTED_PRESENTATION
    }
}

export function startPresentation() {
    return dispatch => {
        Reveal.initialize();
        Reveal.addEventListener( 'slidechanged', event => {
            dispatch(changeSlide(event.currentSlide, event.indexh));
        });
        dispatch(masterStarted());
        const slides = Reveal.getSlides();
        debugger;
        dispatch(changeSlide(!_.isEmpty(slides) ? slides[0] : null, 0));
    }
}