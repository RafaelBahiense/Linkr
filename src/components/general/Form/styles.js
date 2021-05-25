import styled from "styled-components";

const StyledForm = styled.form`
    width: ${props => props.width};
    height: ${props => props.height ? props.height : 'initial'};
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
`;

export default StyledForm;