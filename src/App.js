import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import './App.scss';

import AppRoutes from './config/Routes';

function App() {
    return (
        <HelmetProvider>
            <Router>
                <AppRoutes />
            </Router>
        </HelmetProvider>
    );
}

export default App;
