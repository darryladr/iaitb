import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
// import Berita from '../components/news/News';

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<>
						<Home />
					</>
				}
			/>
		</Routes>
	);
};

export default AppRoutes;
