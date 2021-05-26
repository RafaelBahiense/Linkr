import React, { useState } from "react";
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
import Login from "./components/Login";
import UserContext from "./contexts/UserContext";


export default function App() {
    const [user, setUser] = useState(null);
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Login setUser={setUser} />
                </Route>

                <Route path="/sign-up" exact>
                    <SignUp />
                </Route>

                <UserContext.Provider value={user}>
                    <Route path="/hashtag/:hashtag" exact>
                    </Route>

                    <Route path="/user/:id" exact>
                    </Route>

                    <Route path="/timeline" exact>
                        <CreatePost />
                        <Post />
                    </Route>

                    <Route path="/my-likes" exact>
                    </Route>

                    <Route path="/my-posts" exact>
                    </Route>
                </UserContext.Provider>
            </Switch>
        </Router>
    );
}

