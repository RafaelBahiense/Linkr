import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "./styles/reset.css";
import "./styles/global.css";
import Post from "./components/Post/Post";
import CreatePost from "./components/Post/CreatePost";
import SignUp from "./components/SignUp";
import Timeline from "./components/Timeline/TimelineLayout.js";


export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <CreatePost />
                    <Post />
                </Route>

                <Route path="/sign-up" exact>
                    <SignUp />
                </Route>

                <Route path="/hashtag/:hashtag" exact>
                </Route>

                <Route path="/user/:id" exact>
                </Route>

                <Route path="/timeline" exact>
                    <Timeline />
                </Route>

                <Route path="/my-likes" exact>
                </Route>

                <Route path="/my-posts" exact>
                </Route>
            </Switch>
        </Router>
    );
}

