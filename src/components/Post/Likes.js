import styled from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactTooltip from 'react-tooltip';

export default function Likes(props) {

    const { likes } = props;
    const [liked, setLiked] = useState(false);
    const [likedNames, setLikedNames] = useState([]);
    const [likesQuantity, setLikesQuantity] = useState(0);

    const config = {
        'Authorization': `Bearer dda21e2d-9bac-4add-995f-33de3d6e55f8`
    }

    function getLikedNames(array) {
        const likedNamesAux = [];
        for (let i = 0; i < 3; i++) {
            if (array[i]) {
                likedNamesAux.push(array[i]["user.username"] || array[i].username);
            }
        }
        setLikedNames(likedNamesAux);
    }

    useEffect(() => {
        isLiked();
        getLikedNames(likes);
        setLikesQuantity(likes.length);
    }, []);

    function isLiked() {
        setLiked(likes.filter(like => like.userId === like['user.id']).length);
    }

    function Like() {
        const response = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${likes.postId}/like`, config);
        response.then(data => {
            getLikedNames(data.likes);
            setLikesQuantity(data.likes.length);
        });
        setLiked(true);
    }

    function UnLike() {
        const response = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${likes.postId}/dislike`, config);
        response.then(data => {
            getLikedNames(data.likes);
            setLikesQuantity(data.likes.length);
        });
        setLiked(false);
    }

    return (
        <LikesContainer >
            { liked
                ?
                <>
                    <AiFillHeart onClick={UnLike} style={{ color: "#AC0000" }} data-tip={`Você, ${likedNames[0] || ""} e outras ${likesQuantity} pessoas`} />
                    <ReactTooltip />
                </>
                :
                <>
                    <AiOutlineHeart onClick={Like} data-tip={`${likedNames[0] || ""} ${"," + likedNames[1] || ""} e outras ${likesQuantity} pessoas`} />
                    <ReactTooltip />
                </>
            }

            <p> {likesQuantity} likes </p>
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