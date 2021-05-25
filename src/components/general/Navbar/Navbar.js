import styled from "styled-components";

export default function Navbar () {
    return (
        <NavbarWrapper>
            <h1>linkr</h1>
            <img src="https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/14/avatar"/>
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