import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                </Route>
                
                <Route path="/sign-up">
                </Route>

                <Route path="/hashtag/:hashtag">
                </Route>

                <Route path="/user/:id">
                </Route>

                <Route path="/timeline">
                </Route>

                <Route path="/my-likes">
                </Route>

                <Route path="/my-posts">
                </Route>
            </Switch>
        </Router>
    );
}