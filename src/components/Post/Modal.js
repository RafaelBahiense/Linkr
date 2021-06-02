import React from 'react';
import Modal from 'react-modal';
import styled from "styled-components";

export default function ModalScreen(props) {

    const { modalIsOpen, setIsOpen, action, doing, title, cancelText, continueText, link, preview, width } = props;

    Modal.setAppElement('.root');

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
            >
                {   preview
                    ?
                    <>
                        <div>
                            <button disabled={doing} className="deleteButton" onClick={() => window.open(link,'_blank')}>Open in new tab</button>
                            <button disabled={doing} className="closeButton" onClick={closeModal}>X</button>
                        </div>
                        <ExternalLink type={"text/html"} width={"500px"} height={"500px"} data={"https://www.w3schools.com"} title="W3Schools Free Online Web Tutorials"></ExternalLink>
                    </>
                    :
                    <>
                        <h2>{title}</h2>
                        <div>
                            <button disabled={doing} className="closeButton" onClick={closeModal}>{cancelText}</button>
                            <button disabled={doing} className="deleteButton" onClick={action}>{continueText}</button>
                        </div>
                    </>
                }
            </Modal>
        </div>
    );
}

const ExternalLink = styled.object`
    width: 70%;
    height: 80%;
`;