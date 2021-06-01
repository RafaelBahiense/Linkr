import styled from 'styled-components';
import { useContext, useEffect, useState } from 'react';
import Sugestions from './Sugestions';
import { DebounceInput } from 'react-debounce-input';
import axios from 'axios';
import UserContext from '../../../contexts/UserContext';

export default function SearchUsers() {

    const [showingSugestions, setShowingSugestions] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [users, setUsers] = useState([]);

    const { token } = useContext(UserContext);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        if(inputValue) {
            const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/search?username=${inputValue}`, config);

            promise.catch((err) => console.log(err));
            promise.then(response => {
                const users = response.data.users;
                const following = users.filter(user => user.isFollowingLoggedUser);
                const unFollowing = users.filter(user => !user.isFollowingLoggedUser);
                const ordenedUsers = following.concat(unFollowing);

                setUsers(ordenedUsers);
                console.log(ordenedUsers);
            });
        }
    }, [inputValue])
    return (
        <SearchContainer>
            <DebounceInput
                minLength={3}
                debounceTimeout={300}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={() => setTimeout(() => setShowingSugestions(false), 150)}
                onFocus={() => setShowingSugestions(true)}
                placeholder="Search for people and friends                                                  🔍">
            </DebounceInput>
            { showingSugestions && <Sugestions users={users} />}
        </SearchContainer>
    );
}

const SearchContainer = styled.div`

    display: flex;
    flex-direction: column;
    background: #E7E7E7;
    border-radius: 8px;

	input{
		width: 563px;
		height: 100%;
		background: #FFFFFF;
		border-radius: 8px;
		border: none;
        outline: none;
		padding: 12px;

		font-style: normal;
		font-weight: normal;
		font-size: 19px;
		line-height: 23px;
		color: black;
	}

	input::placeholder{
		font-style: normal;
		font-weight: normal;
		font-size: 19px;
		line-height: 23px;
		color: #C6C6C6;
	}
`;