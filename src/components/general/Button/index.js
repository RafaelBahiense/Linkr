import React from 'react';
import Loader from 'react-loader-spinner';
import StyledButton from './styles';

const Button = ({
	text,
	disabled,
	width,
	height,
	color,
	font,
	radius,
	children,
	onClick,
	fColor,
	fSize,
	fWeight,
	border,
}) => {
	return (
		<StyledButton
			disabled={disabled}
			width={width}
			height={height}
			color={color}
			fColor={fColor}
			font={font}
			fWeight={fWeight}
			fSize={fSize}
			radius={radius}
			border={border}
			onClick={onClick}
		>
			{disabled ? (
				<Loader type="ThreeDots" color="#fff" height={45} width={60} />
			) : (
				text || children
			)}
		</StyledButton>
	);
};

export default Button;
