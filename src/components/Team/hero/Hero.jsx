import React from 'react';

import hero__bg from '../../../assets/hero.jpeg';
import './hero.scss';

const Hero = () => {
	return (
		<div className='team-hero'>
			<div className='team-hero__bg'>
				<img src={hero__bg} alt='' className='team-hero__img' />
			</div>
			<div className='team-hero__title'>Tim Kami</div>
		</div>
	);
};

export default Hero;
