import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import React, { useEffect, useContext, useState } from "react";

import TimelineLayout from "../Timeline/TimelineLayout";
import UserContext from "../../contexts/UserContext";

const UserPosts = () => {
    const [posts, setPosts] = useState([]);
    const {token} = useContext(UserContext);
    const {id} = useParams();

    const history = useHistory();

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/${id}/posts`, config);

        request.then((res) => {
            setPosts(res.data.posts);
        },).catch(() => {
            alert("Faça login novamente!");
            history.push("/");
        })
    },[id]);

    return (
        <TimelineLayout posts={posts} avatar={posts[0] ? posts[0].user.avatar : ""} username={posts[0] ? posts[0].user.username : ""} id={posts[0] ? posts[0].user.id : ""} title={`${posts[0] ? posts[0].user.username : "carregando"}'s posts`} createPost={false} userPost={true}/>
    );
}

export default UserPosts;
