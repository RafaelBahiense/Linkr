import React from 'react';
import StyledForm from './styles';

const Form = ({children, width, onSubmit, disabled, height}) => {
    const elements = React.Children.toArray(children);

    return (
        <StyledForm width={width} height={height} onSubmit={onSubmit}>
            {elements.map(e => React.cloneElement(e, {disabled}))}
        </StyledForm>
    );
}

export default Form;
