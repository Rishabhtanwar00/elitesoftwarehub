import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import ContactPage from '../pages/ContactPage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';

const RoutesContainer = () => {
	return (
		<section className='routes-container'>
			<Routes>
				<Route path='/' element={<Homepage />}/>
				<Route path='/contact-us' element={<ContactPage />}></Route>
				<Route path='/about-us' element={<AboutPage />}></Route>
				<Route path='/our-services' element={<ServicesPage />}></Route>
				<Route path='/*' element={<Homepage />}></Route>
			</Routes>
		</section>
	);
};

export default RoutesContainer;
