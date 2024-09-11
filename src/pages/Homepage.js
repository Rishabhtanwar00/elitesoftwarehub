import CustomButton from '../components/CustomButton';
import HeroImg from '../assets/hero.png';
import Heading from '../components/Heading';
import Img1 from '../assets/webpage.png';
import Img2 from '../assets/ecommerce.png';
import Img3 from '../assets/coding.png';
import Img4 from '../assets/wireframe.png';
import Img5 from '../assets/database.png';
import Img6 from '../assets/support.png';
import Circles from '../assets/circles.svg';
import FeaturesImg from '../assets/featuresimg.png';
import { FaQuoteLeft } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';

const Homepage = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const intervalRef = useRef(null); // Use useRef to store the interval ID

	// Function to start the interval
	const startInterval = () => {
		intervalRef.current = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
		}, 5000); // 5 seconds interval
	};

	// Function to reset the interval
	const resetInterval = () => {
		clearInterval(intervalRef.current); // Clear the existing interval
		startInterval(); // Start a new interval
	};

	// Handle dot click
	const handleDotClick = (index) => {
		setCurrentIndex(index); // Set the current slide
		resetInterval(); // Reset the interval
	};

	useEffect(() => {
		startInterval(); // Start the interval when the component mounts

		return () => {
			clearInterval(intervalRef.current); // Clear the interval on component unmount
		};
	}, []);

	return (
		<section>
			<section className='hero-section flex-col'>
				<h1>
					Elevate Your Online Identity with Our Cutting-Edge Web Design and
					Development Solutions, Crafted to Set You Apart from the Rest
				</h1>
				<div className='flex hero-buttons'>
					<CustomButton title='Get Started' />
					<CustomButton title='Contact Us' />
				</div>
				<img className='hero-img' src={HeroImg} alt='Hero section img' />
			</section>
			<section className='home-content'>
				<section className='home-about'>
					<Heading title='Who We Are' />
					<div className='home-about-content'>
						<h2>
							EliteSoftwarehub, Transforming Ideas into Stunning Digital
							Realities
						</h2>
						<p>
							{' '}
							we specialize in transforming digital experiences with
							cutting-edge web solutions. Our team of dedicated professionals is
							passionate about delivering exceptional results, combining
							creativity with technical expertise to help your business thrive
							online.
						</p>
						<p>
							Our mission is simple to provide innovative, high-quality web
							design and development services that exceed your expectations and
							drive your business forward. We believe in creating websites that
							are not only visually stunning but also functional and
							user-friendly, ensuring an exceptional experience for your
							visitors.
						</p>
					</div>
				</section>
				<div className='home-services'>
					<div className='home-services-content'>
						<Heading title='Comprehensive Web Development Solutions' big />
						<div className='home-service-cards'>
							<div className='home-service-card'>
								<div className='home-service-icon'>
									<img src={Img1} alt='Custom Website Design Icon' />
								</div>
								<h3>Custom Website Design & Development</h3>
								<p>
									Tailor-made websites designed to reflect your brand identity
									and optimized for performance.
								</p>
								<img className='circle-svg' src={Circles} alt='Circle icon' />
							</div>

							<div className='home-service-card'>
								<div className='home-service-icon'>
									<img src={Img2} alt='E-Commerce Development Icon' />
								</div>
								<h3>E-Commerce Development</h3>
								<p>
									Seamless and scalable online stores with secure payment
									integration.
								</p>
								<img className='circle-svg' src={Circles} alt='Circle icon' />
							</div>

							<div className='home-service-card'>
								<div className='home-service-icon'>
									<img src={Img3} alt='Web Application Development Icon' />
								</div>
								<h3>Web Application Development</h3>
								<p>
									Robust, scalable web apps using the latest technologies to
									solve your business challenges.
								</p>
								<img className='circle-svg' src={Circles} alt='Circle icon' />
							</div>

							<div className='home-service-card'>
								<div className='home-service-icon'>
									<img src={Img4} alt='UI/UX Design Icon' />
								</div>
								<h3>UI/UX Design</h3>
								<p>
									Beautiful, intuitive designs that engage your audience and
									enhance user experience.
								</p>
								<img className='circle-svg' src={Circles} alt='Circle icon' />
							</div>

							<div className='home-service-card'>
								<div className='home-service-icon'>
									<img src={Img5} alt='API & Backend Development Icon' />
								</div>
								<h3>API & Backend Development</h3>
								<p>
									Secure, fast, and reliable backend solutions to power your web
									applications.
								</p>
								<img className='circle-svg' src={Circles} alt='Circle icon' />
							</div>

							<div className='home-service-card'>
								<div className='home-service-icon'>
									<img src={Img6} alt='Website Maintenance Icon' />
								</div>
								<h3>Website Maintenance & Support</h3>
								<p>
									24/7 support and continuous improvement to keep your site
									running smoothly.
								</p>
								<img className='circle-svg' src={Circles} alt='Circle icon' />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='home-features'>
				<Heading title='Why Partner with EliteSoftwarehub' big />
				<div className='home-features-content flex'>
					<div className='home-features-left flex-col'>
						<div className='home-feature'>
							<h1>Expertise & Innovation</h1>
							<p>
								Our team stays up-to-date with the latest technologies and
								trends to deliver cutting-edge solutions.
							</p>
						</div>
						<div className='home-feature'>
							<h1>Client-Centric Approach</h1>
							<p>
								Your success is our success. We tailor our services to meet your
								unique needs and objectives.
							</p>
						</div>
					</div>
					<div className='home-features-img'>
						<img src={FeaturesImg} alt='Why choose us img' />
					</div>
					<div className='home-features-right flex-col'>
						<div className='home-feature'>
							<h1>Scalability & Performance</h1>
							<p>
								We build scalable solutions that grow with your business,
								ensuring high performance even under heavy traffic.
							</p>
						</div>
						<div className='home-feature'>
							<h1>Proven Track Record</h1>
							<p>
								Our portfolio speaks for itself. We've helped numerous
								businesses transform their digital presence.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className='home-testimonials-section'>
				<div
					className='home-testimonials'
					style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
				>
					<div className='home-testimonial flex'>
						<div className='quote'>
							<i>
								<FaQuoteLeft />
							</i>
						</div>
						<div className='home-testimonial-content'>
							<h1>
								EliteSoftwarehub delivered beyond our expectations. Their
								attention to detail and technical expertise helped us launch a
								website that truly represents our brand.
							</h1>
							<h6>- Kraduae</h6>
						</div>
					</div>
					<div className='home-testimonial flex'>
						<div className='quote'>
							<i>
								<FaQuoteLeft />
							</i>
						</div>
						<div className='home-testimonial-content'>
							<h1>
								The team’s professionalism and innovative approach to
								problem-solving made the entire development process smooth and
								successful.
							</h1>
							<h6>- Twilearn</h6>
						</div>
					</div>
					<div className='home-testimonial flex'>
						<div className='quote'>
							<i>
								<FaQuoteLeft />
							</i>
						</div>
						<div className='home-testimonial-content'>
							<h1>
								Working with EliteSoftwarehub was seamless. They delivered a
								high-quality, responsive website that perfectly fits our needs.
								Their team is skilled, professional, and easy to work with.
								Highly recommend!
							</h1>
							<h6>- Prime File Advisors</h6>
						</div>
					</div>
				</div>
				<div className='dots-container flex'>
					<span
						className={`dot ${currentIndex === 0 ? 'active' : ''}`}
						onClick={() => handleDotClick(0)}
					></span>
					<span
						className={`dot ${currentIndex === 1 ? 'active' : ''}`}
						onClick={() => handleDotClick(1)}
					></span>
					<span
						className={`dot ${currentIndex === 2 ? 'active' : ''}`}
						onClick={() => handleDotClick(2)}
					></span>
				</div>
			</section>
			<section className='home-contact flex-col'>
				<h1>Ready to Elevate Your Web Presence?</h1>
				<CustomButton title='Contact Us' />
			</section>
		</section>
	);
};

export default Homepage;
