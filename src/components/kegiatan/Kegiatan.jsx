import React from 'react';
import KegiatanCard from './kegiatan-card/KegiatanCard';
import './kegiatan.scss';

import news2_img from '../../assets/img/news2.jpeg';

const KegiatanData = [
	{
		id: 1,
		bg_path: news2_img,
		title: 'Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB',
		author: 'Author',
		date: 'Date',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo facilis excepturi ut ratione beatae soluta est. Vel, iusto! Vel, corrupti! Repellendus suscipit nobis eaque ex voluptatibus quia commodi nesciunt nam!',
	},
];

const Kegiatan = () => {
	return (
		<div className='kegiatan'>
			<div className='section-title'>
				<h1>Kegiatan</h1>
			</div>
			<div className='kegiatan__wrapper'>
				{KegiatanData.map((item, index) => {
					return <KegiatanCard key={index} {...KegiatanData[index]} />;
				})}
			</div>
		</div>
	);
};

export default Kegiatan;
