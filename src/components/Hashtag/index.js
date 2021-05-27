import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import React, { useEffect, useContext, useState } from "react";

import TimelineLayout from "../Timeline/TimelineLayout";
import UserContext from "../../contexts/UserContext";

const Hashtag = () => {
    const [posts, setPosts] = useState([]);
    const {token} = useContext(UserContext);
    const {hashtag} = useParams();

    const history = useHistory();

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/hashtags/${hashtag}/posts`, config);

        request.then((res) => {
            setPosts(res.data.posts);
        },).catch(() => {
            alert("Faça login novamente!");
            history.push("/");
        })
    },[hashtag]);

    return (
        <TimelineLayout posts={posts} title={`#${hashtag}`} createPost={false}/>
    );
}

export default Hashtag;
