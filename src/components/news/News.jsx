import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './news.scss';
import { NewsCardLG, NewsCardSM } from '../news-card/NewsCard';
import news1_img from '../../assets/img/news1.png';
import news2_img from '../../assets/img/news2.jpeg';

const Berita = () => {
	return (
		<div className='berita'>
			<div className='berita__title'>
				<h1>Berita</h1>
			</div>
			<div className='berita__container'>
				<div className='card'>
					<NewsCardLG
						id='#'
						bg_path={news1_img}
						title='Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB'
						author='Author'
						date='Date'
						content='Content'
					/>
					<NewsCardLG
						id='#'
						bg_path={news2_img}
						title='Panitia Pengarah/SC Munas HIMPUNI 2022'
						author='Author'
						date='Date'
						content='Content'
					/>
					<div className='break'></div>
					<NewsCardSM
						id='#'
						bg_path={news1_img}
						title='News Title'
						author='Author'
						date='Date'
						content='Content'
					/>
					<NewsCardSM
						id='#'
						bg_path={news1_img}
						title='News Title'
						author='Author'
						date='Date'
						content='Content'
					/>
					<NewsCardSM
						id='#'
						bg_path={news1_img}
						title='News Title'
						author='Author'
						date='Date'
						content='Content'
					/>
				</div>
			</div>
		</div>
	);
};

export default Berita;
