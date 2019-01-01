import React, { Component } from "react";
import ReactDOM from "react-dom";
import Topnavbar from "./layouts/Topnavbar";

import SignInComponent from "./auth/SignInComponent";
import SignUpComponent from "./auth/SignUpComponent";
import CreateComponent from "./project/CreateComponent";
import ProjectComponent from "./project/ProjectComponent";
import ListComponent from "./project/ListComponent";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducers from "../store/reducers/rootReducers";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducers , composeEnhancers(applyMiddleware(thunk)));

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            path: "/larael_pro/laravel_vue/public/"
        };
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Topnavbar />

                        <Route
                            exact
                            path={this.state.path + "signin"}
                            component={SignInComponent}
                        />
                        <Route
                            exact
                            path={this.state.path + "project"}
                            component={ProjectComponent}
                        />
                        <Route
                            path={this.state.path + "project/create"}
                            component={CreateComponent}
                        />
                        <Route
                            path={this.state.path + "project/list"}
                            component={ListComponent}
                        />

                        <Route
                            exact
                            path={this.state.path + "signup"}
                            component={SignUpComponent}
                        />
                    </div>
                </Router>
            </Provider>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render(<Index />, document.getElementById("app"));
}
