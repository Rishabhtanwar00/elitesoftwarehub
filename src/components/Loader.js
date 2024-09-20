import { useGSAP } from '@gsap/react';
import EliteSoftwarehub from '../assets/elitegen.png';
import gsap from 'gsap';

const Loader = () => {
	useGSAP(() => {
		gsap.to('.loader', {
			translateX: '100vw',
			duration: 1,
			ease: 'power3.out',
			delay: 3,
		});
	});

	return (
		<div className='loader'>
			<div className='loader-img flex'>
				<img src={EliteSoftwarehub} alt='EliteSoftwarehub Logo' />
			</div>
			<div className='loader-num'>
				<h1>20%</h1>
				<h1>40%</h1>
				<h1>70%</h1>
				<h1>90%</h1>
				<h1>100%</h1>
			</div>
			<div className='loader-bar'></div>
		</div>
	);
};

export default Loader;
