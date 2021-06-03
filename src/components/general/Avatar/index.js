import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function Avatar(props) {

    const { id, avatar, nolink, onClick, width } = props;

    return (
        nolink ? <Logo width={width} src={avatar} onClick={onClick} /> : <Link to={`/user/${id}`}><Logo width={width} src={avatar} /></Link>
    );
}

const Logo = styled.img`
    border-radius: 26.5px;
    object-fit: cover;
    width: ${props => props.width ? props.width : "40px"};
    height: ${props => props.width ? props.width : "40px"};
    cursor: pointer;

    @media (min-width: 615px){
        width: ${props => props.width ? props.width : "50px"};
        height: ${props => props.width ? props.width : "50px"};
    }
`;
