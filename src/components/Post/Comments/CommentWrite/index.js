import React, { useContext } from 'react';
import UserContext from '../../../../contexts/UserContext';
import Avatar from '../../../general/Avatar';
import Container from '../../../general/Container';
import Form from '../../../general/Form';
import Input from '../../../general/Input';

const CommentWrite = ({config, id}) => {
    const {user} = useContext(UserContext);

    return (
        <Container horizontal margin="20px 0">
            <Avatar id={user.id} avatar={user.avatar} width="35px" />
            <div style={{width: 15}}></div>
            <Form width="100%">
            <Input text="write a comment..." color="#252525" border="none" fSize="14px" data={{value: comment, setValue: setComment}}/>
            </Form>
        </Container>
    );
}

export default CommentWrite;
