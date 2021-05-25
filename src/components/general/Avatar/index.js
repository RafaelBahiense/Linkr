import styled from 'styled-components';

export default function Avatar(){

    return(
        <Logo src="https://cozinhatecnica.com/wp-content/uploads/2019/11/massa-de-pastel.jpg"/>
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
