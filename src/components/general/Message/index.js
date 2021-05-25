import React from 'react';
import StyledTitle from './styles';

const Message = ({text, size, font, color, width}) => {
    return (
        <StyledTitle size={size} font={font} color={color} width={width}>
            {text}
        </StyledTitle>
    );
}

export default Message;
