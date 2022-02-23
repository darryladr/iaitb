import React from 'react';
import NewsSlider from './slider/Slider';
import './news.scss';

const Berita = () => {
	return (
		<div className='berita'>
			<div className='section-title'>
				<h1>Berita</h1>
			</div>
			<NewsSlider />
		</div>
	);
};

export default Berita;
