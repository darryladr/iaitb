import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Berita from '../components/news/News';
import Contact from '../components/contact/Contact';
import Kegiatan from '../components/kegiatan/Kegiatan';

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<>
						<Home />
						<Berita />
						<Kegiatan />
						<Contact />
					</>
				}
			/>
		</Routes>
	);
};

export default AppRoutes;
