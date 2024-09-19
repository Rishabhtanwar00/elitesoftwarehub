import HeroImg from '../assets/hero.png';
import FeaturesImg from '../assets/featuresimg.png';
import Circles from '../assets/circles.svg';
import DocumentTitle from '../components/DocumentTitle';
import CustomButton from '../components/CustomButton';
import ContactPopup from '../components/ContactPopup';
import Heading from '../components/Heading';
import TestimonialSlider from '../components/TestimonialSlider';
import { ServicesData } from '../components/Data';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SuccessStories from '../components/SuccessStories';

const Homepage = () => {
	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	DocumentTitle('EliteSoftwarehub');

	const [popup, setPopup] = useState(false);
	const navigate = useNavigate();

	return (
		<section>
			<section className='hero-section flex-col'>
				<h1>EliteSoftwarehub, Your All-in-One Business Solution Partner.</h1>
				<p>
					We offer everything you need to start, grow, and thrive in the modern
					business world. From company registration to website development and
					digital marketing, we provide comprehensive services tailored to meet
					your unique business goals.
				</p>
				<div className='flex hero-buttons'>
					<CustomButton
						title='Request a callback'
						handleClick={() => setPopup(true)}
					/>
					<CustomButton
						title='Contact Us'
						handleClick={() => navigate('/contact-us')}
					/>
				</div>
				<img className='hero-img' src={HeroImg} alt='Hero section img' />
			</section>
			<ContactPopup popup={popup} setPopup={setPopup} />
			<section className='home-content'>
				<section className='home-about'>
					<Heading title='Who We Are' />
					<div className='home-about-content'>
						<h2>
							EliteSoftwarehub, Transforming Ideas into Stunning Digital
							Realities
						</h2>
						<p>
							At EliteSoftwarehub, we are dedicated to providing comprehensive
							solutions that help businesses succeed at every stage of their
							journey. Our team of experts specializes in company registration,
							website development, and digital marketing, offering a complete
							package of services that cater to the unique needs of startups,
							small businesses, and established enterprises alike.
						</p>
						<p>
							Our Mission is to simplify business processes, enabling
							entrepreneurs and companies to focus on what they do best —
							growing their businesses. By leveraging modern technology and
							industry best practices, we ensure our clients have the tools and
							resources they need to thrive in a competitive marketplace.
						</p>
					</div>
				</section>
				<div className='home-services'>
					<div className='home-services-content'>
						<Heading title='Our Solutions' />
						<div className='home-service-cards'>
							{ServicesData.map((service) => (
								<div className='home-service-card' key={service.id}>
									<div className='home-service-icon'>
										<img src={service.img} alt={service.alt} />
									</div>
									<h3>{service.title}</h3>
									<p>{service.desc}</p>
									<img className='circle-svg' src={Circles} alt='Circle icon' />
								</div>
							))}
						</div>
						<div className='home-services-bg'></div>
					</div>
				</div>
			</section>
			<section className='home-features'>
				<Heading title='Why Partner with EliteSoftwarehub' big />
				<div className='home-features-content flex'>
					<div className='home-features-left flex-col'>
						<div className='home-feature'>
							<h1>End-to-End Business Solutions</h1>
							<p>
								We provide comprehensive services that cover all aspects of
								starting and growing a business.
							</p>
						</div>
						<div className='home-feature'>
							<h1>Expert Team</h1>
							<p>
								Our team of legal advisors, web developers, and marketing
								experts ensures top-notch service in every area.
							</p>
						</div>
					</div>
					<div className='home-features-img'>
						<img src={FeaturesImg} alt='Why choose us img' />
					</div>
					<div className='home-features-right flex-col'>
						<div className='home-feature'>
							<h1>Customer-Centric Approach</h1>
							<p>
								We tailor our solutions to meet your specific business needs,
								ensuring maximum efficiency and satisfaction.
							</p>
						</div>
						<div className='home-feature'>
							<h1>Proven Track Record</h1>
							<p>
								Many businesses have trusted us to turn their ideas into
								successful enterprises and transform their digital presence.
							</p>
						</div>
					</div>
				</div>
			</section>
			<SuccessStories />
			<TestimonialSlider />
			<section className='home-contact flex-col'>
				<h1>Ready to take your business to the next level? </h1>
				<p>
					Contact us now for a free consultation and let’s build a brighter
					future for your company together.
				</p>
				<CustomButton
					title='Contact Us'
					handleClick={() => navigate('/contact-us')}
				/>
			</section>
		</section>
	);
};

export default Homepage;
