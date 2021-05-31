import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";

import TimelineLayout from "./TimelineLayout";
import UserContext from "../../contexts/UserContext";

export default function Timeline(props) {
    const [myPosts, setMyPosts] = useState([]);
    const { token, user } = useContext(UserContext);

    const history = useHistory();
    const [refresh, setRefresh] = useState([]);
    const [otherUsersPosts, setOtherUsersPosts] = useState([]);

    function refreshPosts() {
        setRefresh([...refresh]);
    }

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/following/posts", config)
        request.then((response) => {
            setMyPosts([...response.data.posts]);
            setOtherUsersPosts([...response.data.posts.filter(post => post.user.id !== user.id)]);
        }).catch(() => {
            alert("Faça login novamente!");
            history.push("/");
        })
    }, [refresh]);

    return (
        <TimelineLayout posts={otherUsersPosts} createPost={true} refreshPosts={refreshPosts} timeline={true} />
    );
}