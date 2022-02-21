import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from '../components/header/Header';
import Home from '../pages/Home';
import Berita from '../components/news/News';
import Contact from '../components/contact/Contact';

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
						<Contact />
					</>
				}
			/>
		</Routes>
	);
};

export default AppRoutes;
