import React from 'react';
import Modal from 'react-modal';

export default function ModalScreen(props) {

    const { link, width } = props;

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
                        <div>
                            <button disabled={doing} className="deleteButton" onClick={() => window.open(link,'_blank')}>Open in new tab</button>
                            <button disabled={doing} className="closeButton" onClick={closeModal}>X</button>
                        </div>
                        <iframe type={"text/html"} width={"500"} height={"500"} data={"https://www.w3schools.com"} title="W3Schools Free Online Web Tutorials"></iframe>
            </Modal>
        </div>
    );
}
