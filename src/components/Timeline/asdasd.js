import React, { useEffect } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import InfiniteScroll from 'react-infinite-scroller';

import CreatePost from "../Post/CreatePost";
import Post from "../Post/Post";
import Trending from "./Trending";

export default function TimelineLayout (props) {
    const [width, setWidth] = React.useState(window.innerWidth);
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
            window.addEventListener("resize", handleResizeWindow);
            return () => {
            window.removeEventListener("resize", handleResizeWindow);
            };
    }, []);

    return (
        <>
        <Container width={width}>
            <h2>{props.title ? props.title : "timeline"}</h2>
            <div>
                <Posts width={width}>
                    {props.createPost ? <CreatePost refreshPosts={props.refreshPosts}/> : ""}
                    <InfiniteScroll>
                        {props.posts == null 
                            ? <LoaderWrapper width={width}><Loader type="Rings" color="#00BFFF" height={400} width={400} /></LoaderWrapper>
                            : props.posts.length > 0
                            ? props.posts.map((post, index) => <Post key={index} {...post} refreshPosts={props.refreshPosts} mylikes={props.mylikes}/>)
                            : <LoaderWrapper width={width}><p>Nenhuma postagem encontrada!</p></LoaderWrapper>
                        }
                    </InfiniteScroll>
                </Posts>
                {width >= 940
                    ?   <div>
                            <Trending />
                        </div>
                    : null
                }
            </div>
        </Container>
        </>
    );
}

const Container =  styled.div`
    margin: 0 auto;
    margin-top: 122px;
    width: ${(props) => props.width >= 940 ? "937px" : props.width > 611 ? "611px" : "100%"};
    text-align: ${(props) => props.width >= 940 ? "none" : "center"};

    & > h2 {
        margin-bottom: 40px;
        font-family: Oswald;
        font-weight: bold;
        font-size: 43px;
        line-height: 64px;
        color: #FFFFFF;
    }

    & > div {
        display: flex;
    }

`;

const Posts = styled.div`
    max-width: ${(props) => props.width > 611 ? "611px" : "100%"};
`;

const LoaderWrapper = styled.div`
    width: ${(props) => props.width > 611 ? "611px" : "100%"};
    text-align: center;

    & > p {
        margin-top: 50px;
        font-size: 25px;
        color: white;
    }
`;