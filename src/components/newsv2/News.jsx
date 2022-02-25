import React from 'react';
import NewsSlider from './slider/Slider';
import './news.scss';

const Berita = () => {
	return (
		<div className='berita'>
			<div className='section-title'>
				<h1>Berita</h1>
			</div>
			<NewsSlider visibleSlides={1} step={1} />
		</div>
	);
};

export default Berita;
