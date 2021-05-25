import React, { useState } from 'react';
import Container from "../general/Container";
import Form from "../general/Form";
import Input from "../general/Input";
import Button from "../general/Button";
import Go from "../general/Go";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");

    return (
        <Container height="420px" font="Oswald">
            <Form width="430px">
                <Input required height={65} type="email" data={{value: email , setValue: setEmail}} />
                <Input required height={65} type="password" data={{value: password , setValue: setPassword}} />
                <Input required height={65} data={{value: username , setValue: setUsername}} />
                <Input required height={65} type="url" data={{value: pictureUrl , setValue: setPictureUrl}} />
                <Button height={65} text="Sign Up" />
            </Form>
            <Go to="/" text="Switch back to log in" color="#fff" fSize="20px" />
        </Container>
    );
}

export default SignUp;
