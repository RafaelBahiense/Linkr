import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import React, { useRef, useEffect, useContext, useState } from "react";
import useInterval from '@use-it/interval';

import TimelineLayout from "../Timeline/TimelineLayout";
import UserContext from "../../contexts/UserContext";

const Hashtag = () => {
    const [posts, setPosts] = useState(null);
    const { token } = useContext(UserContext);
    const { hashtag } = useParams();

    const history = useHistory();
    const [refresh, setRefresh] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const initialRender = useRef(true);

    function refreshPosts() {
        setRefresh([...refresh]);
    }

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function loadPosts (idPost) {
        if (idPost) {
            const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/hashtags/${hashtag}/posts?olderThan=${idPost}`, config)
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
            const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/hashtags/${hashtag}/posts`, config)
            request.then((response) => {
                posts
                ? setPosts([...response.data.posts, ...posts].filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i))
                : setPosts([...response.data.posts])
            }).catch(() => {
                alert("Faça login novamente!");
                history.push("/");
            })
        }
    }

    useEffect(() => {
        loadPosts();
    }, [refresh]);

    useEffect(() => {
        if (initialRender.current) {
          initialRender.current = false;
        } else {
            setPosts(null);
            refreshPosts();
        }
    }, [hashtag]);

    useInterval(() => {
        refreshPosts();
    }, 15000)

    return (
        <TimelineLayout posts={posts} title={`#${hashtag}`} refreshPosts={refreshPosts} loadPosts={loadPosts} hasMore={hasMore}/>
    );
}

export default Hashtag;
