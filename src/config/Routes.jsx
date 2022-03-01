import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Tim from '../pages/Tim';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/iaitb' element={<Home />} />
			<Route path='/iaitb/about' element={<About />} />
			<Route path='/iaitb/tim' element={<Tim />} />
		</Routes>
	);
};

export default AppRoutes;
