import React from 'react';
import Modal from 'react-modal';

export default function ModalScreen(props) {

    const { modalIsOpen, setIsOpen, action, doing, title, cancelText, continueText } = props;

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
                <h2>{title}</h2>
                <div>
                    <button disabled={doing} className="closeButton" onClick={closeModal}>{cancelText}</button>
                    <button disabled={doing} className="deleteButton" onClick={action}>{continueText}</button>
                </div>
            </Modal>
        </div>
    );
}