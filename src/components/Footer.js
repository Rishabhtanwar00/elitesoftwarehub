import { Link } from 'react-router-dom';
import EliteSoftwarehub from '../assets/elitegen.png';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer>
			<div className='footer-top'>
				<img src={EliteSoftwarehub} alt='' />
				<p>
					Transform your online presence with our all-in-one services, from
					cutting-edge web design and development.
				</p>
				<div className='footer-email'>
					<h2>Let's Talk</h2>
					<Link>elitesoftwarehub@gmail.com</Link>
				</div>
				<div className='footer-social'>
					<h2>Stay Connected</h2>
					<div className='footer-social-links'>
						<Link>
							<i>
								<FaTwitter />
							</i>
						</Link>
						<Link>
							<i>
								<FaFacebook />
							</i>
						</Link>
						<Link>
							<i>
								<FaInstagram />
							</i>
						</Link>
					</div>
				</div>
			</div>
			<div className='footer-bottom'>
				<p>© 2024 EliteSoftwarehub. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
