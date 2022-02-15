import React, { useRef } from 'react';

import { Link, useLocation } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/logo.png';

const headerNav = [
	{
		display: 'Home',
		path: '/',
	},
	{
		display: 'About Us',
		path: '/aboutus',
	},
	{
		display: 'Tim',
		path: '/tim',
	},
	{
		display: 'Alumni',
		path: '/alumni',
	},
	{
		display: 'Kegiatan',
		path: '/kegiatan',
	},
	{
		display: 'Investor',
		path: '/investor',
	},
	{
		display: 'Desa Binaan',
		path: '/desa-binaan',
	},
	{
		display: 'Galeri',
		path: '/galeri',
	},
	{
		display: 'Kontak',
		path: '#kontak',
	},
];

const Header = () => {
	const { pathname } = useLocation();
	const { headerRef } = useRef(null);

	const active = headerNav.findIndex((e) => e.path === pathname);

	return (
		<div ref={headerRef} className='header'>
			<div className='header__wrap container'>
				<div className='logo'>
					<img src={logo} alt='' />
					<Link to='/'></Link>
				</div>
				<ul className='header__nav'>
					{headerNav.map((e, i) => (
						<li key={i} className={`${i === active ? 'active' : ''}`}>
							<Link to={e.path}>{e.display}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Header;
