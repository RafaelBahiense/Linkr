import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

import Avatar from "../Avatar/index";

import UserContext from '../../../contexts/UserContext';

export default function Navbar () {
    const {user} = useContext(UserContext);
    return (
        <NavbarWrapper>
            <h1><Link to={"/timeline"}>linkr</Link></h1>
            <Avatar id={user.id} avatar={user.avatar}/>
        </NavbarWrapper>
    );
}

const NavbarWrapper = styled.nav`
    position: fixed;
    top: 0px;
    height: 72px;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: #151515;
    color: #FFFFFF;
    z-index: 10;

    & > h1 {
        margin-left: 18px;
        font-family: Passion One;
        font-weight: bold;
        font-size: 49px;
        color: #FFFFFF;
    }

    & > img {
        margin-right: 7px;
        width: 53px;
        height: 53px;
        border-radius: 26.5px;
    }
`;