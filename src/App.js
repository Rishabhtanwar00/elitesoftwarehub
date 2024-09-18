import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import RoutesContainer from './components/RoutesContainer';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const timer = setTimeout(() => setLoading(false), 4000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className='App'>
			<Router>
				{loading && <Loader />}
				<Navbar />
				<RoutesContainer />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
