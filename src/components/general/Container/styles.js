import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-flow: ${(props) => (props.horizontal ? 'row' : 'column')} nowrap;
	align-items: ${(props) => (props.align ? props.align : 'center')};
	justify-content: ${(props) => (props.justify ? props.justify : 'space-between')};
	width: ${(props) => (props.width ? props.width : '100%')};
	min-width: ${(props) => (props.minW ? props.minW : '0')};
	max-width: ${(props) => (props.maxW ? props.maxW : '100%')};
	min-height: ${(props) => (props.minH ? props.minH : '0')};
	height: ${(props) => (props.height ? props.height : '100%')};
	background-color: ${(props) => (props.bgColor ? props.bgColor : 'transparent')};
	border-radius: ${(props) => (props.radius ? props.radius : '0')};
	padding: ${(props) => (props.padding ? props.padding : '0')};
	margin: ${(props) => (props.margin ? props.margin : '0')};
	cursor: ${(props) => (props.cursor ? props.cursor : 'auto')};
`;

export default StyledContainer;
