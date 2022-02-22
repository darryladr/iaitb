import React from 'react';
import { Link } from 'react-router-dom';

import user_svg from '../../assets/svg/user.svg';
import date_svg from '../../assets/svg/calendar.svg';
import kegiatan_img from '../../assets/img/news2.jpeg';

const Kegiatan = () => {
	return (
		<div className='kegiatan'>
			<div className='berita__title'>
				<h1>Kegiatan</h1>
			</div>
			<div className='kegiatan__card'>
				<Link to='/#'></Link>
				<div className='hero'>
					<img src={kegiatan_img} alt='' />
				</div>
				<div className='title'>
					<h2>Title</h2>
				</div>
				<div className='info'>
					<img src={user_svg} alt='' />
					<h4>Author</h4>
					<img src={date_svg} alt='' />
					<h4>Date</h4>
				</div>
				<div className='content'>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla at officiis, maiores
						repudiandae perspiciatis eius? Sequi soluta corrupti ipsa nemo fuga qui eos ut ad
						aliquid consectetur! Nobis, labore delectus!
					</p>
				</div>
				<Link to='/#'>Read more...</Link>
			</div>
		</div>
	);
};

export default Kegiatan;
