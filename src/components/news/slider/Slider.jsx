import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './slider.scss';

import { NewsCardLG } from '../news-card/NewsCard';
import news1_img from '../../../assets/img/news1.png';
import news2_img from '../../../assets/img/news2.jpeg';

const NewsData = [
	{
		id: 1,
		bg_path: news1_img,
		title: 'Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB',
		author: 'Author',
		date: 'Date',
		content: 'Content',
	},
	{
		id: 2,
		bg_path: news2_img,
		title: 'Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB',
		author: 'Author',
		date: 'Date',
		content: 'Content',
	},
	{
		id: 3,
		bg_path: news1_img,
		title: 'Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB',
		author: 'Author',
		date: 'Date',
		content: 'Content',
	},
	{
		id: 4,
		bg_path: news2_img,
		title: 'Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB',
		author: 'Author',
		date: 'Date',
		content: 'Content',
	},
	{
		id: 5,
		bg_path: news1_img,
		title: 'Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB',
		author: 'Author',
		date: 'Date',
		content: 'Content',
	},
	{
		id: 6,
		bg_path: news2_img,
		title: 'Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB',
		author: 'Author',
		date: 'Date',
		content: 'Content',
	},
];

export default class NewsSlider extends Component {
	render() {
		return (
			<CarouselProvider
				naturalSlideWidth={100}
				naturalSlideHeight={100}
				totalSlides={NewsData.length}
				visibleSlides={3}
				step={3}
				className='news-slider'
			>
				<ButtonBack>
					<FaChevronLeft />
				</ButtonBack>
				<Slider className='news-slider__wrapper'>
					{NewsData.map((item, index) => {
						return (
							<Slide key={index} index={index}>
								<NewsCardLG {...NewsData[index]} />
							</Slide>
						);
					})}
				</Slider>
				<ButtonNext>
					<FaChevronRight />
				</ButtonNext>
			</CarouselProvider>
		);
	}
}
