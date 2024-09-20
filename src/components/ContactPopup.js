import ContactForm from './ContactForm';
import CustomButton from './CustomButton';
import { IoCloseCircleSharp } from 'react-icons/io5';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const ContactPopup = () => {
	const container = useRef();
	const { contextSafe } = useGSAP({ scope: container });
	const handleClickPopup = contextSafe(() => {
		gsap.to('.contact-popup', {
			// translateX:'100vw',
			// scale:0,
			'clip-path': 'circle(0% at 50% 50%)',
			ease: 'power3.out',
			duration: 1,
		});
	});

	return (
		<section className='contact-popup flex' ref={container}>
			<div className='contact-popup-details flex-col'>
				<button className='close-button' onClick={handleClickPopup}>
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
