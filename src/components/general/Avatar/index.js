import { useContext } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import UserContext from '../../../contexts/UserContext';

export default function Avatar() {

    const { user } = useContext(UserContext);

    return (
        <Link to={`/user/${user.user.id}`}><Logo src={user.user.avatar} /></Link>
    );
}

const Logo = styled.img`
    border-radius: 26.5px;
    object-fit: cover;
    width: 40px;
    height: 40px;

    @media (min-width: 750px){
        width: 50px;
        height: 50px;
    }
`;
