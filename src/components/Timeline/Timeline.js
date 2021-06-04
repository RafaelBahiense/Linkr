import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import useInterval from '@use-it/interval';
import TimelineLayout from "./TimelineLayout";
import UserContext from "../../contexts/UserContext";

export default function Timeline() {
    const { token, user } = useContext(UserContext);

    const history = useHistory();
    const [refresh, setRefresh] = useState([]);
    const [otherUsersPosts, setOtherUsersPosts] = useState(null);
    const [hasMore, setHasMore] = useState(true);

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
            const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/following/posts?olderThan=${idPost}`, config)
            request.then((response) => {
                if(response.data.posts.length > 0) {
                    setOtherUsersPosts([...otherUsersPosts,...response.data.posts.filter(post => post.user.id !== user.id)]);
                } else {
                    setHasMore(false);
                }
            }).catch(() => {
                alert("Faça login novamente!");
                history.push("/");
            })
        } else {
            const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/following/posts`, config)
            request.then((response) => {
                otherUsersPosts
                ? setOtherUsersPosts([...response.data.posts.filter(post => post.user.id !== user.id), ...otherUsersPosts].filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i))
                : setOtherUsersPosts([...response.data.posts.filter(post => post.user.id !== user.id)])
            }).catch(() => {
                alert("Faça login novamente!");
                history.push("/");
            })
        }
    }

    useEffect(() => {
        loadPosts();
    }, [refresh]);

    useInterval(() => {
        refreshPosts();
    }, 15000)

    return (
        <TimelineLayout posts={otherUsersPosts} refreshPosts={refreshPosts} timeline={true} loadPosts={loadPosts} hasMore={hasMore}/>
    );
}