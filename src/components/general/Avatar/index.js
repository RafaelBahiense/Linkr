import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default function Avatar(props) {

    const { id, avatar, nolink, onClick } = props;

    return (
        nolink ? <Logo src={avatar} onClick={onClick} /> : <Link to={`/user/${id}`}><Logo src={avatar} /></Link>
    );
}

const Logo = styled.img`
    border-radius: 26.5px;
    object-fit: cover;
    width: 40px;
    height: 40px;
    cursor: pointer;

    @media (min-width: 615px){
        width: 50px;
        height: 50px;
    }
`;
