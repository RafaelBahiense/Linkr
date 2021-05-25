import axios from "axios";
import React, { useEffect } from "react";

import styled from "styled-components";

export default function Trending () {
    const [trending, setTrending] = React.useState([]);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer token`
            }
        }

        const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/hashtags/trending", config)

        request.then((response) => {
            setTrending([...response.data.hashtags]);
        },).catch((response) => {
            console.log(response)
        })
    },[]);

    return (
        <TrendingWrapper>
            <Title>trending</Title>
            <Bar/>
            {trending.map((hashtag) => <Hashtag>{`# ${hashtag.name}`}</Hashtag> )}
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