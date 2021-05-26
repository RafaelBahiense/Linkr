import styled from "styled-components";
import Loader from "react-loader-spinner";

import Navbar from "../general/Navbar/Navbar";
import CreatePost from "../Post/CreatePost";
import Post from "../Post/Post";
import Trending from "./Trending";

export default function TimelineLayout (props) {
    return (
        <>
        <Navbar/>
        <Container>
            <h2 onClick={() => props.refreshPosts()}>{props.title ? props.title : "timeline"}</h2>
            <div>
                <Posts>
                    {props.createPost ? <CreatePost refreshPosts={props.refreshPosts}/> : ""}
                    {props.posts.length > 0 
                        ? props.posts.map((post, index) => <Post key={index} {...post} refreshPosts={props.refreshPosts}/>)
                        : <Loader type="Rings" color="#00BFFF" height={400} width={400} />
                    }
                </Posts>
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
    margin-top: 122px;
    width: 937px;

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

const LoaderWrapper = styled.div`
    margin: auto auto;
`;

const Posts = styled.div`
    min-width: 611px;
`;