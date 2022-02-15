import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from '../components/header/Header';
import Home from '../pages/Home';
import Berita from '../components/news/News';

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<>
						<Header />
						<Home />
						<Berita />
					</>
				}
			/>
		</Routes>
	);
};

export default AppRoutes;
