import React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import Master from "./containers/Master";
import Observer from "./containers/Observer";
import {Provider} from "react-redux";
import configureStore from "./store";

const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Switch>
                        <Route strict path="/master" component={Master}/>
                        <Route strict path="/observer" component={Observer}/>
                    </Switch>
                </HashRouter>
            </Provider>
        );
    }
}

export default App;
