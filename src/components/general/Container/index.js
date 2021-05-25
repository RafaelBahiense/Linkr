import React from 'react';
import StyledContainer from './styles';

const Container = ({
	children,
	width,
	height,
	horizontal,
	bgColor,
	radius,
	padding,
	justify,
	margin,
	minH,
	minW,
	maxW,
	align,
	onClick,
	cursor
}) => {
	return (
		<StyledContainer
			cursor={cursor}
			onClick={onClick}
			width={width}
			height={height}
			horizontal={horizontal}
			bgColor={bgColor}
			radius={radius}
			padding={padding}
			margin={margin}
			justify={justify}
			align={align}
			minH={minH}
			minW={minW}
			maxW={maxW}
		>
			{children}
		</StyledContainer>
	);
};

export default Container;
