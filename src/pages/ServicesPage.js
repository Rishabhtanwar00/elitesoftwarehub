import Img1 from '../assets/companyservice.jpg';
import Img2 from '../assets/websiteservice.jpg';
import Img3 from '../assets/marketingservice.png';
import Heading from '../components/Heading';
import CustomButton from '../components/CustomButton';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
	const navigate = useNavigate();
	return (
		<section>
			<div className='services-hero flex'>
				<div className='services-hero-details'>
					<h1>
						At <span>EliteSoftwarehub</span>, we offer a complete range of
						business solutions tailored to help your business thrive. From
						company registration and legal compliance to custom website design
						and digital marketing, we provide everything you need to start,
						grow, and sustain your business. Our comprehensive services are
						designed to simplify processes, enhance your digital presence, and
						drive long-term success.
					</h1>
				</div>
			</div>
			<div className='services-section flex-col'>
				<Heading title='Our Services' />
				<div className='services-details flex-col'>
					<div className='service'>
						<div className='service-image flex'>
							<img src={Img1} alt='Company Registration Img' />
						</div>
						<div className='service-details'>
							<h1>Company Registration & Legal Compliance</h1>
							<p className='service-desc'>
								Starting a business involves a variety of legal and
								administrative tasks. Our Company Registration & Legal
								Compliance service takes the stress out of this process by
								ensuring that every aspect of your business registration is
								handled smoothly and efficiently.
							</p>
							<h2>What we offer:</h2>
							<p>
								<span>Business Name Registration:</span> We help you secure the
								perfect name for your business and ensure it meets legal
								standards.
							</p>
							<p>
								<span>Incorporation Services:</span> Our team handles all the
								paperwork for business incorporation, ensuring legal compliance
								with local and national regulations.
							</p>
							<p>
								<span>Tax and GST Registration:</span> We ensure your business
								is fully compliant with tax regulations by assisting with tax
								identification number applications and GST registration.
							</p>
							<p>
								<span>Compliance Advisory:</span> Ongoing support to keep your
								business compliant with changing legal and regulatory
								requirements, avoiding costly penalties.
							</p>
						</div>
					</div>
					<div className='service'>
						<div className='service-image flex'>
							<img src={Img2} alt='Website Development Img' />
						</div>
						<div className='service-details'>
							<h1>Website Design & Development</h1>
							<p className='service-desc'>
								Your website is often the first impression potential clients
								have of your business. Our Website Design & Development service
								focuses on creating visually stunning, responsive, and
								functional websites that reflect your brand and meet your
								business objectives.
							</p>
							<h2>Our Expertise:</h2>
							<p>
								<span>Custom Web Design:</span> We create tailor-made websites
								that are visually appealing and aligned with your brand
								identity.
							</p>
							<p>
								<span>Responsive Development:</span> Our websites are designed
								to provide a seamless experience across all devices, ensuring
								optimal performance on desktops, tablets, and smartphones.
							</p>
							<p>
								<span>API Integration:</span> We integrate third-party APIs to
								extend functionality, such as payment gateways, CRM systems, or
								social media feeds.
							</p>
							<p>
								<span>Security Protocols:</span> We implement strong security
								measures, including SSL certificates, data encryption, and
								protection against common vulnerabilities like SQL injection.
							</p>
							<p>
								<span>Ongoing Maintenance:</span> Offering continuous support
								and updates, ensuring your website stays secure, up-to-date, and
								functioning smoothly.
							</p>
						</div>
					</div>
					<div className='service'>
						<div className='service-image flex'>
							<img src={Img3} alt='Digital Marketing Img' />
						</div>
						<div className='service-details'>
							<h1>Digital Marketing</h1>
							<p className='service-desc'>
								A great website alone isn’t enough—you need the right digital
								strategy to drive traffic, generate leads, and convert visitors
								into customers. Our Digital Marketing services are designed to
								boost your online presence and help you reach your target
								audience more effectively.
							</p>
							<h2>Services We Provide:</h2>
							<p>
								<span>Social Media Marketing:</span> Engage your audience with
								tailored social media campaigns on platforms like Facebook,
								Instagram, LinkedIn, and Twitter.
							</p>
							<p>
								<span>Pay-Per-Click (PPC) Advertising:</span> Drive immediate
								traffic to your website with targeted PPC campaigns on Google
								Ads, Facebook Ads, and other platforms.
							</p>
							<p>
								<span>Content Marketing:</span> We create compelling content
								that attracts and engages your audience, driving organic traffic
								and improving your brand’s authority.
							</p>
							<p>
								<span>Email Marketing:</span> Stay connected with your customers
								through personalized email campaigns that build relationships
								and drive repeat business.
							</p>
						</div>
					</div>
				</div>
			</div>
			<section className='home-contact about-contact services-contact flex-col'>
				<p>
					At EliteSoftwarehub, we’re committed to helping you succeed with our
					comprehensive business solutions. Whether you need help registering
					your business, building your online presence, or marketing your
					products, we’re here to support you every step of the way.
				</p>
				<CustomButton
					title='Contact Us'
					handleClick={() => navigate('/contact-us')}
				/>
			</section>
		</section>
	);
};

export default ServicesPage;
