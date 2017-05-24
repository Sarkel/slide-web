/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 24/05/2017
 * @Description
 */
import React from "react";
import PropTypes from "prop-types";
import {Parser} from "html-to-react";

class ObserverDetails extends React.Component {
    static propTypes = {
        slide: PropTypes.any.isRequired,
        slideIdx: PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);
        this.htmlToReactParser = Parser();
    }

    render() {// todo: find out how to reinit reveal
        return (
            <div style={{height: '100vh'}}>
                <div>Current slide number: {this.props.slideIdx + 1}</div>
                <div className="reveal">
                    <div className="slides">
                        {this.htmlToReactParser.parse(this.props.slide.outerHTML)}
                    </div>
                </div>
            </div>
        );
    }
}

export default ObserverDetails;