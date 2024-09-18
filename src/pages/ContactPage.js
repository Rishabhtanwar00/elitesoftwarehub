import { Link } from 'react-router-dom';
import CallImg from '../assets/call.png';
import EmailImg from '../assets/email.png';
import FacebookImg from '../assets/facebook.png';
import InstagramImg from '../assets/instagram.png';
import TwitterImg from '../assets/twitter.png';
import ContactForm from '../components/ContactForm';
import Contactbg from '../assets/contactbg.svg';

const ContactPage = () => {
	return (
		<section>
			<div className='contact-hero flex'>
				<div className='contact-hero-content'>
					<h1>Contact Us</h1>
					<p>
						We’d love to hear from you! Whether you have questions about our
						services, need assistance with your business registration, or want
						to start a new project, our team is here to help.
					</p>
				</div>
			</div>
			<div className='contact-details-section'>
				<div className='contact-details flex'>
					<div className='contact-links flex-col'>
						<button className='contact-link flex contact-link-button'>
							<img src={CallImg} alt='Call Icon' />
							<div className='contact-link-info'>
								<h2>Call us directly at</h2>
								<p>+91 9876543210</p>
							</div>
						</button>
						<button className='contact-link flex contact-link-button'>
							<img src={EmailImg} alt='Email Icon' />
							<div className='contact-link-info'>
								<h2>Email us at</h2>
								<p>elitesoftwarehub@gmail.com</p>
							</div>
						</button>
						<div className='contact-link flex-col contact-social'>
							<h3>Connect us on social media</h3>
							<div className='contact-link-social flex'>
								<Link to=''>
									<img src={FacebookImg} alt='Facebook Icon' />
								</Link>
								<Link to=''>
									<img src={InstagramImg} alt='Instagram Icon' />
								</Link>
								<Link to=''>
									<img src={TwitterImg} alt='Twitter Icon' />
								</Link>
							</div>
						</div>
					</div>
					<div className='contact-form-section flex-col'>
						<h1>Let’s Work Together</h1>
						<p>
							Fill out the form below, and we’ll get back to you as soon as
							possible. Let us know how we can assist you with your business
							needs.
						</p>
						<ContactForm />
						<img src={Contactbg} alt='' className='contact-bg' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactPage;
