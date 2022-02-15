import React from 'react';

import hero__bg from '../../assets/hero.jpeg';
import './hero.scss';

import { Button } from '../buttons/Button';

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero__bg'>
				<img src={hero__bg} alt='' className='hero__img' />
			</div>
			<div className='hero__content'>
				<div className='title'>
					Kementrian Pertanian Desa
					<br />
					Ikatan Alumni
					<br />
					Institut Teknologi Bandung
				</div>
				<div className='desc'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo id condimentum tincidunt enim
					pulvinar aliquam. Fames sit venenatis nec augue nunc, arcu sit gravida lectus. Elementum
					sit volutpat ultricies orci porttitor pellentesque pellentesque. Eget eget ac velit
					venenatis. Consequat quam ut natoque velit cras gravida. Placerat ullamcorper enim lacus
					nisl semper.
				</div>
				<Button>About Us</Button>
			</div>
		</div>
	);
};

export default Hero;
