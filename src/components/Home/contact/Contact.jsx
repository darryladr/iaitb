import React, { useRef } from 'react';
import { IoMail, IoCall } from 'react-icons/io5';
import './contact.scss';

import logo_alt from '../../../assets/logo_alt.png';

const Mailto = ({ email, subject = '', body = '', children }) => {
	let params = subject || body ? '?' : '';
	if (subject) params += `subject=${encodeURIComponent(subject)}`;
	if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

	return <a href={`mailto:${email}${params}`}>{children}</a>;
};

const Tel = ({ number, children }) => {
	return <a href={`tel:${number}`}>{children}</a>;
};

const Contact = () => {
	const contactRef = useRef();

	return (
		<div ref={contactRef} className='contact'>
			<div className='contact__wrapper'>
				<div className='title'>
					<h1>
						Hubungi Kami /<br />
						Connect With Us
					</h1>
				</div>
				<div className='link'>
					<div className='email'>
						<IoMail />
						<Mailto email='iaitb@email.com' subject='Hello & Welcome' body='Hello world!'>
							iaitb@email.com
						</Mailto>
					</div>
					<div className='phone'>
						<IoCall />
						<Tel number='+62 812 3456 7890'>+62 812 3456 7890</Tel>
					</div>
				</div>
			</div>
			<img src={logo_alt} alt='' className='logo' />
		</div>
	);
};

export default Contact;
