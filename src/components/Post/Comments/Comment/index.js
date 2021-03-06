import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../../../contexts/UserContext';
import Avatar from '../../../general/Avatar';
import Container from '../../../general/Container';
import Message from '../../../general/Message';

const Comment = ({ config, text, commenter, postOwner }) => {
	const { user } = useContext(UserContext);
	const [follows, setFollows] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/follows',
				config
			)
			.then((res) => {
				setFollows(res.data.users.map((u) => u.id));
			})
			.catch((err) => {
				alert('Erro! Tente novamente!');
			});
	}, [user]);

	return (
		<>
			<Container horizontal margin="16px">
				<Avatar avatar={commenter.avatar} width="35px" id={commenter.id} />
				<Container margin="0 18px" height="35px" align="start">
					<div>
						<Message
							text={commenter.username}
							color="#f3f3f3"
							size="14px"
						/>
						{commenter.id === postOwner.id ? (
							<Message
								text=" • post’s author"
								color="#565656"
								size="14px"
							/>
						) : follows.includes(commenter.id) ? (
							<Message
								text=" • following"
								color="#565656"
								size="14px"
							/>
						) : null}
					</div>
					<Message text={text} color="#acacac" size="14px" />
				</Container>
			</Container>
            <div style={{height: 1, width: "100%", backgroundColor: "#353535"}}></div>
		</>
	);
};

export default Comment;
