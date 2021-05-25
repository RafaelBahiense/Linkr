import styled from 'styled-components';

export default function CreatePost() {
    return (
        <CreatePostContainer>
            <p>O que você tem pra favoritar hoje?</p>
            <form>
                <input type="url" placeholder="http:// ..."></input>
                <input type="text" placeholder="Muito irado esse link falando de #javascript"></input>
                <button type="submit">Publicar</button>
            </form>
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
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    p{
        width: 307px;
        height: 40px;
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
        }
    }
`;