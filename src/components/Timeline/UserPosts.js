import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useEffect, useContext } from "react";

import TimelineLayout from "./TimelineLayout";
import UserContext from "../../contexts/UserContext";

export default function Timeline (props) {
    const [posts, setPosts] =  React.useState([]);
    const {token} = useContext(UserContext);

    const history = useHistory();

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/${props.userid}/posts,`, config)

        request.then((response) => {
            setPosts([...response.data.posts]);
        },).catch(() => {
            alert("Faça login novamente!");
            history.push("/");
        })
    },[]);

    return (
        <TimelineLayout posts={posts} title={`${props.userName}'s posts`}/>
    );
}