import styled from 'styled-components';

export default function Avatar(props){

    // width em px
    const { width } = props;
    
    return(
        <Logo src="https://cozinhatecnica.com/wp-content/uploads/2019/11/massa-de-pastel.jpg" width={width}/>
    );
}

const Logo = styled.img`
    border-radius: 26.5px;
    width: ${props => props.width};
    height: ${props => props.width};
    object-fit: cover;
`;
