import styled from "styled-components";
import UserSuggestion from "./UserSuggestion";

export default function Suggestions(props) {
  const { users } = props;

  return (
    <SuggestionsContainer>
      {users &&
        users.map((user) => (
          <UserSuggestion
            key={user.id}
            id={user.id}
            isFollowingLoggedUser={user.isFollowingLoggedUser}
            username={user.username}
            avatar={user.avatar}
          />
        ))}
    </SuggestionsContainer>
  );
}

const SuggestionsContainer = styled.div`
  width: 100%;
  background: #e7e7e7;
  border-radius: 0px 0px 8px 8px;
  z-index: 10;
`;
