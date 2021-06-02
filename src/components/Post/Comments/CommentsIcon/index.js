import React, { useState } from 'react';
import StyledCommentsIcon from './styles';
import { FaComments } from 'react-icons/fa';

const CommentsIcon = ({ commentCount, onClick }) => {
	return (
		<div>
			<StyledCommentsIcon>
				<FaComments onClick={onClick} />
				<p>{commentCount} comments</p>
			</StyledCommentsIcon>
		</div>
	);
};

export default CommentsIcon;
