import React, { useState } from 'react';
import Container from '../general/Container';
import Form from '../general/Form';
import Input from '../general/Input';
import Button from '../general/Button';
import Go from '../general/Go';
import Message from '../general/Message';
import axios from 'axios';
import { useHistory } from 'react-router';

const Login = ({ setUser }) => {
	const history = useHistory();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [disabled, setDisabled] = useState(false);

	const handleLogin = (e) => {
		setDisabled(true);
		e.preventDefault();

		const data = {
			email,
			password,
		};

		if (!email || !password) {
			alert('Preencha todos os campos');
		} else {
			axios
				.post(
					'https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/sign-in',
					data
				)
				.then((res) => {
					setUser(res.data);
					history.push('/timeline');
				})
				.catch((err) => {
                    console.log(err);
					alert('Email ou senha incorretos. Tente novamente!');
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
				<Container height="270px" font="Oswald">
					<Form
						width="430px"
						disabled={disabled}
						onSubmit={handleLogin}
					>
						<Input
							height={65}
							type="email"
							data={{ value: email, setValue: setEmail }}
						/>
						<Input
							height={65}
							type="password"
							data={{ value: password, setValue: setPassword }}
						/>
						<Button height={65} text="Log In" />
					</Form>
					<Go
						to="/sign-up"
						text="First time? Create an account!"
						color="#fff"
						fSize="20px"
					/>
				</Container>
			</Container>
		</Container>
	);
};

export default Login;
