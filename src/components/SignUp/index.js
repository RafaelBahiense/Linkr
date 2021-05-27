import React, { useState } from 'react';
import Container from '../general/Container';
import Form from '../general/Form';
import Input from '../general/Input';
import Button from '../general/Button';
import Go from '../general/Go';
import Message from '../general/Message';
import axios from 'axios';
import { useHistory } from 'react-router';

const SignUp = () => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [pictureUrl, setPictureUrl] = useState('');
	const [disabled, setDisabled] = useState(false);

	const handleSignup = (e) => {
		setDisabled(true);
		e.preventDefault();

		const data = {
			email,
			password,
			username,
			pictureUrl,
		};

		if (!email || !password || !username || !pictureUrl) {
			alert('Preencha todos os campos');
		} else {
			axios
				.post(
					'https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/sign-up',
					data
				)
				.then((res) => {
					history.push('/');
				})
				.catch((err) => {
					alert('Email já cadastrado! Tente novamente!');
				});
		}
		setDisabled(false);
	};

	return (
		<Container horizontal>
			<Container
				justify="center"
				width="60%"
				bgColor="#151515"
				shadow="4px 0 4px rgba(0,0,0,.25)"
			>
				<Container height="350px" align="start" margin="0 0 0 144px">
					<Container height="180px" align="start">
						<img src="./img/icon.svg" width="230px" alt="" />
						<Message
							color="white"
							text="save, share and discover the best links on the web"
							width="430px"
							font="Oswald"
							size="43px"
						/>
					</Container>
				</Container>
			</Container>
			<Container width="40%" justify="center">
				<Container height="420px" font="Oswald">
					<Form
						width="430px"
						disabled={disabled}
						onSubmit={handleSignup}
					>
						<Input
							text="email"
							height={65}
							type="email"
							data={{ value: email, setValue: setEmail }}
						/>
						<Input
							text="password"
							height={65}
							type="password"
							data={{ value: password, setValue: setPassword }}
						/>
						<Input
							text="username"
							height={65}
							data={{ value: username, setValue: setUsername }}
						/>
						<Input
							text="picture URL"
							height={65}
							type="url"
							data={{
								value: pictureUrl,
								setValue: setPictureUrl,
							}}
						/>
						<Button height={65} text="Sign Up" />
					</Form>
					<Go
						to="/"
						text="Switch back to log in"
						color="#fff"
						fSize="20px"
					/>
				</Container>
			</Container>
		</Container>
	);
};

export default SignUp;
