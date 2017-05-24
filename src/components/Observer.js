/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 24/05/2017
 * @Description
 */
import React from "react";
import PropTypes from "prop-types";
import ObserverDetails from "./ObserverDetails";
import SlideError from "./SlideError";
import _ from "lodash";

class Observer extends React.Component {
    static propTypes = {
        currentSlide: PropTypes.any,
        currentSlideIdx: PropTypes.number
    };

    render() {
        return _.isNil(this.props.currentSlide) || _.isNil(this.props.currentSlideIdx) ?
            <SlideError/> :
            <ObserverDetails slide={this.props.currentSlide} slideIdx={this.props.currentSlideIdx}/>;
    }
}

export default Observer;