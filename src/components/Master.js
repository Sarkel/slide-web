/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 24/05/2017
 * @Description
 */
import React from "react";
import "reveal.js/css/reveal.css";
import "reveal.js/css/theme/white.css";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class Master extends React.Component {
    static propTypes = {
        startPresentation: PropTypes.func.isRequired,
        isStarted: PropTypes.bool.isRequired
    };

    render() {
        return (
            <div style={{height: '100vh'}}>
                {
                    this.props.isStarted ?
                        <Link to="/observer">Go to slide</Link> :
                        <button onClick={this.props.startPresentation}>Start presentation</button>
                }
                <div className="reveal">
                    <div className="slides">
                        <section>
                            <div>Slide 1</div>
                        </section>
                        <section>
                            <div>Slide 2</div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Master;