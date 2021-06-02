import React, { useContext, useState } from 'react';
import UserContext from '../../../../contexts/UserContext';
import Avatar from '../../../general/Avatar';
import Button from '../../../general/Button';
import Container from '../../../general/Container';
import Form from '../../../general/Form';
import Input from '../../../general/Input';
import { FiSend } from "react-icons/fi";
import axios from 'axios';

const CommentWrite = ({ config, id }) => {
	const { user } = useContext(UserContext);
	const [comment, setComment] = useState('');
	const [disabled, setDisabled] = useState(false);

    const handleComment = e => {
        e.preventDefault();
        setDisabled(true);
        const data = {
            text: comment
        };

        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${id}/comment`, data, config)
        .then(res => {
          setComment("");
        }).catch(err => {
            alert("Erro! Tente novamente!");
        });

        setDisabled(false);
    };

	return (
		<Container horizontal margin="20px 0">
			<Avatar id={user.id} avatar={user.avatar} width="35px" />
			<div style={{ width: 15 }}></div>
			<Form width="100%" disabled={disabled} onSubmit={handleComment}>
				<Input
					outline="none"
					height={50}
					fColor="#acacac"
					pColor="#575757"
					text="write a comment..."
					color="#252525"
					required
					border="none"
					fSize="14px"
					data={{ value: comment, setValue: setComment }}
				/>
				<div
					style={{
						position: 'absolute',
						right: 20,
						height: 60,
						display: 'flex',
						flexFlow: 'column nowrap',
						justifyContent: 'center',
					}}
				>
					<Button type="submit" width={20} height={20} color="transparent"><FiSend /></Button>
				</div>
			</Form>
		</Container>
	);
};

export default CommentWrite;
