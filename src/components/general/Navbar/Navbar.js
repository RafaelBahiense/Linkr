import { useContext, useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Avatar from '../Avatar/index';
import Go from "../Go";
import UserContext from '../../../contexts/UserContext';
import MenuContext from '../../../contexts/MenuContext';
import { Link } from 'react-router-dom';
import Container from '../Container';
import { IconContext } from 'react-icons/lib';
import SearchUsers from './SearchUsers';

export default function Navbar({setUser, onClick}) {
	const { user } = useContext(UserContext);
	const { menu, setMenu } = useContext(MenuContext);

	return (
		<div onClick={onClick}>
			<NavbarWrapper>
				<h1>
					<Link to="/timeline">linkr</Link>
				</h1>
				<SearchUsers />
				<Container horizontal width="90px">
					<IconContext.Provider value={{ size: 20 }}>
						{menu ? (
							<FiChevronUp
								cursor="pointer"
								onClick={() => setMenu(!menu)}
							/>
						) : (
							<FiChevronDown
								cursor="pointer"
								onClick={() => setMenu(!menu)}
							/>
						)}
					</IconContext.Provider>
					<Avatar
						id={user.id}
						avatar={user.avatar}
						nolink
						onClick={() => setMenu(!menu)}
					/>
				</Container>
			</NavbarWrapper>
			<ContainerMenu display={menu}>
				<Go text="My posts" to="/my-posts" color="white" fSize="17px" />
				<br />
				<Go text="My likes" to="/my-likes" color="white" fSize="17px" />
				<br />
				<Go text="Logout" color="white" fSize="17px" onClick={setUser} />
			</ContainerMenu>
		</div>
	);
}

const ContainerMenu = styled.div`
	display: ${props => props.display ? "flex" : "none"};
	flex-flow: column nowrap;
	justify-content: space-between;
	padding: 15px 0;
	align-items: center;
	font-family: "Lato";
	position: fixed;
	z-index: 20;
	width: 130px;
	height: 110px;
	background-color: #151515;
	right: 0;
	top: 72px;
	border-bottom-left-radius: 20px;
`;

const NavbarWrapper = styled.nav`
	position: fixed;
	top: 0px;
	height: 72px;
	width: 100%;
	padding: 10px;
	display: flex;
	justify-content: space-between;
	background-color: #151515;
	color: #ffffff;
	z-index: 10;

	& > h1 {
		margin-left: 18px;
		font-family: Passion One;
		font-weight: bold;
		font-size: 49px;
		color: #ffffff;
	}

	& > img {
		margin-right: 7px;
		width: 53px;
		height: 53px;
		border-radius: 26.5px;
	}
`;
