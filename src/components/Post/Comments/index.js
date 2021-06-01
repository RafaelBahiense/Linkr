import React, { useState } from 'react';
import StyledComments from './styles';
import { FaComments } from 'react-icons/fa';

const Shares = ({ commentCount }) => {
	return (
		<div>
			<StyledComments>
				<FaComments />
				<p>{commentCount} comments</p>
			</StyledComments>
		</div>
	);
};

export default Shares;
