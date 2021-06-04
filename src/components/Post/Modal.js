import React from 'react';
import Modal from 'react-modal';

export default function ModalScreen(props) {
	const {
		modalIsOpen,
		setIsOpen,
		action,
		doing,
		title,
		cancelText,
		continueText,
	} = props;

	const customStyles = {
        overlay: {zIndex: 1000}
	};

	Modal.setAppElement('.root');

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div>
			<Modal
				style={customStyles}
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				className="modal"
			>
				<h2>{title}</h2>
				<div>
					<button
						disabled={doing}
						className="closeButton"
						onClick={closeModal}
					>
						{cancelText}
					</button>
					<button
						disabled={doing}
						className="deleteButton"
						onClick={action}
					>
						{continueText}
					</button>
				</div>
			</Modal>
		</div>
	);
}