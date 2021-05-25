import React from 'react';
import StyledLink from './styles';

const index = ({ text, children, to, color, fSize }) => {
    return (
        <StyledLink to={to} color={color} fSize={fSize}>
            {text || children}
        </StyledLink>
    );
}

export default index;
