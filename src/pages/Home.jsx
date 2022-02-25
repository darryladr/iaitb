import React from 'react';
// import { Link } from 'react-router-dom';s

import Hero from '../components/hero/Hero';
import BeritaV2 from '../components/newsv2/News';
import Contact from '../components/contact/Contact';
import Kegiatan from '../components/kegiatan/Kegiatan';

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
