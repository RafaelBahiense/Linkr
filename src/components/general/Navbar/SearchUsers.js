import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import Suggestions from "./Suggestions";
import { DebounceInput } from "react-debounce-input";
import axios from "axios";
import UserContext from "../../../contexts/UserContext";

export default function SearchUsers(props) {
  const [showingSuggestions, setShowingSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const [onFocusInput, setOnFocusInput] = useState(false);

  const { token } = useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (inputValue) {
      const promise = axios.get(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/search?username=${inputValue}`,
        config
      );

      promise.then((response) => {
        const users = response.data.users;
        const following = users.filter((user) => user.isFollowingLoggedUser);
        const unFollowing = users.filter((user) => !user.isFollowingLoggedUser);
        const ordenedUsers = following.concat(unFollowing);

        setUsers(ordenedUsers);
      });
    }
  }, [inputValue]);

  return (
    <SearchContainer
      width={props.width}
      valueSize={inputValue.length}
      onFocusInput={onFocusInput}
    >
      <DebounceInput
        minLength={3}
        debounceTimeout={300}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={() => {
          setTimeout(() => setShowingSuggestions(false), 150);
          setOnFocusInput(false);
        }}
        onFocus={() => {
          setShowingSuggestions(true);
          setOnFocusInput(true);
        }}
        placeholder="Search for people and friends"
      ></DebounceInput>
      {showingSuggestions && <Suggestions users={users} />}
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 11;
  margin: 0 auto;
  background: #e7e7e7;
  border-radius: ${(props) =>
    props.valueSize >= 3 && props.onFocusInput ? "8px 8px 0 0" : "8px"};
  margin-top: ${(props) => (props.width > 850 ? "0" : "90px")};
  margin-bottom: ${(props) => (props.width > 850 ? "0" : "-100px")};
  width: ${(props) => (props.width > 850 ? "60%" : "70%")};
  height: ${(props) => (props.width > 850 ? "100%" : "45px")};
  max-width: 563px;

  input {
    height: 100%;
    width: 100%;
    background: #ffffff;
    border-radius: 8px;
    border: none;
    outline: none;
    padding: 12px;

    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 23px;
    color: black;

    background-image: url("https://img.icons8.com/android/50/000000/search.png");
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 98% 50%;
  }

  input::placeholder {
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 23px;
    color: #c6c6c6;
  }
`;
