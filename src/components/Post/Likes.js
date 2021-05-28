import styled from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';
import UserContext from '../../contexts/UserContext';

export default function Likes(props) {

    const { likes, id, refreshPosts } = props;
    const [liked, setLiked] = useState(false);
    const [likedNames, setLikedNames] = useState([]);
    const [likesQuantity, setLikesQuantity] = useState(0);
    const { user, token } = useContext(UserContext);

    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }

    function getLikedNames(array) {
        const likedNamesAux = [];
        for (let i = 0; i < 3; i++) {
            if (array[i]) {
                likedNamesAux.push(array[i]["user.username"] || array[i].username);
            }
        }
        const filteredNames = likedNamesAux.filter(name => name !== user.username);
        setLikedNames(filteredNames);
    }

    useEffect(() => {
        isLiked();
        getLikedNames(likes);
        setLikesQuantity(likes.length);
    }, [likes]);

    function isLiked() {
        setLiked(likes.filter(like => like.userId === user.id).length === 1);
    }

    function Like() {
        setLiked(true);
        const response = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${id}/like`, {}, config);
        response.then((response) => {
            getLikedNames(response.data.post.likes);
            setLikesQuantity(response.data.post.likes.length);
        });
        response.catch(() => setLiked(false));
    }

    function UnLike() {
        setLiked(false);
        const response = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${id}/dislike`, {}, config);
        response.then((response) => {
            getLikedNames(response.data.post.likes);
            setLikesQuantity(response.data.post.likes.length);
        });
        response.catch(() => setLiked(true))
    }

    function unLikeIconText() {
        if (likesQuantity > 2) {
            return `${likedNames[0] || ""}, ${likedNames[1] || ""} e outras ${likesQuantity - 2} pessoas curtiram`
        }
        if (likesQuantity === 2) {
            return `${likedNames[0] || ""} e ${likedNames[1]} curtiram`
        }
        if (likesQuantity === 1) {
            return `${likedNames[0] || ""} curtiu`
        }
        if (likesQuantity === 0) {
            return `Ninguém curtiu`
        }
    }

    function likeIconText() {
        if (likesQuantity > 2) {
            return `Você, ${likedNames[0] || ""} e outras ${likesQuantity - 2} pessoas curtiram`
        }
        if (likesQuantity === 2) {
            return `Você e ${likedNames[0] || ""} curtiram`
        }
        if (likesQuantity === 1) {
            return `Apenas você curtiu`
        }
        if (likesQuantity === 0) {
            return `Ninguém curtiu`
        }
    }
    return (
        <LikesContainer data-tip={liked ? likeIconText() : unLikeIconText()}>
            <ReactTooltip />
            { liked
                ?
                <>
                    <AiFillHeart onClick={() => { UnLike(); setLikesQuantity(likesQuantity - 1) }} style={{ color: "#AC0000" }} />
                </>
                :
                <>
                    <AiOutlineHeart onClick={() => { Like(); setLikesQuantity(likesQuantity + 1) }} />
                </>
            }

            <p> {likesQuantity} {likesQuantity === 1 ? "like" : "likes"} </p>
        </LikesContainer>
    );
}

const LikesContainer = styled.div`
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;

    p{
        font-weight: 400;
        font-size: 9px;
    }

    svg{
        font-size: 17px;
        margin: 17px 0 12px 0;
        cursor: pointer;
    }

    @media (min-width: 750px){
        p{
            font-size: 11px;
        }

        svg{
            font-size: 20px;
        }
    }
`