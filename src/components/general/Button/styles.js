import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;

    width: ${props => props.width ? `${props.width}px` : '100%'};
    height: ${props => props.height ? `${props.height}px` : '45px'};
    margin: 5px;
    border-radius: ${props => props.radius ? `${props.radius}%` : '5px'};
    border: ${props => props.border ? props.border : 'none'};
    background-color: ${props => props.color ? props.color : '#52B6FF'};
    color: ${props => props.fColor ? props.fColor : 'white'};
    font-family: ${props => props.font ? props.font : 'inherit'};
    font-weight: ${props => props.fWeight ? props.fWeight : '400'};
    font-size: ${props => props.fSize ? props.fSize : 21}px;

    &:disabled {
        opacity: 70%;
    }
`;

export default StyledButton;