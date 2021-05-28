import React from 'react';
import StyledLink from './styles';

const index = ({ text, children, to, color, fSize, onClick }) => {
    return (
        <StyledLink to={to} color={color} fSize={fSize} onClick={onClick}>
            {text || children}
        </StyledLink>
    );
}

export default index;
