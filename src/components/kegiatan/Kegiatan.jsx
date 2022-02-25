import React from 'react';
import KegiatanSlider from './slider/Slider';
import './kegiatan.scss';

const Kegiatan = () => {
	return (
		<div className='kegiatan'>
			<div className='section-title'>
				<h1>Kegiatan</h1>
			</div>
			<KegiatanSlider visibleSlides={3} step={1} />
		</div>
	);
};

export default Kegiatan;
