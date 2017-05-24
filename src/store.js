/**
 * @Author Sebastian Kubalski
 * @Email sebastian.kubalski@gmail.com
 * @Date Creation 24/05/2017
 * @Description
 */
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers";
import {createLogger} from "redux-logger"
import thunk from "redux-thunk";
const logger = createLogger();

export default function configureStore() {
    return createStore(
        reducers,
        applyMiddleware(
            thunk,
            logger
        )
    );
}