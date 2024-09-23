import { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import EliteSoftwarehub from '../assets/elitegen.png';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

const navlinks = [
	{
		id: 1,
		name: 'Home',
		to: '/',
	},
	{
		id: 2,
		name: 'About us',
		to: '/about-us',
	},
	{
		id: 3,
		name: 'Services',
		to: '/our-services',
	},
	{
		id: 4,
		name: 'Contact us',
		to: '/contact-us',
	},
];

const Navbar = () => {
	const container = useRef();

	// const { contextSafe } = useGSAP({ scope: container });

	const { pathname } = useLocation();
	const [burgerClass, setBurgerClass] = useState('nav-burger');
	const [menu_class, setMenuClass] = useState('menu hidden');
	const [isMenuClicked, setIsMenuClicked] = useState(false);
	const [navbar, setNavbar] = useState(false);

	const updateMenu = () => {
		if (!isMenuClicked) {
			setBurgerClass('nav-burger open');
			setMenuClass('nav-menu visible');
		} else {
			setBurgerClass('nav-burger');
			setMenuClass('nav-menu hidden');
		}
		setIsMenuClicked(!isMenuClicked);
	};

	const changeBackgroundColor = () => {
		window.scrollY >= 60 ? setNavbar(true) : setNavbar(false);
	};

	window.addEventListener('scroll', changeBackgroundColor);

	// useGSAP(() => {
	// 	if (sessionStorage.getItem('hasNavAnimationPlayed') !== 'Played') {
	// 	gsap.fromTo(
	// 		'.nav-logo',
	// 		{
	// 			scale: 3,
	// 			opacity: 0,
	// 		},
	// 		{
	// 			scale: 1,
	// 			opacity: 1,
	// 			ease: 'power3.out',
	// 			duration: 2,
	// 			delay: 3,
	// 			onComplete: function () {
	// 				sessionStorage.setItem('hasNavAnimationPlayed', 'Played');
	// 			},
	// 		}
	// 	);
	// 	}
	// }, [{ scope: container }]);

	return (
		<nav className={navbar ? 'navbar active' : 'navbar'} ref={container}>
			<Link to='/' className='nav-logo flex'>
				<img draggable='false' src={EliteSoftwarehub} alt='EliteSoftwarehub' />
			</Link>
			<div className={menu_class}>
				{navlinks.map((link) => (
					<Link
						key={link.id}
						className={
							pathname === `${link.to}` ? 'active nav-link' : 'nav-link'
						}
						to={link.to}
						onClick={updateMenu}
					>
						{link.name}
					</Link>
				))}
			</div>

			<div className={burgerClass} onClick={updateMenu}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</nav>
	);
};

export default Navbar;
