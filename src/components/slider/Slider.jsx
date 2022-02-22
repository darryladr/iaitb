import React, { Component } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';

import { NewsCardLG } from '../news-card/NewsCard';
import news1_img from '../../assets/img/news1.png';

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		return (
			<div>
				<Slider {...settings}>
					<div className='card-div'>
						<NewsCardLG
							id='#'
							bg_path={news1_img}
							title='Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB'
							author='Author'
							date='Date'
							content='Content'
						/>
					</div>
					<div className='card-div'>
						<NewsCardLG
							id='#'
							bg_path={news1_img}
							title='Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB'
							author='Author'
							date='Date'
							content='Content'
						/>
					</div>
					<div className='card-div'>
						<NewsCardLG
							id='#'
							bg_path={news1_img}
							title='Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB'
							author='Author'
							date='Date'
							content='Content'
						/>
					</div>
				</Slider>
			</div>
		);
	}
}
