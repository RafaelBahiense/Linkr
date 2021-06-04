import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export default function Preview(props) {

    const { previewIsOpen, setPreviewIsOpen, link, width } = props;

    const customStyles = {
        content: {
            background: "#333333",
            position: "absolute",
            top: `${width > 620 ? "5%" : 0}`,
            left: `${width > 620 ? "5%" : 0}`,
            width: `${width > 620 ? "90%" : "100%"}`,
            height: `${width > 620 ? "90%" : "100%"}`,
            background: "#333333",
            "border-radius": "20px",
            display: "flex",
            "align-items": "center",
            "flex-direction": "column",
            "justify-content": "space-evenly",
            "font-weight": "bold",
            color: "#FFFFFF",
            padding: "15px 20px 20px 21px",
            outline: "none"
        },
        overlay: {zIndex: 1000}
	};

    Modal.setAppElement('.root');

    function closeModal() {
        setPreviewIsOpen(false);
    }


    return (
        <div>
            <Modal
                isOpen={previewIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                        <Buttons>
                            <Open onClick={() => window.open(link,'_blank')}>Open in new tab</Open>
                            <AiOutlineClose style={{"font-size": "20px"}} onClick={closeModal}/>
                        </Buttons>
                        <iframe type={"text/html"} width={"100%"} height={"100%"} src={link}></iframe>
            </Modal>
        </div>
    );
}

const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

const Open = styled.button`
    width: 138px;
    height: 31px;
    background: #1877F2;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    color: #FFFFFF
`;
  