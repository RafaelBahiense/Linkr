import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

import Navbar from "../general/Navbar/Navbar";
import Post from "../Post/Post";
import Trending from "./Trending";

export default function Timeline () {
    const [posts, setPosts] =  React.useState([]);

    const config = {
        headers: {
            "Authorization": `Bearer dda21e2d-9bac-4add-995f-33de3d6e55f8`
        }
    }

    useEffect(() => {
        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts", config)

        request.then((response) => {
            setPosts([...response.data.posts]);
        },)
    },[]);

    return (
        <>
        <Navbar/>
        <Container>
            <h2>timeline</h2>
            <div>
                <div>
                    {posts.length > 0 
                        ? posts.map((post, index) => <Post key={index} {...post}/>)
                        : <Loader type="Rings" color="#00BFFF" height={400} width={400} />
                    }
                </div>
                <div>
                    <Trending />
                </div>
            </div>
        </Container>
        </>
    );
}

const Container =  styled.div`
    margin: 0 auto;
    margin-top: 72px;
    width: 937px;

    & > div {
        display: flex;
    }

`;

const LoaderWrapper = styled.div`
    margin: auto auto;
`;