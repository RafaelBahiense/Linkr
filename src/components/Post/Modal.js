import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import styled from 'styled-components';

export default function ModalScreen(props) {

    const { modalIsOpen, setIsOpen, deletePost, deleting } = props;

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
                <h2>Tem certeza que deseja excluir essa publicação?</h2>
                <div>
                    <button disabled={deleting} className="closeButton" onClick={closeModal}>Não, voltar</button>
                    <button disabled={deleting} className="deleteButton" onClick={deletePost}>Sim, excluir</button>
                </div>
            </Modal>
        </div>
    );
}