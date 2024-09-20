import { FaQuoteLeft } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import { testimonialsData } from './Data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const TestimonialSlider = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const intervalRef = useRef(null);

	// Function to start the interval
	const startInterval = () => {
		intervalRef.current = setInterval(() => {
			setCurrentIndex((prevIndex) =>
				prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
			);
		}, 8000);
	};

	// Function to reset the interval
	const resetInterval = () => {
		clearInterval(intervalRef.current);
		startInterval();
	};

	// Handle dot click
	const handleDotClick = (index) => {
		setCurrentIndex(index);
		resetInterval();
	};

	useEffect(() => {
		startInterval();

		return () => {
			clearInterval(intervalRef.current); // Clear the interval on component unmount
		};
	}, []);

	useGSAP(
		() => {
			gsap.to('.home-testimonials', {
				translateX: `-${currentIndex * 100}vw`,
				duration: 1.5,
				ease: 'power3.inOut',
			});
		},
		{ dependencies: [currentIndex] }
	);

	return (
		<section className='home-testimonials-section'>
			<div
				className='home-testimonials'
				// style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
			>
				{testimonialsData.map((testimonial) => (
					<div className='home-testimonial flex' key={testimonial.id}>
						<div className='quote'>
							<i>
								<FaQuoteLeft />
							</i>
						</div>
						<div className='home-testimonial-content'>
							<h1>{testimonial.desc}</h1>
							<h6>- {testimonial.name}</h6>
						</div>
					</div>
				))}
			</div>
			<div className='dots-container flex'>
				{testimonialsData.map((_, index) => (
					<span
						key={index}
						className={`dot ${currentIndex === index ? 'active' : ''}`}
						onClick={() => handleDotClick(index)}
					></span>
				))}
			</div>
		</section>
	);
};

export default TestimonialSlider;
