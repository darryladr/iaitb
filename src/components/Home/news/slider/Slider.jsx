import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './slider.scss';

import NewsCard from '../card/NewsCard';
import news1_img from '../../../../assets/img/news1.png';
import news2_img from '../../../../assets/img/news2.jpeg';

const NewsData = [
	{
		id: 1,
		bg_path: news1_img,
		title: 'Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB',
		author: 'Author',
		date: '1 Jan 2022',
		content:
			'Fugiat ad ea sit commodo sint Lorem fugiat aliqua sunt dolor consequat. Consequat ullamco velit sint consectetur et Lorem ea et elit aliqua cupidatat sint. Quis proident ipsum esse reprehenderit incididunt adipisicing velit non nostrud. Mollit id eiusmod consequat Lorem pariatur velit ex consequat nulla anim consequat ea dolor eiusmod. Mollit deserunt anim nostrud cupidatat do cillum. Ipsum proident laborum fugiat duis non veniam nulla quis velit nostrud. Labore consectetur ad mollit cillum cillum laborum. Exercitation eu ut do sunt magna ut laborum ad irure aute sunt culpa. Fugiat eu ea irure nostrud esse non tempor excepteur excepteur proident. Excepteur nostrud mollit minim aliqua. Aliqua dolore cupidatat esse esse aliquip amet.',
		comments: '0',
	},
	{
		id: 2,
		bg_path: news2_img,
		title: 'Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB',
		author: 'Author',
		date: '1 Jan 2022',
		content:
			'Fugiat ad ea sit commodo sint Lorem fugiat aliqua sunt dolor consequat. Consequat ullamco velit sint consectetur et Lorem ea et elit aliqua cupidatat sint. Quis proident ipsum esse reprehenderit incididunt adipisicing velit non nostrud. Mollit id eiusmod consequat Lorem pariatur velit ex consequat nulla anim consequat ea dolor eiusmod. Mollit deserunt anim nostrud cupidatat do cillum. Ipsum proident laborum fugiat duis non veniam nulla quis velit nostrud. Labore consectetur ad mollit cillum cillum laborum. Exercitation eu ut do sunt magna ut laborum ad irure aute sunt culpa. Fugiat eu ea irure nostrud esse non tempor excepteur excepteur proident. Excepteur nostrud mollit minim aliqua. Aliqua dolore cupidatat esse esse aliquip amet.',
		comments: '0',
	},
	{
		id: 3,
		bg_path: news1_img,
		title: 'Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB',
		author: 'Author',
		date: '1 Jan 2022',
		content:
			'Fugiat ad ea sit commodo sint Lorem fugiat aliqua sunt dolor consequat. Consequat ullamco velit sint consectetur et Lorem ea et elit aliqua cupidatat sint. Quis proident ipsum esse reprehenderit incididunt adipisicing velit non nostrud. Mollit id eiusmod consequat Lorem pariatur velit ex consequat nulla anim consequat ea dolor eiusmod. Mollit deserunt anim nostrud cupidatat do cillum. Ipsum proident laborum fugiat duis non veniam nulla quis velit nostrud. Labore consectetur ad mollit cillum cillum laborum. Exercitation eu ut do sunt magna ut laborum ad irure aute sunt culpa. Fugiat eu ea irure nostrud esse non tempor excepteur excepteur proident. Excepteur nostrud mollit minim aliqua. Aliqua dolore cupidatat esse esse aliquip amet.',
		comments: '0',
	},
	{
		id: 4,
		bg_path: news2_img,
		title: 'Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB',
		author: 'Author',
		date: '1 Jan 2022',
		content:
			'Fugiat ad ea sit commodo sint Lorem fugiat aliqua sunt dolor consequat. Consequat ullamco velit sint consectetur et Lorem ea et elit aliqua cupidatat sint. Quis proident ipsum esse reprehenderit incididunt adipisicing velit non nostrud. Mollit id eiusmod consequat Lorem pariatur velit ex consequat nulla anim consequat ea dolor eiusmod. Mollit deserunt anim nostrud cupidatat do cillum. Ipsum proident laborum fugiat duis non veniam nulla quis velit nostrud. Labore consectetur ad mollit cillum cillum laborum. Exercitation eu ut do sunt magna ut laborum ad irure aute sunt culpa. Fugiat eu ea irure nostrud esse non tempor excepteur excepteur proident. Excepteur nostrud mollit minim aliqua. Aliqua dolore cupidatat esse esse aliquip amet.',
		comments: '0',
	},
	{
		id: 5,
		bg_path: news1_img,
		title: 'Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB',
		author: 'Author',
		date: '1 Jan 2022',
		content:
			'Fugiat ad ea sit commodo sint Lorem fugiat aliqua sunt dolor consequat. Consequat ullamco velit sint consectetur et Lorem ea et elit aliqua cupidatat sint. Quis proident ipsum esse reprehenderit incididunt adipisicing velit non nostrud. Mollit id eiusmod consequat Lorem pariatur velit ex consequat nulla anim consequat ea dolor eiusmod. Mollit deserunt anim nostrud cupidatat do cillum. Ipsum proident laborum fugiat duis non veniam nulla quis velit nostrud. Labore consectetur ad mollit cillum cillum laborum. Exercitation eu ut do sunt magna ut laborum ad irure aute sunt culpa. Fugiat eu ea irure nostrud esse non tempor excepteur excepteur proident. Excepteur nostrud mollit minim aliqua. Aliqua dolore cupidatat esse esse aliquip amet.',
		comments: '0',
	},
	{
		id: 6,
		bg_path: news2_img,
		title: 'Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB',
		author: 'Author',
		date: '1 Jan 2022',
		content:
			'Fugiat ad ea sit commodo sint Lorem fugiat aliqua sunt dolor consequat. Consequat ullamco velit sint consectetur et Lorem ea et elit aliqua cupidatat sint. Quis proident ipsum esse reprehenderit incididunt adipisicing velit non nostrud. Mollit id eiusmod consequat Lorem pariatur velit ex consequat nulla anim consequat ea dolor eiusmod. Mollit deserunt anim nostrud cupidatat do cillum. Ipsum proident laborum fugiat duis non veniam nulla quis velit nostrud. Labore consectetur ad mollit cillum cillum laborum. Exercitation eu ut do sunt magna ut laborum ad irure aute sunt culpa. Fugiat eu ea irure nostrud esse non tempor excepteur excepteur proident. Excepteur nostrud mollit minim aliqua. Aliqua dolore cupidatat esse esse aliquip amet.',
		comments: '0',
	},
];

export default class NewsSlider extends Component {
	constructor(props) {
		super(props);
		this.totalSlides = NewsData.length;
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
				infinite={true}
				className='news-slider'
			>
				<ButtonBack>
					<FaChevronLeft />
				</ButtonBack>
				<Slider className='news-slider__wrapper'>
					{NewsData.map((item, index) => {
						return (
							<Slide key={index} index={index}>
								<NewsCard {...NewsData[index]} />
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
