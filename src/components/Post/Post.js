import styled from 'styled-components';
import Avatar from '../general/Avatar';
import Likes from './Likes';
import PostLink from './PostLink';
import { TiPencil, TiTrash } from "react-icons/ti";


export default function Post(props) {

    const { text, user } = props;
    
    return (
        <PostContainer>
            <div>
                <Avatar />
                <Likes {...props}/>
            </div>
            <PostContentContainer>
                <PostUserName>
                    <span>{user.username}</span>
                    <div>
                        <TiPencil />
                        <TiTrash />
                    </div>
                </PostUserName>
                <PostContent>{text}</PostContent>
                <PostLink {...props} />
            </PostContentContainer>
        </PostContainer>
    );
}

const PostContainer = styled.div`
    font-family: 'Lato', sans-serif;
    background: #171717;
    display: flex;
    justify-content: space-between;
    height: 232px;
    padding: 9px 18px 15px 15px;
    margin: 16px 0;

    @media (min-width: 750px){
        width: 611px;
        height: 276px;
        border-radius: 16px;
    }
`;

const PostUserName = styled.div`

    span{
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
    }

    div{
        display: none;
        cursor: pointer;
        font-size: 20px;
        *{
            margin-left: 12px;
        }
    }

    color: #FFFFFF;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 750px){
        span{
            font-size: 19px;
            line-height: 23px;
        }

        div{
            display: block;
        }
    }
`

const PostContent = styled.p`
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #B7B7B7;
    margin: 7px 0 13px 0;
    
    strong{
        color: #FFFFFF;
    }

    @media (min-width: 750px){
        font-size: 17px;
        line-height: 20px;
    }
`
const PostContentContainer = styled.div`
    width: 100%;
    margin-left: 14px;
    @media (min-width: 750px){
        width: 502px;
    }
`