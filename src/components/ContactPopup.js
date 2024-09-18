import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import CustomButton from './CustomButton';
import { IoCloseCircleSharp } from 'react-icons/io5';

const ContactPopup = ({ popup, setPopup }) => {
	const [close, setClose] = useState(false);

	useEffect(() => {
		setClose(popup);
	}, [popup]);

	return (
		<section
			className={
				!close ? 'contact-popup flex hide' : 'contact-popup flex show'
			}
		>
			<div className='contact-popup-details flex-col'>
				<button
					className='close-button'
					onClick={() => {
						setClose(!close);
						setPopup(false);
					}}
				>
					<i>
						<IoCloseCircleSharp />
					</i>
				</button>
				<ContactForm PopupForm />
				<h4>Or Call us now</h4>
				<CustomButton title='+91 9876543210' />
			</div>
		</section>
	);
};

export default ContactPopup;
