import React from 'react';
import StyledInput from './styles';

const Input = ({
	text,
	type,
	required,
	disabled,
	data,
	width,
	height,
	color,
	radius,
	onClick,
	fColor,
	pColor,
	font,
	fSize,
	fWeight,
	border,
	padding,
	cursor,
	outline,
}) => {
	const {value, setValue} = data || {};
	return (
		<StyledInput
			width={width}
			height={height}
			color={color}
			fColor={fColor}
			pColor={pColor}
			fWeight={fWeight}
			font={font}
			fSize={fSize}
			onClick={onClick}
			radius={radius}
			border={border}
			outline={outline}
			padding={padding}
			cursor={cursor}
			placeholder={text}
			type={type || 'text'}
			required={required || false}
			disabled={disabled}
			value={value ? value : ""}
			onChange={setValue ? (e) => setValue(e.target.value) : () => null}
		/>
	);
};

export default Input;
