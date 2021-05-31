import React, { useState } from 'react';
import StyledShares from './styles';
import { FaShare } from 'react-icons/fa';
import axios from 'axios';
import ModalScreen from '../Modal';

const Shares = ({ repostCount, config, id, refreshPosts }) => {
	const [sharing, setSharing] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const repost = () => {
		setSharing(true);
		axios
			.post(
				`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${id}/share`,
				[],
				config
			)
			.then((res) => {
				refreshPosts();
			})
			.catch((err) => {
				alert('Erro! Tente Novamente');
			});
		setIsOpen(false);
		setSharing(false);
	};

	return (
		<div>
			<StyledShares>
				{isOpen ? (
					<ModalScreen
						doing={sharing}
						title="Do you want to re-post this link?"
						cancelText="No, cancel"
						continueText="Yes, share!"
						action={repost}
						setIsOpen={setIsOpen}
						modalIsOpen={isOpen}
					/>
				) : (
					''
				)}
				<FaShare onClick={() => setIsOpen(true)} />
				<p>{repostCount} re-posts</p>
			</StyledShares>
		</div>
	);
};

export default Shares;
