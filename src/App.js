import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./styles.css";
import Post from "./components/Post/Post";
import CreatePost from "./components/Post/CreatePost";


export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <CreatePost />
                    <Post />
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

