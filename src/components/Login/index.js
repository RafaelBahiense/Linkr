import React, { useState, useEffect } from 'react';
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
			<Container width={ width > 1200 ? "40%" : "100vw"} justify="center">
				<Container height="270px" font="Oswald" > 
					<Form
						width="430px"
						disabled={disabled}
						onSubmit={handleLogin}
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
						<Button height={65} text="Log In" />
					</Form>
					<Go
						to="/sign-up"
						text="First time? Create an account!"
						color="#fff"
						fSize="20px"
						margin="9px 0 0 0"
					/>
				</Container>
			</Container>
		</Container>
	);
};

export default Login;
