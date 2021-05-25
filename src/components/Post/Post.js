import styled from 'styled-components';
import Avatar from '../general/Avatar';
import Likes from './Likes';


export default function Post() {

    const windowSize = window.visualViewport.width;
    
    return (
        <PostContainer>
            <div>
                <Avatar width={windowSize < 750 ? "40px" : "50px"}/>
                <Likes svgSize={windowSize < 750 ? "17px" : "20px"} textSize={windowSize < 750 ? "9px" : "11px"}/>
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

    @media (min-width: 750px){
        width: 611px;
        height: 276px;
        border-radius: 16px;
    }
`;

const PostUserName = styled.p`
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    align-self: flex-start;

    @media (min-width: 750px){
        font-size: 19px;
        line-height: 23px;
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

const PostLink = styled.div`
    width: 278px;
    height: 115px;

    border: 1px solid #4D4D4D;
    border-radius: 11px;

    @media (min-width: 750px){
        width: 503px;
        height: 155px;
    }
`
const PostContentContainer = styled.div`
    width: 288px;

    @media (min-width: 750px){
        width: 502px;
    }
`