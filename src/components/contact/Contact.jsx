import React from 'react';
import './contact.scss';

import mail_svg from '../../assets/svg/mail.svg';
import phone_svg from '../../assets/svg/phone.svg';
import logo2 from '../../assets/logo2.png';

const Contact = () => {
	return (
		<div className='contact'>
			<div className='contact__wrapper'>
				<div className='title'>
					<h1>
						Hubungi Kami /<br />
						Connect With Us
					</h1>
				</div>
				<div className='link'>
					<div className='email'>
						<img src={mail_svg} alt='' />
						<h2>iaitb@email.com</h2>
					</div>
					<div className='phone'>
						<img src={phone_svg} alt='' />
						<h2>+62 812 3456 7890</h2>
					</div>
				</div>
			</div>
			<img src={logo2} alt='' className='logo' />
		</div>
	);
};

export default Contact;
