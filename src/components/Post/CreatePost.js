import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Avatar from '../general/Avatar';

export default function CreatePost() {

    const [text, setText] = useState("");
    const [url, setUrl] = useState("");
    const [ publishing, setPublishing ] = useState(false);

    function createPost(e) {
        e.preventDefault();
        setPublishing(true);

        const config = {
            'Authorization': `Bearer userToken`
        }

        const data = {
            text,
            url
        }

        console.log(data);
        const response = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts`, data, config);
        
        response.then( () => {
            setPublishing(false);
            setText("");
            setUrl("");

            // ATT POSTS LIST!! <<<<<<<
            console.log("Atualizando lista de posts...");
        });

        response.catch( () => {
            setPublishing(false);
            alert("Houve um erro ao publicar seu link");
        })
    }

    return (
        <CreatePostContainer>
            <Avatar width="50px" />
            <div>
                <p>O que você tem pra favoritar hoje?</p>
                <form onSubmit={createPost}>
                    <input disabled={publishing} required value={url} onChange={(e) => setUrl(e.target.value)} type="url" placeholder="http:// ..."></input>
                    <input disabled={publishing} value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Muito irado esse link falando de #javascript"></input>
                    <button disabled={publishing} type="submit" > {publishing ? "Publicando" :"Publicar"} </button>
                </form>
            </div>
        </CreatePostContainer>
    );
}

const CreatePostContainer = styled.div`
    width: 100%;
    height: 164px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'Lato', sans-serif;
    padding: 12px;
    display: flex;
    justify-content: space-between;

    img{
        display: none;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        p{
        font-weight: 300;
        font-size: 17px;
        line-height: 20px;
        color: #707070;
        text-align: center;
        }

        form{
            display: flex;
            flex-direction: column;
            align-items: center;

            input{
                width: 345px;
                height: 30px;
                background: #EFEFEF;
                border-radius: 5px;
                border: none;
                margin-bottom: 6px;
                padding: 6px 11px 8px 11px;
                outline: none;
            }

            input:last-of-type{
                height: 47px;
            }

            input::placeholder{
                font-weight: 300;
                font-size: 13px;
                line-height: 16px;
                color: #949494;
            }

            button{
                width: 112px;
                height: 22px;
                background: #1877F2;
                border-radius: 5px;
                border: none;

                font-weight: 700;
                font-size: 13px;
                line-height: 16px;
                color: #FFFFFF;

                align-self: flex-end;
                cursor: pointer;
            }
        }
    }

    @media (min-width: 750px){

        width: 611px;
        height: 209px;
        border-radius: 16px;
        padding: 16px 22px 16px 18px;

        img{
        display: block;
        }

        div{
            align-items: flex-start;

            p{
            font-size: 20px;
            line-height: 24px;
            text-align: start;
            }

            form{

                input{
                    width: 503px;
                }

                input:last-of-type{
                    height: 66px;
                
                }

                input::placeholder{
                    font-size: 15px;
                    line-height: 18px;
                }

                button{
                    height: 31px;

                    font-size: 14px;
                    line-height: 17px;

                    align-self: flex-end;
                }
            }
        }
    }
`;