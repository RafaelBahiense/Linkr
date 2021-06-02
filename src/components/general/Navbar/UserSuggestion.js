import { Link } from "react-router-dom";
import styled from "styled-components";

export default function UserSuggestion(props) {
  const { avatar, username, id, isFollowingLoggedUser } = props;

  return (
    <Link to={`/user/${id}`}>
      <UserContainer>
        <img src={avatar} alt={username + "Suggestion avatar"} />
        <strong>{username}</strong>{" "}
        {isFollowingLoggedUser ? <span>• following</span> : ""}
      </UserContainer>
    </Link>
  );
}

const UserContainer = styled.div`
  width: 90%;
  height: 40px;

  margin: 16px 0 16px 17px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 39px;
    height: 39px;
    object-fit: cover;
    border-radius: 50%;
  }

  strong {
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 23px;
    color: #515151;
    margin: 0 8px 0 12px;
  }

  span {
    font-style: normal;
    font-weight: normal;
    font-size: 19px;
    line-height: 23px;
    color: #c5c5c5;
  }
`;
