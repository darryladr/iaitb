import React, { useRef } from 'react';
import { Link as ButtonScroll } from 'react-scroll';

import { Link, useLocation } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/logo.png';

const headerNav = [
	{
		display: 'Home',
		path: '/',
	},
	{
		display: 'Tentang',
		path: '/about',
	},
	{
		display: 'Tim',
		path: '/team',
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
		path: '#contact',
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
					{headerNav.map((e, i, arr) => {
						if (arr.length - 1 === i) {
							return (
								<li key={arr.length - 1}>
									<ButtonScroll
										to='contact'
										spy={false}
										smooth={true}
										duration={500}
										offset={-100}
									>
										Kontak
									</ButtonScroll>
								</li>
							);
						} else {
							return (
								<li key={i}>
									<Link to={e.path} className={`${i === active ? '' : ''}`}>
										{e.display}
									</Link>
								</li>
							);
						}
					})}
				</ul>
			</div>
		</div>
	);
};

export default Header;
