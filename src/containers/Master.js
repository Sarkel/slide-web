/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 24/05/2017
 * @Description
 */
import {connect} from "react-redux";
import Master from "../components/Master";
import {startPresentation} from "../actions";

const mapStateToProps = state => {
    return {
        isStarted: state.master.isStarted
    };
};

const mapDispatchToProps = dispatch => {
    return {
        startPresentation: event => dispatch(startPresentation())
    };
};

const MasterContainer = connect(mapStateToProps, mapDispatchToProps)(Master);

export default MasterContainer;