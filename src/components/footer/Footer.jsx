import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

import logo from '../../assets/logo.png';
import location_svg from '../../assets/svg/location.svg';
import mail_svg from '../../assets/svg/mail.svg';
import phone_svg from '../../assets/svg/phone.svg';
import instagram_svg from '../../assets/svg/instagram.svg';
import facebook_svg from '../../assets/svg/facebook.svg';
import twitter_svg from '../../assets/svg/twitter.svg';
import youtube_svg from '../../assets/svg/youtube.svg';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='footer__col-1'>
				<img src={logo} alt='' className='logo' />
				<div className='location'>
					<img src={location_svg} alt='' />
					<h2>Alamat</h2>
				</div>
				<div className='mail'>
					<img src={mail_svg} alt='' />
					<h2>iaitb@email.com</h2>
				</div>
				<div className='phone'>
					<img src={phone_svg} alt='' />
					<h2>+62 812 3456 7890</h2>
				</div>
			</div>
			<div className='footer__col-2'>
				<h3>Links</h3>
				<ul className='footer__links'>
					<Link to='/'>Home</Link>
					<Link to='/about'>Tentang</Link>
					<Link to='/tim'>Tim Kami</Link>
					<Link to='/'>Alumni</Link>
					<Link to='/'>Kegiatan</Link>
					<Link to='/'>Investor</Link>
					<Link to='/'>Desa Binaan</Link>
					<Link to='/'>Galeri</Link>
					<Link to='/'>Kontak Kami</Link>
				</ul>
			</div>
			<div className='footer__col-3'>
				<h3>Social</h3>
				<img src={instagram_svg} alt='' />
				<img src={facebook_svg} alt='' />
				<img src={twitter_svg} alt='' />
				<img src={youtube_svg} alt='' />
			</div>
		</div>
	);
};

export default Footer;
