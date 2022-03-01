import React from 'react';

import hero__bg from '../../../assets/hero.jpeg';
import './hero.scss';

const Hero = () => {
	return (
		<div className='about-hero'>
			<div className='about-hero__bg'>
				<img src={hero__bg} alt='' className='hero__img' />
			</div>
			<div className='about-hero__title'>Tim Kami</div>
		</div>
	);
};

export default Hero;
