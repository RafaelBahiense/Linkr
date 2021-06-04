import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import CreatePost from "../Post/CreatePost";
import Post from "../Post/Post";
import Trending from "./Trending";
import Avatar from "../general/Avatar";
import UserContext from "../../contexts/UserContext";
import axios from "axios";
import SearchUsers from "../general/Navbar/SearchUsers";
import InfiniteScroll from "react-infinite-scroller";

export default function TimelineLayout(props) {
  const [width, setWidth] = React.useState(window.innerWidth);
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  const { id, avatar } = props.user || {};
  const { timeline, posts } = props;
  const [following, setFollowing] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [followingUsers, setFollowingUsers] = useState([]);

  const { token } = useContext(UserContext);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/follows`,
      config
    );

    promise.then((response) => {
      const followingUsers = response.data.users;
      setFollowingUsers(followingUsers);
      const followingThis =
        followingUsers.length === 0
          ? false
          : followingUsers.filter((user) => user.id === id).length;
      setFollowing(followingThis);
      setDisabled(false);
    });
  }, [id]);

  function follow() {
    setFollowing(true);

    const promise = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/${id}/follow`,
      {},
      config
    );

    promise.catch(() => {
      setFollowing(false);
      alert("Follow error!");
    });
  }

  function unFollow() {
    setFollowing(false);

    const promise = axios.post(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/${id}/unfollow`,
      {},
      config
    );

    promise.catch(() => {
      setFollowing(true);
      alert("Unfollow error!");
    });
  }

  return (
    <>
      {timeline && width <= 850 && <SearchUsers />}
      <Container width={width}>
        <section>
          <div>
            {id ? <Avatar avatar={avatar} nolink /> : null}
            <h2>{props.title ? props.title : "timeline"}</h2>
          </div>
          {id ? (
            following ? (
              <ButtonUnFollow disabled={disabled} onClick={() => unFollow()}>
                {" "}
                Unfollow{" "}
              </ButtonUnFollow>
            ) : (
              <ButtonFollow disabled={disabled} onClick={() => follow()}>
                {" "}
                Follow{" "}
              </ButtonFollow>
            )
          ) : null}
        </section>
        <div>
          <Posts width={width}>
            {timeline ? <CreatePost refreshPosts={props.refreshPosts} /> : null}
            {posts == null ? (
              <LoaderWrapper width={width}>
                <Loader type="Rings" color="#00BFFF" height={400} width={400} />
              </LoaderWrapper>
            ) : posts.length > 0 ? (
              <InfiniteScroll
                loadMore={() => props.loadPosts(posts[posts.length - 1].id)}
                loader={
                  <LoaderWrapper width={width}>
                    <Loader
                      type="Rings"
                      color="#00BFFF"
                      height={400}
                      width={400}
                    />
                  </LoaderWrapper>
                }
                hasMore={props.hasMore}
                pageStart={0}
                threshold={50}
              >
                {posts.map((post, index) => (
                  <Post
                    key={index}
                    width={width}
                    {...post}
                    refreshPosts={props.refreshPosts}
                    mylikes={props.mylikes}
                  />
                ))}
              </InfiniteScroll>
            ) : timeline ? (
              followingUsers.length == 0 ? (
                <LoaderWrapper width={width}>
                  <p>
                    Você não segue ninguém ainda, procure por perfis na busca!
                  </p>
                </LoaderWrapper>
              ) : (
                <LoaderWrapper width={width}>
                  <p>Nenhuma postagem encontrada!</p>
                </LoaderWrapper>
              )
            ) : (
              <LoaderWrapper width={width}>
                <p>Nenhuma postagem encontrada!</p>
              </LoaderWrapper>
            )}
          </Posts>
          {width >= 940 ? (
            <div>
              <Trending />
            </div>
          ) : null}
        </div>
      </Container>
    </>
  );
}

const ButtonFollow = styled.button`
  width: 112px;
  height: 31px;
  border-radius: 5px;
  border: none;
  outline: none;

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  background: #1877f2;
  color: #ffffff;

  &:disabled {
    background: black;
    color: white;
  }
`;

const ButtonUnFollow = styled.button`
  width: 112px;
  height: 31px;
  border-radius: 5px;
  border: none;
  outline: none;

  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;

  background: #ffffff;
  color: #1877f2;

  &:disabled {
    background: black;
    color: white;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  margin-top: 122px;
  width: ${(props) =>
    props.width >= 940 ? "937px" : props.width > 611 ? "611px" : "100%"};

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${(props) => (props.width >= 611 ? "40px" : "20px")};

    div {
      display: flex;
      align-items: center;
      h2 {
        font-family: Oswald;
        font-weight: bold;
        font-size: 43px;
        color: #ffffff;
        margin-left: 18px;
      }
    }
  }

  & > div {
    display: flex;
  }
`;

const Posts = styled.div`
  max-width: ${(props) => (props.width > 611 ? "611px" : "100%")};

  & > p {
    font-size: 30px;
    color: #ffffff;
  }
`;

const LoaderWrapper = styled.div`
  width: ${(props) => (props.width > 611 ? "611px" : "100%")};
  text-align: center;

  & > p {
    margin-top: 50px;
    font-size: 25px;
    color: white;
  }
`;
