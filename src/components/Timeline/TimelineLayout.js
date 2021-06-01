import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import CreatePost from "../Post/CreatePost";
import Post from "../Post/Post";
import Trending from "./Trending";
import Avatar from "../general/Avatar";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function TimelineLayout(props) {

    const [width, setWidth] = React.useState(window.innerWidth);
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    const { id, username, avatar} = props.user || {};
    const { timeline } = props;
    const [following, setFollowing] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [followingUsers, setFollowingUsers] = useState([]);

    const { token } = useContext(UserContext);

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    useEffect(() => {
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/follows`, config);
        promise.catch(err => console.log(err));
        promise.then(response => {
            const followingUsers = response.data.users;
            setFollowingUsers(followingUsers);
            const followingThis = followingUsers.length === 0 ? false : followingUsers.filter(user => user.username === username).length;
            setFollowing(followingThis);
            setDisabled(false);
        })
    }, [])

    function follow() {
        console.log("Following...");
        setFollowing(true);

        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/${id}/follow`, {}, config);
        promise.catch(() => {
            setFollowing(false);
            alert("Follow error!");
        });
        promise.then(response => console.log(response));
    }

    function unFollow() {
        console.log("UnFollowing...");
        setFollowing(false);

        const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/${id}/unfollow`, {}, config);
        promise.catch(() => {
            setFollowing(true);
            alert("Unfollow error!");
        });
        promise.then(response => console.log(response));
    }

    return (
            <Container width={width}>
                    <section>
                        <div>
                            {id
                                ? <Avatar avatar={avatar} nolink />
                                : null
                            }
                            <h2>{props.title ? props.title : "timeline"}</h2>
                        </div>
                        {id 
                            ? following 
                            ? <ButtonUnFollow disabled={disabled} onClick={() => unFollow()}> Unfollow </ButtonUnFollow> 
                            : <ButtonFollow disabled={disabled} onClick={() => follow()}> Follow </ButtonFollow>
                            : null
                        }
                    </section>
                <div>
                    <Posts width={width}>
                        {timeline ? <CreatePost refreshPosts={props.refreshPosts} /> : null}
                        {timeline
                        ?   props.posts == null 
                                ? <LoaderWrapper width={width}><Loader type="Rings" color="#00BFFF" height={400} width={400} /></LoaderWrapper>
                                : followingUsers.length == 0 
                                ? <p> Você não segue ninguém ainda, procure por perfis na busca! </p>
                                : props.posts.length > 0
                                ? props.posts.map((post, index) => <Post key={index} {...post} refreshPosts={props.refreshPosts} mylikes={props.mylikes}/>)
                                : <LoaderWrapper width={width}><p>Nenhuma postagem encontrada!</p></LoaderWrapper>
                        :   props.posts == null 
                                ? <LoaderWrapper width={width}><Loader type="Rings" color="#00BFFF" height={400} width={400} /></LoaderWrapper>
                                : props.posts.length > 0
                                ? props.posts.map((post, index) => <Post key={index} {...post} refreshPosts={props.refreshPosts} mylikes={props.mylikes}/>)
                                : <LoaderWrapper width={width}><p>Nenhuma postagem encontrada!</p></LoaderWrapper>
                        }
                    </Posts>
                    {width >= 940 ? <div><Trending /></div> : null}
                </div>
            </Container>
    );
}

const ButtonFollow = styled.button`
    width: 112px;
    height: 31px;
    border-radius: 5px;
    border: none;
    outline: none;

    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;

    background: #1877F2;
    color: #FFFFFF;

    &:disabled{
        background: black;
        color: white;
    }
`

const ButtonUnFollow = styled.button`
    width: 112px;
    height: 31px;
    border-radius: 5px;
    border: none;
    outline: none;

    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;

    background: #FFFFFF;
    color: #1877F2;

    &:disabled{
        background: black;
        color: white;
    }
`

const Container = styled.div`
    margin: 0 auto;
    margin-top: 122px;
    width: ${(props) => props.width >= 940 ? "937px" : props.width > 611 ? "611px" : "100%"};
    text-align: ${(props) => props.width >= 940 ? "none" : "center"};

    section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 40px;

        div{
            display: flex;
            align-items: center;
            h2{
                font-family: Oswald;
                font-weight: bold;
                font-size: 43px;
                color: #FFFFFF;
                margin-left: 18px;
                margin-bottom: 10px;
            }
        }
    }

    & > div {
        display: flex;
    }

`;

const Posts = styled.div`
    max-width: ${(props) => props.width > 611 ? "611px" : "100%"};

    & > p{
        font-size: 30px;
        color: #FFFFFF;
    }
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