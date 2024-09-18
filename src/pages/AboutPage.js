import Img1 from '../assets/website.jpeg';
import Img2 from '../assets/office.jpeg';
import Img3 from '../assets/vision.png';
import Img4 from '../assets/mission.png';
import Img5 from '../assets/services.jpg';
import Img6 from '../assets/excellence.png';
import Img7 from '../assets/integrity.png';
import Img8 from '../assets/collaboration.png';
import Img9 from '../assets/innovation.png';
import Img10 from '../assets/satisfaction.png';
import Heading from '../components/Heading';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
	const navigate = useNavigate();
	return (
		<section>
			<div className='about-hero'>
				<h1>
					ABOUT <span>US</span>
				</h1>
				<div className='about-hero-details flex'>
					<div className='about-hero-left'>
						<h1>US</h1>
						<h4>Smooth process and Quality work</h4>
						<p>
							At EliteSoftwarehub, we pride ourselves on being a trusted partner
							for businesses looking to grow, evolve, and thrive in today’s
							fast-paced digital world. Our comprehensive range of services,
							from company registration to website development and digital
							marketing, is designed to give businesses everything they need to
							succeed under one roof.
						</p>
					</div>
					<div className='about-hero-middle'>
						<img src={Img1} alt='' />
					</div>
					<div className='about-hero-right'>
						<img src={Img2} alt='' />
						<p>
							With years of experience and a client-first approach, we
							specialize in simplifying the complexities of starting and scaling
							a business. Our expert team provides strategic solutions tailored
							to each business’s unique needs, ensuring that our clients can
							focus on what matters most-running their business.
						</p>
					</div>
				</div>
			</div>			
			<div className='about-vision-mission flex-col'>
				<Heading title='Our Vision & Mission' />
				<div className='vision-mission-details flex-col'>
					<div className='vision-mission flex'>
						<div className='vision-mission-icon'>
							<img src={Img3} alt='Vision Icon' />
						</div>

						<div className='vision-mission-info'>
							<h1>Our Vision</h1>
							<p>
								To be the leading provider of business solutions that empower
								entrepreneurs and companies to turn their ideas into thriving
								enterprises. We envision a world where starting and running a
								business is simple, efficient, and accessible to everyone, with
								no hurdles standing between great ideas and success.
							</p>
						</div>
					</div>
					<div className='vision-mission flex'>
						<div className='vision-mission-info'>
							<h1>Our Mission</h1>
							<p>
								To provide comprehensive, end-to-end business solutions that
								simplify operations, enhance digital presence, and promote
								sustainable growth. We are dedicated to empowering businesses
								with tailored services that meet their unique needs, driving
								long-term success and innovation.
							</p>
						</div>
						<div className='vision-mission-icon'>
							<img src={Img4} alt='Vision Icon' />
						</div>
					</div>
				</div>
			</div>
			<div className='about-services flex'>
				<div className='about-title'>
					<Heading title='Our Core Services' />
				</div>
				<img src={Img5} alt='Services Img' />
				<div className='about-services-details'>
					<div className='about-title-inside'>
						<Heading title='Our Core Services' />
					</div>
					<div className='about-service'>
						<h1>Company Registration & Legal Compliance</h1>
						<p>
							We handle all aspects of business registration and legal
							compliance, ensuring your company is set up efficiently and
							correctly. From document filing to meeting regulatory standards,
							we make the process easy, giving you peace of mind as you focus on
							growing your business.
						</p>
					</div>
					<div className='about-service'>
						<h1>Website Design & Development</h1>
						<p>
							Our team builds responsive, user-friendly websites that align with
							your brand and business goals. Whether it's a corporate site or an
							e-commerce platform, we focus on performance, functionality, and
							design to create websites that engage visitors and drive results.
						</p>
					</div>
					<div className='about-service'>
						<h1>Digital Marketing</h1>
						<p>
							We create targeted digital marketing strategies, including SEO,
							social media, and paid campaigns, to boost your online visibility
							and drive conversions. Our data-driven approach ensures that your
							brand reaches the right audience, delivering measurable success
							across all digital platforms.
						</p>
					</div>
				</div>
			</div>
			<div className='about-values flex-col'>
				<Heading title='Our Core Values' />
				<div className='about-values-details flex'>
					<div className='about-value'>
						<img src={Img6} alt='Excellence Icon' />
						<h2>Excellence</h2>
						<p>
							We are committed to delivering high-quality services that exceed
							our clients’ expectations.
						</p>
					</div>
					<div className='about-value'>
						<img src={Img7} alt='Integrity Icon' />
						<h2>Integrity</h2>
						<p>
							We operate with transparency, honesty, and professionalism in all
							our interactions.
						</p>
					</div>
					<div className='about-value'>
						<img src={Img8} alt='Collaboration Icon' />
						<h2>Collaboration</h2>
						<p>
							We believe in the power of teamwork - both within our company and
							with our clients.
						</p>
					</div>
					<div className='about-value'>
						<img src={Img9} alt='Innovation Icon' />
						<h2>Innovation</h2>
						<p>
							We embrace change and continually adapt our strategies to stay at
							the forefront of industry trends.
						</p>
					</div>
					<div className='about-value'>
						<img src={Img10} alt='Customer Satisfaction Icon' />
						<h2>Customer Satisfaction</h2>
						<p>
							Our clients’ success is our top priority, and we work tirelessly
							to ensure they achieve their business goals.
						</p>
					</div>
				</div>
			</div>
			<section className='home-contact about-contact flex-col'>
				<h1>Let’s Work Together </h1>
				<p>
					We believe in building lasting partnerships with our clients. Whether
					you’re just starting your entrepreneurial journey or looking to scale
					your existing business, EliteSoftwarehub is here to help you every
					step of the way. Contact us today for a consultation and see how we
					can transform your business.
				</p>
				<CustomButton
					title='Contact Us'
					handleClick={() => navigate('/contact-us')}
				/>
			</section>
		</section>
	);
};

export default AboutPage;
