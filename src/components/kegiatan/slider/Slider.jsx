import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './slider.scss';

import news1_img from '../../../assets/img/news1.png';
import news2_img from '../../../assets/img/news2.jpeg';
import KegiatanCard from '../kegiatan-card/KegiatanCard';

const KegiatanData = [
	{
		id: 1,
		bg_path: news1_img,
		title: 'Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB',
		author: 'Author',
		date: 'Date',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo facilis excepturi ut ratione beatae soluta est. Vel, iusto! Vel, corrupti! Repellendus suscipit nobis eaque ex voluptatibus quia commodi nesciunt nam!',
	},
	{
		id: 2,
		bg_path: news2_img,
		title: 'Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB',
		author: 'Author',
		date: 'Date',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo facilis excepturi ut ratione beatae soluta est. Vel, iusto! Vel, corrupti! Repellendus suscipit nobis eaque ex voluptatibus quia commodi nesciunt nam!',
	},
	{
		id: 3,
		bg_path: news1_img,
		title: 'Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB',
		author: 'Author',
		date: 'Date',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo facilis excepturi ut ratione beatae soluta est. Vel, iusto! Vel, corrupti! Repellendus suscipit nobis eaque ex voluptatibus quia commodi nesciunt nam!',
	},
	{
		id: 4,
		bg_path: news2_img,
		title: 'Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB',
		author: 'Author',
		date: 'Date',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo facilis excepturi ut ratione beatae soluta est. Vel, iusto! Vel, corrupti! Repellendus suscipit nobis eaque ex voluptatibus quia commodi nesciunt nam!',
	},
];
export default class NewsSlider extends Component {
	constructor(props) {
		super(props);
		this.totalSlides = KegiatanData.length;
		this.visibleSlides = props.visibleSlides;
		this.step = props.step;
	}

	render() {
		return (
			<CarouselProvider
				naturalSlideWidth={100}
				naturalSlideHeight={100}
				totalSlides={this.totalSlides}
				visibleSlides={this.visibleSlides}
				step={this.step}
				interval={8000}
				isPlaying={true}
				className='news-slider'
			>
				<Slider className='news-slider__wrapper'>
					{KegiatanData.map((item, index) => {
						return (
							<Slide key={index} index={index}>
								<KegiatanCard {...KegiatanData[index]} />
							</Slide>
						);
					})}
				</Slider>
			</CarouselProvider>
		);
	}
}
