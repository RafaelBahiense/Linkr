import styled from "styled-components"
import UserSugestion from "./UserSugestion";

export default function Sugestions(props) {

    const { users } = props;

    return (
        <SugestionsContainer>
            {users && users.map(user => <UserSugestion key={user.id} id={user.id} isFollowingLoggedUser={user.isFollowingLoggedUser} username={user.username} avatar={user.avatar} />)}
        </SugestionsContainer>
    )
}

const SugestionsContainer = styled.div`
    width: 100%;
    background: #E7E7E7;
    border-radius: 0px 0px 8px 8px;
`;