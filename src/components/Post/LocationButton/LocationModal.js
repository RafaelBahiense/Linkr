import React, { useContext } from 'react';
import Modal from 'react-modal';
import Button from '../../general/Button';
import Container from '../../general/Container';
import MapContainer from './MapContainer';

const LocationModal = (props) => {
	const { modalIsOpen, setIsOpen, user, geolocation } = props;

	const customStyles = {
		overlay: { zIndex: 1000 },
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
				className="modal location"
			>
				<Container horizontal>
					<h2>{`${user.username}'s location`}</h2>
					<Button
						text="X"
						width={20}
						height={20}
						color="transparent"
                        onClick={closeModal}
					/>
				</Container>
				<div
					style={{
						width: '100%',
						height: '100%',
						display: 'flex',
						marginTop: 10,
						justifyContent: 'center',
						alignItems: 'center',
						position: 'relative',
					}}
				>
					<MapContainer geolocation={geolocation} />
				</div>
			</Modal>
		</div>
	);
};

export default LocationModal;
