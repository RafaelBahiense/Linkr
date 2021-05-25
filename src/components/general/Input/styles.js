import styled from 'styled-components';

const StyledInput = styled.input`
	width: ${(props) => (props.width ? `${props.width}px` : '100%')};
	height: ${(props) => (props.height ? `${props.height}px` : '45px')};
	margin: 3px;
	border-radius: ${props => props.radius ? `${props.radius}%` : '5px'};
    border: ${props => props.border ? props.border : '1px solid #d4d4d4'};
	padding: ${props => props.padding ? props.padding : '9px'};
    background-color: ${props => props.color ? props.color : 'white'};
    color: ${props => props.fColor ? props.fColor : 'black'};
    font-size: ${props => props.fSize ? props.fSize : '20px'};
    font-family: ${props => props.font ? props.font : 'inherit'};
    font-weight: ${props => props.fWeight ? props.fWeight : '400'};
    cursor: ${props => props.cursor ? props.cursor : 'auto'};

	&::placeholder {
		color: #d4d4d4;
	}

	&:disabled {
		background-color: #f2f2f2;
		color: #afafaf;
	}

	&:focus {
		outline-color: #52b6ff;
	}
`;

export default StyledInput;
