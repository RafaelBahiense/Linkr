import axios from "axios";
import { useHistory } from "react-router-dom";
import React, { useEffect, useContext } from "react";

import TimelineLayout from "./TimelineLayout";
import UserContext from "../../contexts/UserContext";

export default function MyLikes (props) {
    const [posts, setPosts] =  React.useState([]);
    const {token} = useContext(UserContext);

    const history = useHistory();
    const [refresh, setRefresh] = React.useState([]);

    function refreshPosts () {
        setRefresh([...refresh]);
    }

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/liked`, config)

        request.then((response) => {
            setPosts([...response.data.posts]);
        },).catch(() => {
            alert("Faça login novamente!");
            history.push("/");
        })
    },[refresh]);

    return (
        <TimelineLayout posts={posts} title={"my likes"} refreshPosts={refreshPosts} mylikes={true}/>
    );
}