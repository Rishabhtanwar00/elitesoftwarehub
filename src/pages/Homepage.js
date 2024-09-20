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
import { useEffect, useRef } from 'react';
import SuccessStories from '../components/SuccessStories';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import useWindowDimensions from '../components/useWindowDimensions';

const Homepage = () => {
	const { width } = useWindowDimensions();
	const container = useRef();

	const { contextSafe } = useGSAP({ scope: container });
	gsap.registerPlugin(ScrollTrigger);
	const handleClickPopup = contextSafe(() => {
		gsap.to('.contact-popup', {
			'clip-path': 'circle(100% at 50% 50%)',
			ease: 'power3.out',
			duration: 3,
		});
	});

	useGSAP(
		() => {
			window.scrollTo(0, 0);
			if (sessionStorage.getItem('hasMyAnimationPlayed') !== 'Played') {
				gsap.fromTo(
					'.hero-title',
					{
						translateY: '-400px',
						opacity: 0,
					},
					{
						translateY: '0',
						opacity: 1,
						ease: 'power3.out',
						duration: 1.8,
						delay: 3.2,
					}
				);
				gsap.fromTo(
					'.hero-desc',
					{
						translateY: '-400px',
						opacity: 0,
					},
					{
						translateY: '0',
						opacity: 1,
						ease: 'power3.out',
						duration: 1.9,
						delay: 3.1,
					}
				);
				gsap.fromTo(
					'.hero-buttons',
					{
						translateY: '-400px',
						opacity: 0,
					},
					{
						translateY: 0,
						opacity: 1,
						ease: 'power3.out',
						duration: 2,
						delay: 3,
					}
				);
				gsap.fromTo(
					'.hero-img',
					{
						translateX: '100vw',
					},
					{
						translateX: '0',
						ease: 'power3.out',
						duration: 2,
						delay: 3,
						onComplete: function () {
							sessionStorage.setItem('hasMyAnimationPlayed', 'Played');
						},
					}
				);
			}
		},
		{ scope: container }
	);
	const timeline = gsap.timeline(
		{
			scrollTrigger: {
				trigger: 'home-content',
				start: '23% center',
				end: '32% center',
				// markers: true,
				// scrub: 1,
			},
		},
		{ scope: container }
	);
	const timeline2 = gsap.timeline(
		{
			scrollTrigger: {
				trigger: 'home-features',
				start: '35% center',
				end: '42% center',
				// markers: true,
				// scrub: 1,
			},
		},
		{ scope: container }
	);

	const timeline3 = gsap.timeline(
		{
			scrollTrigger: {
				trigger: 'success-stories',
				start: '50% center',
				end: '65% center',
				// markers: true,
				// scrub: 1,
			},
		},
		{ scope: container }
	);

	useGSAP(() => {
		width > 768 &&
			timeline.fromTo(
				'.home-service-card',
				{
					y: '200px',
				},
				{
					y: 0,
					ease: 'power3.out',
					stagger: 0.03,
					// duration: 3,
				}
			);
		width > 768 &&
			timeline2
				.fromTo(
					'.home-feature',
					{
						x: '50%',
						opacity: 0,
					},
					{
						x: 0,
						opacity: 1,
						ease: 'power3.out',
						stagger: 0.03,
						// duration: 3,
					},
					'features'
				)
				.fromTo(
					'.home-feature-right',
					{
						x: '-50%',
						opacity: 0,
					},
					{
						x: 0,
						opacity: 1,
						ease: 'power3.out',
						stagger: 0.03,
						// duration: 3,
					},
					'features'
				);
		width > 768 &&
			timeline3
				.fromTo(
					'.success-story1',
					{
						x: '-550px',
					},
					{
						x: 0,

						ease: 'power3.out',
					}
				)
				.fromTo(
					'.success-story3',
					{
						y: '-500px',
					},
					{
						y: 0,
						ease: 'power3.out',
					}
				)
				.fromTo(
					'.success-story3',
					{
						x: '-550px',
					},
					{
						x: 0,
						ease: 'power3.out',
					},
					'story'
				)
				.fromTo(
					'.success-story2',
					{
						y: '-500px',
					},
					{
						y: 0,

						ease: 'power3.out',
					},
					'story'
				);
	});

	useEffect(() => {
		window.scroll(0, 0);
	}, []);
	DocumentTitle('EliteSoftwarehub');

	const navigate = useNavigate();

	return (
		<section ref={container}>
			<section
				className='hero-section flex-col'
				style={{ overflowX: 'hidden' }}
			>
				<h1 className='hero-title'>
					EliteSoftwarehub, Your All-in-One Business Solution Partner.
				</h1>
				<p className='hero-desc'>
					We offer everything you need to start, grow, and thrive in the modern
					business world. From company registration to website development and
					digital marketing, we provide comprehensive services tailored to meet
					your unique business goals.
				</p>
				<div className='flex hero-buttons'>
					<CustomButton
						title='Request a callback'
						handleClick={handleClickPopup}
					/>
					<CustomButton
						title='Contact Us'
						handleClick={() => navigate('/contact-us')}
					/>
				</div>
				<img className='hero-img' src={HeroImg} alt='Hero section img' />
			</section>
			<ContactPopup container={container} />
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
						<div className='home-feature home-feature-right'>
							<h1>Customer-Centric Approach</h1>
							<p>
								We tailor our solutions to meet your specific business needs,
								ensuring maximum efficiency and satisfaction.
							</p>
						</div>
						<div className='home-feature home-feature-right'>
							<h1>Proven Track Record</h1>
							<p>
								Many businesses have trusted us to turn their ideas into
								successful enterprises and transform their digital presence.
							</p>
						</div>
					</div>
				</div>
			</section>
			<SuccessStories timeline={timeline3} />
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
