import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import ContactPage from '../pages/ContactPage';

const RoutesContainer = () => {
	return (
		<div className='routes-container'>
			<Routes>
				<Route path='/' element={<Homepage />}/>
				<Route path='/contact-us' element={<ContactPage />}></Route>
				<Route path='/*' element={<Homepage />}></Route>
			</Routes>
		</div>
	);
};

export default RoutesContainer;
