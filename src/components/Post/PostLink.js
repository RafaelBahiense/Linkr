import styled from 'styled-components';

export default function PostLink(props) {

    const { link, linkTitle, linkDescription, linkImage, youtubeId } = props;

    if (youtubeId && youtubeId !== "") {
        return (
            <YoutubeContainer>
                <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}`}>
                </iframe>
                <span>{link}</span>
            </YoutubeContainer>
        )
    } else {
        return (
            <PostLinkContainer>
                <div>
                    <h4>{linkTitle}</h4>
                    <p>{linkDescription}</p>
                    <br></br>
                    <span>{link}</span>
                </div>
                <img src={linkImage} alt={`imagem do ${linkTitle}`} />
            </PostLinkContainer>
        )
    }
}

const YoutubeContainer = styled.div`
    iframe{
        margin-bottom: 6px;
        min-height: 273px;
        width: 100%;
    }

    span{
        font-style: normal;
        font-weight: normal;
        font-size: 17px;
        line-height: 20px;
        color: #B7B7B7;
    }

    @media (min-width: 615px){
        iframe{
            width: 501px;
            height: 281px;
        }
    }
`;

const PostLinkContainer = styled.div`
    width: 100%;
    height: 115px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 11px;

    border: 1px solid #4D4D4D;
    border-radius: 11px;
    color: #CECECE;

    font-weight: 400;
    overflow-y: hidden;

    img{
        width: 95px;
        height: 115px;
        margin-left: 7px;
        border-radius: 0px 12px 13px 0px;
        object-fit: cover;
    }

    h4{
        font-size: 11px;
        line-height: 13px;
    }

    p{
        font-size: 9px;
        line-height: 11px;
        color: #9B9595;
        margin: 4px 0;
    }

    span{
        font-size: 9px;
        line-height: 11px;
        word-break: break-all;
    }

    @media (min-width: 615px){
        width: 503px;
        height: 155px;

        img{
            width: 153px;
            height: 155px;
            margin-left: 27px;
        }

        h4{
            font-size: 16px;
            line-height: 19px;
        }

        p{
            font-size: 11px;
            line-height: 13px;
            margin: 5px 0 13px 0;
        }

        a{
            font-size: 11px;
            line-height: 13px;
        }
    }
`