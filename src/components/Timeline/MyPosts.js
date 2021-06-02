import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import useInterval from '@use-it/interval';

import TimelineLayout from "./TimelineLayout";
import UserContext from "../../contexts/UserContext";

export default function MyPosts() {
    const [posts, setPosts] =  useState(null);
    const {user, token} = useContext(UserContext);

    const history = useHistory();
    const [refresh, setRefresh] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    function refreshPosts () {
        setRefresh([...refresh]);
    }

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function loadPosts (idPost) {
        if (idPost) {
            const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/${user.id}/posts?olderThan=${idPost}`, config)
            request.then((response) => {
                if(response.data.posts.length > 0) {
                    setPosts([...posts,...response.data.posts]);
                } else {
                    setHasMore(false);
                }
            }).catch(() => {
                alert("Faça login novamente!");
                history.push("/");
            })
        } else {
            const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/${user.id}/posts`, config)
            request.then((response) => {
                posts
                ? setPosts([...new Set([...response.data.posts, ...posts])])
                : setPosts([...response.data.posts])
            }).catch(() => {
                alert("Faça login novamente!");
                history.push("/");
            })
        }
    }

    useEffect(() => {
        loadPosts();
    },[refresh]);

    useInterval(() => {
        refreshPosts();
    }, 15000)

    return (
        <TimelineLayout posts={posts} title={"my posts"} refreshPosts={refreshPosts} loadPosts={loadPosts} hasMore={hasMore}/>
    );
}