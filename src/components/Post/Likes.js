import styled from 'styled-components';
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function Likes(props){

    // props = { svgSize, textSize } medidas em px
    return (
        <LikesContainer {...props} >
            <AiOutlineHeart />
            <AiFillHeart style={{color: "#AC0000"}}/>
            <p> xx likes </p>
        </LikesContainer>
    );
}

const LikesContainer = styled.div`
    color: white;

    p{
        font-weight: 400;
        font-size: ${props => props.textSize};
    }

    svg{
        font-size: ${props => props.svgSize};
        margin: 17px 0 12px 0;
    }
`