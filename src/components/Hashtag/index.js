import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import React, { useEffect, useContext, useState } from "react";
import useInterval from '@use-it/interval';

import TimelineLayout from "../Timeline/TimelineLayout";
import UserContext from "../../contexts/UserContext";

const Hashtag = () => {
    const [posts, setPosts] = useState(null);
    const { token } = useContext(UserContext);
    const { hashtag } = useParams();

    const history = useHistory();
    const [refresh, setRefresh] = React.useState([]);

    function refreshPosts() {
        setRefresh([...refresh]);
    }

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/hashtags/${hashtag}/posts`, config);

        request.then((res) => {
            setPosts(res.data.posts);
        }).catch(() => {
            alert("Faça login novamente!");
            history.push("/");
        })
    }, [hashtag, refresh, token]);

    useInterval(() => {
        refreshPosts();
    }, 15000)

    return (
        <TimelineLayout posts={posts} title={`#${hashtag}`} refreshPosts={refreshPosts} createPost={false} />
    );
}

export default Hashtag;
