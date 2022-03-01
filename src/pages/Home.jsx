import React from 'react';
// import { Link } from 'react-router-dom';s

import Hero from '../components/Home/hero/Hero';
import BeritaV2 from '../components/Home/news/News';
import Contact from '../components/Home/contact/Contact';
import Kegiatan from '../components/Home/kegiatan/Kegiatan';

const Home = () => {
	return (
		<>
			<Hero />
			<BeritaV2 />
			<Kegiatan />
			<Contact />
		</>
	);
};

export default Home;
