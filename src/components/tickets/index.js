import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Create from "./create";
import View from "./view";

class Tickets extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route path={`${this.props.match.path}/create`} component={Create}/>
                <Route exact path={`${this.props.match.path}`} component={View}/>
            </Switch>);
    }
}

export default Tickets;