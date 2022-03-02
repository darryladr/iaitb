import React from 'react';

import hero__bg from '../../../assets/hero.jpeg';
import './hero.scss';

const Hero = () => {
	return (
		<div className='alumni-hero'>
			<div className='alumni-hero__bg'>
				<img src={hero__bg} alt='' className='hero__img' />
			</div>
			<div className='alumni-hero__title'>Alumni</div>
		</div>
	);
};

export default Hero;
