import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

import AppRoutes from './config/Routes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
	return (
		<Router>
			<>
				<Header />
				<AppRoutes />
				<Footer />
			</>
		</Router>
	);
}

export default App;
