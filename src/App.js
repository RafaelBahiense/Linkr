import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./styles/reset.css";
import "./styles/global.css";
import Post from "./components/Post/Post";
import CreatePost from "./components/Post/CreatePost";


export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <CreatePost />
                    <Post />
                </Route>

                <Route path="/sign-up" exact>
                    
                </Route>

                <Route path="/hashtag/:hashtag" exact>
                </Route>

                <Route path="/user/:id" exact>
                </Route>

                <Route path="/timeline" exact>
                </Route>

                <Route path="/my-likes" exact>
                </Route>

                <Route path="/my-posts" exact>
                </Route>
            </Switch>
        </Router>
    );
}

