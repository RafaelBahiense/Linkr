import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import "./styles/reset.css";
import "./styles/global.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UserContext from "./contexts/UserContext";
import Timeline from "./components/Timeline/Timeline.js";
import MyLikes from "./components/Timeline/MyLikes";
import MyPosts from "./components/Timeline/MyPosts";


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
                        <Timeline />
                    </Route>

                    <Route path="/my-likes" exact>
                        <MyLikes />
                    </Route>

                    <Route path="/my-posts" exact>
                        <MyPosts />
                    </Route>
                </UserContext.Provider>
            </Switch>
        </Router>
    );
}

