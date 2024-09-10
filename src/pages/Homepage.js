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
					<div className='services'>
						<Heading title='Comprehensive Web Development Solutions' big />
						<div className='service-cards'>
							<div className='card'>
								<div className='icon'>
									<img src={Img1} alt='Custom Website Design Icon' />
								</div>
								<h3>Custom Website Design & Development</h3>
								<p>
									Tailor-made websites designed to reflect your brand identity
									and optimized for performance.
								</p>
								<img className='circle-svg' src={Circles} alt='Circle icon' />
							</div>

							<div className='card'>
								<div className='icon'>
									<img src={Img2} alt='E-Commerce Development Icon' />
								</div>
								<h3>E-Commerce Development</h3>
								<p>
									Seamless and scalable online stores with secure payment
									integration.
								</p>
								<img className='circle-svg' src={Circles} alt='Circle icon' />
							</div>

							<div className='card'>
								<div className='icon'>
									<img src={Img3} alt='Web Application Development Icon' />
								</div>
								<h3>Web Application Development</h3>
								<p>
									Robust, scalable web apps using the latest technologies to
									solve your business challenges.
								</p>
								<img className='circle-svg' src={Circles} alt='Circle icon' />
							</div>

							<div className='card'>
								<div className='icon'>
									<img src={Img4} alt='UI/UX Design Icon' />
								</div>
								<h3>UI/UX Design</h3>
								<p>
									Beautiful, intuitive designs that engage your audience and
									enhance user experience.
								</p>
								<img className='circle-svg' src={Circles} alt='Circle icon' />
							</div>

							<div className='card'>
								<div className='icon'>
									<img src={Img5} alt='API & Backend Development Icon' />
								</div>
								<h3>API & Backend Development</h3>
								<p>
									Secure, fast, and reliable backend solutions to power your web
									applications.
								</p>
								<img className='circle-svg' src={Circles} alt='Circle icon' />
							</div>

							<div className='card'>
								<div className='icon'>
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
			</section>
		</section>
	);
};

export default Homepage;
