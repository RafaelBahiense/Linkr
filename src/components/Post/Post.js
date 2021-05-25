import styled from 'styled-components';
import Avatar from '../Avatar';
import Likes from './Likes';


export default function Post() {
    return (
        <PostContainer>
            <div>
                <Avatar width="40px" />
                <Likes svgSize="17px" textSize="9px" />
            </div>
            <PostContentContainer>
                <PostUserName>Juvenal Juvêncio</PostUserName>
                <PostContent>Muito maneiro esse tutorial de Material UI com React, deem uma olhada! <strong>#react #material</strong></PostContent>
                <PostLink> Oie </PostLink>
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

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const PostUserName = styled.p`
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    align-self: flex-start;
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
`

const PostLink = styled.div`
`
const PostContentContainer = styled.div`
    width: 288px;
`