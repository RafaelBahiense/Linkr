import React, { useState } from 'react';
import Button from '../../general/Button';
import { FaMapMarkerAlt } from 'react-icons/fa';
import LocationModal from './LocationModal';

const LocationButton = ({user, geolocation}) => {
    const [isOpen, setIsOpen] = useState(false);
	const openModal = () => {
        setIsOpen(true);
    };

	return (
		<>
			{isOpen ? (
				<LocationModal
                    user={user}
                    geolocation={geolocation}
					setIsOpen={setIsOpen}
					modalIsOpen={isOpen}
				/>
			) : (
				''
			)}
			<Button
				onClick={openModal}
				width={12}
				height={12}
				color="transparent"
			>
				<FaMapMarkerAlt style={{ fontSize: 14 }} />
			</Button>
		</>
	);
};

export default LocationButton;
