import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
	color: ${props => props.color ? props.color : '#000'};
	font-size: ${props => props.fSize ? props.fSize : '14px'};
	font-family: ${props => props.font ? props.font : 'inherit'};
`;

export default StyledLink;
