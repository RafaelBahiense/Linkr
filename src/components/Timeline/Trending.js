import axios from "axios";
import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";

import styled from "styled-components";
import UserContext from "../../contexts/UserContext";

export default function Trending () {
    const [trending, setTrending] = React.useState(null);
    const {token} = useContext(UserContext);
    const [hashtag, setHashtag] = React.useState(null);

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

    function editPost(e) {
        e.preventDefault();
        if (hashtag) {
            history.push(`/hashtag/${hashtag}`)
        }
    };

    return (
        <TrendingWrapper>
            <Title>trending</Title>
            <Bar/>
            {trending 
            ? trending.map((hashtag, index) =>  <Link key={index} to={`/hashtag/${hashtag.name}`}>
                                                    <Hashtag>{`# ${hashtag.name}`}</Hashtag>
                                                </Link> 
                          )
            :   <LoaderWrapper>
                    <Loader
                    type="Rings"
                    color="#00BFFF"
                    height={290}
                    width={301}
                    />
                </LoaderWrapper>
            }
            <form onSubmit={(e) => editPost(e)}>
                <input placeholder={"type a hashtag"} 
                    value={hashtag}
                    onChange={(e) => setHashtag(e.target.value)}
                />
            </form>
            <span>#</span>
        </TrendingWrapper>
    );
}

const TrendingWrapper = styled.div`
    position: fixed;
    margin-top: 16px;
    margin-left: 25px;
    height: 441px;
    width: 301px;
    background: #171717;
    border-radius: 16px;

    & > form {
        
        input {
            padding-left: 36px;
            padding-bottom: 3px;
            margin-top: 15px;
            margin-left: 16px;
            width: 269px;
            height: 35px;
            background: #252525;
            border-radius: 8px;
            border: none;
            font-family: Lato;
            font-weight: bold;
            font-size: 19px;
            color: #FFFFFF;
        }

        input::placeholder {
            font-family: Lato;
            font-style: italic;
            font-weight: normal;
            font-size: 16px;
            color: #575757;
            line-height: 32px;
        }
    }

    span:last-child {
        position: relative;
        bottom: 28px;
        left: 30px;
        color: white;
        font-family: Lato;
        font-weight: bold;
        font-size: 19px;
    }
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

const LoaderWrapper = styled.div`
  width: 100%;
  height: 290px;
  text-align: center;

`;