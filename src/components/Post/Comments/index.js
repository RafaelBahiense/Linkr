import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import Container from '../../general/Container';
import Message from '../../general/Message';
import Comment from './Comment';
import CommentWrite from './CommentWrite';

const Comments = ({ config, id, clicked, postOwner }) => {
	const [comments, setComments] = useState(null);

	useEffect(() => {
		axios
			.get(
				`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${id}/comments`,
				config
			)
			.then((res) => {
				setComments(res.data.comments);
			})
			.catch((err) => {
				alert('Erro! Tente novamente!');
			});
	}, [clicked, comments]);

	return (
		<>
		<Container>
			{comments === null ? (
				<Loader
					type="ThreeDots"
					color="#00BFFF"
					height={80}
					width={80}
				/>
			) : comments[0] ? (
				comments.map((c) => (
					<Comment config={config} text={c.text} commenter={c.user} postOwner={postOwner} />
				))
			) : (
				<Message text="Ainda não há comentários" color="white" />
			)}
		</Container>
		<CommentWrite config={config} id={id} />
		</>
	);
};

export default Comments;
