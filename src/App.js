import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import RoutesContainer from './components/RoutesContainer';
import Footer from './components/Footer';
import { useEffect } from 'react';

function App() {
	// const [loading, setLoading] = useState(false);

	useEffect(() => {
		sessionStorage.setItem('hasMyAnimationPlayed', 'Not Played');
		sessionStorage.setItem('hasNavAnimationPlayed', 'Not Played');
		// setLoading(true);
		// const timer = setTimeout(() => setLoading(true), 4000);
		// return () => clearTimeout(timer);
		const body = document.querySelector('body');
		setTimeout(function () {
			body.style.overflowY = 'visible';
		}, 3000);
	}, []);

	return (
		<div className='App'>
			<Router>
				{/* {loading && <Loader />} */}
				<Loader />
				<Navbar />
				<RoutesContainer />
				<Footer />
			</Router>
		</div>
	);
}

export default App;
