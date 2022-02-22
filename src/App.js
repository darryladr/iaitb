import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import './App.scss';

import AppRoutes from './config/Routes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
    return (
        <HelmetProvider>
            <Router>
                <Header />
                <AppRoutes />
                <Footer />
            </Router>
        </HelmetProvider>
    );
}

export default App;
