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
            setOtherUsersPosts([...response.data.posts.filter(post => post.user.id !== user.id)]);
        }).catch(() => {
            alert("Faça login novamente!");
            history.push("/");
        })
    }, [refresh]);

    useInterval(() => {
        refreshPosts();
    }, 15000)

    return (
        <TimelineLayout posts={otherUsersPosts} refreshPosts={refreshPosts} timeline={true} />
    );
}