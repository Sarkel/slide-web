/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 24/05/2017
 * @Description
 */
import {connect} from "react-redux";
import Observer from "../components/Observer";

const mapStateToProps = state => {
    return {
        currentSlide: state.slide.currentSlide,
        currentSlideIdx: state.slide.currentSlideIdx
    };
};

const ObserverContainer = connect(mapStateToProps)(Observer);

export default ObserverContainer;