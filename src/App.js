import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './App.scss';

import AppRoutes from './config/Routes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
    return (
        <Router basename='/iaitb'>
            <>
                <Header />
                <AppRoutes />
                <Footer />
            </>
        </Router>
    );
}

export default App;
