import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import React, { useEffect, useContext, useState } from "react";
import useInterval from '@use-it/interval';

import TimelineLayout from "../Timeline/TimelineLayout";
import UserContext from "../../contexts/UserContext";

const UserPosts = () => {
    const [posts, setPosts] = useState(null);
    const [user, setUser] = useState(null);
    const { token } = useContext(UserContext);
    const { id } = useParams();

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

        const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/${id}`, config);
        request.then((res) => {

            setUser(res.data.user);

            const request = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/${id}/posts`, config);
            request.then((res) => {

                setPosts(res.data.posts);
            
            }).catch(() => {

                alert("Faça login novamente!");
                history.push("/");
            
            })

        }).catch(() => {

            alert("Faça login novamente!");
            history.push("/");

        })


    }, [id, refresh]);

    useInterval(() => {
        refreshPosts();
    }, 15000)

    return (
        <TimelineLayout posts={posts} 
                        user={user}
                        title={user ? `${user.username}'s posts` : "Loading user"}
                        userPost={true} />
    );
}

export default UserPosts;
