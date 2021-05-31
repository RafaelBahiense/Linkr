import React from 'react';
import StyledShares from './styles';
import { FaShare } from "react-icons/fa";

const Shares = ({repostCount}) => {
	return (
		<div>
			<StyledShares>
                <FaShare />
				<p>{repostCount} re-posts</p>
			</StyledShares>
		</div>
	);
};

export default Shares;
