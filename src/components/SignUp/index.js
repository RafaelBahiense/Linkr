import React, { useState, useEffect } from 'react';
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

	const [width, setWidth] = React.useState(window.innerWidth);
    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
            window.addEventListener("resize", handleResizeWindow);
            return () => {
            window.removeEventListener("resize", handleResizeWindow);
            };
    }, []);

	const align = width > 1200 ? true : false;

	return (
		<Container horizontal={align}>
			<Container
				justify="center"
				width={ width > 1200 ? "60%" : "100vw"}
				bgColor="#151515"
				shadow="4px 0 4px rgba(0,0,0,.25)"
			>
				<Container height="350px" align={ width > 1200 ? "start" : "center"} margin={ width > 1200 ? "0 0 0 144px" : "0"} justify={ width > 1200 ? "start" : "center"}>
					<Container height="180px" align={ width > 1200 ? "start" : "center"} width="auto">
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
			<Container width={ width > 1200 ? "40%" : "100vw"} justify="center" padding={width > 1200 ? "0" : "40px 0"}>
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
						margin="9px 0 0 0"
					/>
				</Container>
			</Container>
		</Container>
	);
};

export default SignUp;
