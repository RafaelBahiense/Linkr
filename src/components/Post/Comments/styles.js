import styled from 'styled-components';

const StyledComments = styled.div`
	color: white;
	display: flex;
	align-items: center;
	flex-direction: column;

	p {
		font-weight: 400;
		font-size: 9px;
	}

	svg {
		font-size: 17px;
		margin: 17px 0 12px 0;
		cursor: pointer;
	}

	@media (min-width: 615px) {
		p {
			font-size: 11px;
		}

		svg {
			font-size: 20px;
		}
	}
`;

export default StyledComments;
