import styled from 'styled-components';
import Avatar from '../general/Avatar';
import Likes from './Likes';
import PostLink from './PostLink';
import { TiPencil, TiTrash } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { useState, useContext, useRef, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import axios from 'axios';
import ModalScreen from './Modal';
import ReactHashtag from "react-hashtag";


export default function Post(props) {

    const { text, link, refreshPosts, mylikes } = props;
    const { user, token } = useContext(UserContext);
    const [deleting, setDeleting] = useState(false);
    const [editing, setEditing] = useState(false);
    const [sendingPutRequest, setSendingPutRequest] = useState(false);
    const [newText, setNewText] = useState("")
    const myPost = (props.user.id === user.id);
    const [modalIsOpen, setIsOpen] = useState(false);
    const inputElement = useRef(null);

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };

    function deletePost() {
        setDeleting(true);
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${props.id}`, config);

        promise.then(response => {
            console.log(response);
            setDeleting(false);
            setIsOpen(false);
            refreshPosts();
        });
        promise.catch(err => {
            console.log(err);
            setDeleting(false);
            setIsOpen(false);
            alert("Não foi possível excluir esse post!");
        });
    }

    function editingPost() {
        setEditing(!editing);
        setNewText("");
    }

    useEffect(() => {
        if (editing) {
            inputElement.current.focus();
        }
    }, [editing]);

    function editPost(e) {
        e.preventDefault();
        setSendingPutRequest(true);

        const data = {
            "text": newText
        };

        const promise = axios.put(`https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts/${props.id}`, data, config);

        promise.catch((err) => {
            alert("Não foi possível editar o texto!");
            console.log(err);
            setSendingPutRequest(false);
        })

        promise.then(() => {
            setSendingPutRequest(false);
            setEditing(false);
            refreshPosts();
        })
    }

    return (
        <PostContainer>
            { modalIsOpen ? <ModalScreen deleting={deleting} deletePost={deletePost} setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} /> : ""}
            <div>
                <Avatar id={props.user.id} avatar={props.user.avatar} />
                <Likes {...props} mylikes={mylikes}/>
            </div>
            <PostContentContainer>
                <PostUserName>
                    <Link to={`/user/${props.user.id}`}>{props.user.username}</Link>
                    {myPost
                        ?
                        <div>
                            <TiPencil onClick={() => editingPost()} />
                            <TiTrash onClick={() => setIsOpen(true)} />
                        </div>
                        :
                        <div></div>
                    }
                </PostUserName>
                <PostContent >
                    {editing &&
                        <form onSubmit={(e) => editPost(e)} onKeyDown={(key) => key.code === "Escape" && editingPost()}>
                            <input ref={inputElement} disabled={sendingPutRequest} onChange={(e) => setNewText(e.target.value)} type="text" value={newText || text} />
                        </form>
                    }
                    {editing
                        ? ""
                        :
                        (<ReactHashtag renderHashtag={(hashtagValue) => (
                            <Link to={`/hashtag/${hashtagValue.replace("#", "")}`}>{hashtagValue}</Link>
                        )}>
                            {newText || text}
                        </ReactHashtag>)
                    }
                </PostContent>
                <a href={link} target="_blank"><PostLink {...props} /></a>
            </PostContentContainer>
        </PostContainer>
    );
}

const PostContainer = styled.div`
    font-family: 'Lato', sans-serif;
    background: #171717;
    display: flex;
    justify-content: space-between;
    height: 232px;
    padding: 9px 18px 15px 15px;
    margin: 16px 0;
    position: relative;

    @media (min-width: 615px){
        width: 611px;
        height: 276px;
        border-radius: 16px;
    }
`;

const PostUserName = styled.div`

    span{
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
    }

    div{
        display: none;
        cursor: pointer;
        font-size: 20px;
        *{
            margin-left: 12px;
        }
    }

    color: #FFFFFF;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 615px){
        span{
            font-size: 19px;
            line-height: 23px;
        }

        div{
            display: block;
        }
    }
`

const PostContent = styled.div`
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #B7B7B7;
    margin: 7px 0 13px 0;
    word-break: break-all;
    
    strong{
        color: #FFFFFF;
    }

    input{
        width: 100%;
        border-radius: 7px;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #4C4C4C;
        padding: 4px 12px 12px 9px;
        outline: none;
    }

    a {
        font-weight: bold;
        color: #FFFFFF;
    }

    @media (min-width: 615px){
        font-size: 17px;
        line-height: 20px;
    }
`
const PostContentContainer = styled.div`
    width: 100%;
    margin-left: 14px;
    @media (min-width: 615px){
        width: 502px;
    }
`