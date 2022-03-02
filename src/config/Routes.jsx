import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Tim from '../pages/Team';
import Alumni from '../pages/Alumni';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/team' element={<Tim />} />
			<Route path='/alumni' element={<Alumni />} />
		</Routes>
	);
};

export default AppRoutes;
