import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Tim from '../pages/Tim';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/about' element={<About />} />
			<Route path='/tim' element={<Tim />} />
		</Routes>
	);
};

export default AppRoutes;
