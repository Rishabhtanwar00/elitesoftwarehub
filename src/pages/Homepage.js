import CustomButton from '../components/CustomButton';
import Heading from '../components/Heading';
import TestimonialSlider from '../components/TestimonialSlider';
import { ServicesData } from '../components/Data';
import HeroImg from '../assets/hero.png';
import FeaturesImg from '../assets/featuresimg.png';
import Circles from '../assets/circles.svg';

const Homepage = () => {
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
			<TestimonialSlider />
			<section className='home-contact flex-col'>
				<h1>Ready to Elevate Your Web Presence?</h1>
				<CustomButton title='Contact Us' />
			</section>
		</section>
	);
};

export default Homepage;
