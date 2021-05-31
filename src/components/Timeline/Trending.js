import axios from "axios";
import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

export default function Trending () {
    const [trending, setTrending] = React.useState([]);
    const {token} = useContext(UserContext);

    const history = useHistory();
    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/hashtags/trending", config)

        request.then((response) => {
            setTrending([...response.data.hashtags]);
        },).catch(() => {
            alert("Faça login novamente!");
            history.push("/");
        })
    },[]);

    return (
        <TrendingWrapper>
            <Title>trending</Title>
            <Bar/>
            {trending.map((hashtag, index) => <Link key={index} to={`/hashtag/${hashtag.name}`}><Hashtag>{`# ${hashtag.name}`}</Hashtag></Link> )}
        </TrendingWrapper>
    );
}

const TrendingWrapper = styled.div`
    margin-top: 16px;
    margin-left: 25px;
    height: 406px;
    width: 301px;
    background: #171717;
    border-radius: 16px;
`;

const Title = styled.span`
    margin-left: 16px;
    font-family: Oswald;
    font-weight: bold;
    font-size: 27px;
    line-height: 60px;
    color: #FFFFFF;
`;

const Bar = styled.div`
    height: 1px;
    margin-bottom: 20px;
    border: 1px solid #484848;
`;

const Hashtag = styled.p`
    margin-left: 16px;
    margin-bottom: 10px;
    font-family: Lato;
    font-weight: bold;
    font-size: 19px;
    color: #FFFFFF;
`;