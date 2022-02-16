import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './news.scss';
import user_svg from '../../assets/svg/user.svg';
import chart_svg from '../../assets/svg/bar_chart.svg';
import date_svg from '../../assets/svg/calendar.svg';
import news1_img from '../../assets/img/news1.png';
import news2_img from '../../assets/img/news2.jpeg';

const Berita = () => {
	return (
		<div className='berita'>
			<div className='berita__title'>
				<h1>Berita</h1>
			</div>
			<div className='berita__container'>
				<Carousel showArrows={true}>
					<div className='card'>
						<div className='card_lg'>
							<div className='card_lg__bg'>
								<img src={news1_img} alt='' />
							</div>
							<Link to='/#'></Link>
							<h3>Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB</h3>
							<div className='card_lg__info'>
								<img src={user_svg} alt='' />
								<h4>Author</h4>
								<img src={chart_svg} alt='' />
								<h4>Views</h4>
								<img src={date_svg} alt='' />
								<h4>Date</h4>
							</div>
							<div className='card_lg__content'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quaerat quo
									assumenda fugiat, adipisci similique sint. Possimus tempora laboriosam,
									itaque blanditiis obcaecati voluptatum quos, totam reprehenderit iste
									ratione recusandae assumenda?
								</p>
							</div>
						</div>
						<div className='card_lg'>
							<div className='card_lg__bg'>
								<img src={news2_img} alt='' />
							</div>
							<Link to='/#'></Link>
							<h3>Panitia Pengarah/SC Munas HIMPUNI 2022</h3>
							<div className='card_lg__info'>
								<img src={user_svg} alt='' />
								<h4>Author</h4>
								<img src={chart_svg} alt='' />
								<h4>Views</h4>
								<img src={date_svg} alt='' />
								<h4>Date</h4>
							</div>
						</div>
						<div className='break'></div>
						<div className='card_sm'>
							<div className='card_sm__bg'>
								<img src={news1_img} alt='' />
							</div>
							<Link to='/#'></Link>
							<h3>Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB</h3>
							<div className='card_sm__info'>
								<img src={user_svg} alt='' />
								<h4>Author</h4>
								<img src={chart_svg} alt='' />
								<h4>Views</h4>
								<img src={date_svg} alt='' />
								<h4>Date</h4>
							</div>
							<div className='card_sm__content'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quaerat quo
									assumenda fugiat, adipisci similique sint. Possimus tempora laboriosam,
									itaque blanditiis obcaecati voluptatum quos, totam reprehenderit iste
									ratione recusandae assumenda?
								</p>
							</div>
						</div>
						<div className='card_sm'>
							<div className='card_sm__bg'>
								<img src={news1_img} alt='' />
							</div>
							<Link to='/#'></Link>
							<h3>Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB</h3>
							<div className='card_sm__info'>
								<img src={user_svg} alt='' />
								<h4>Author</h4>
								<img src={chart_svg} alt='' />
								<h4>Views</h4>
								<img src={date_svg} alt='' />
								<h4>Date</h4>
							</div>
							<div className='card_sm__content'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quaerat quo
									assumenda fugiat, adipisci similique sint. Possimus tempora laboriosam,
									itaque blanditiis obcaecati voluptatum quos, totam reprehenderit iste
									ratione recusandae assumenda?
								</p>
							</div>
						</div>
						<div className='card_sm'>
							<div className='card_sm__bg'>
								<img src={news1_img} alt='' />
							</div>
							<Link to='/#'></Link>
							<h3>Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB</h3>
							<div className='card_sm__info'>
								<img src={user_svg} alt='' />
								<h4>Author</h4>
								<img src={chart_svg} alt='' />
								<h4>Views</h4>
								<img src={date_svg} alt='' />
								<h4>Date</h4>
							</div>
							<div className='card_sm__content'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quaerat quo
									assumenda fugiat, adipisci similique sint. Possimus tempora laboriosam,
									itaque blanditiis obcaecati voluptatum quos, totam reprehenderit iste
									ratione recusandae assumenda?
								</p>
							</div>
						</div>
					</div>
					<div className='card'>
						<div className='card_lg'>
							<div className='card_lg__bg'>
								<img src={news1_img} alt='' />
							</div>
							<Link to='/#'></Link>
							<h3>Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB</h3>
							<div className='card_lg__info'>
								<img src={user_svg} alt='' />
								<h4>Author</h4>
								<img src={chart_svg} alt='' />
								<h4>Views</h4>
								<img src={date_svg} alt='' />
								<h4>Date</h4>
							</div>
							<div className='card_lg__content'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quaerat quo
									assumenda fugiat, adipisci similique sint. Possimus tempora laboriosam,
									itaque blanditiis obcaecati voluptatum quos, totam reprehenderit iste
									ratione recusandae assumenda?
								</p>
							</div>
						</div>
						<div className='card_lg'>
							<div className='card_lg__bg'>
								<img src={news2_img} alt='' />
							</div>
							<Link to='/#'></Link>
							<h3>Panitia Pengarah/SC Munas HIMPUNI 2022</h3>
							<div className='card_lg__info'>
								<img src={user_svg} alt='' />
								<h4>Author</h4>
								<img src={chart_svg} alt='' />
								<h4>Views</h4>
								<img src={date_svg} alt='' />
								<h4>Date</h4>
							</div>
						</div>
						<div className='break'></div>
						<div className='card_sm'>
							<div className='card_sm__bg'>
								<img src={news1_img} alt='' />
							</div>
							<Link to='/#'></Link>
							<h3>Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB</h3>
							<div className='card_sm__info'>
								<img src={user_svg} alt='' />
								<h4>Author</h4>
								<img src={chart_svg} alt='' />
								<h4>Views</h4>
								<img src={date_svg} alt='' />
								<h4>Date</h4>
							</div>
							<div className='card_sm__content'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quaerat quo
									assumenda fugiat, adipisci similique sint. Possimus tempora laboriosam,
									itaque blanditiis obcaecati voluptatum quos, totam reprehenderit iste
									ratione recusandae assumenda?
								</p>
							</div>
						</div>
						<div className='card_sm'>
							<div className='card_sm__bg'>
								<img src={news1_img} alt='' />
							</div>
							<Link to='/#'></Link>
							<h3>Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB</h3>
							<div className='card_sm__info'>
								<img src={user_svg} alt='' />
								<h4>Author</h4>
								<img src={chart_svg} alt='' />
								<h4>Views</h4>
								<img src={date_svg} alt='' />
								<h4>Date</h4>
							</div>
							<div className='card_sm__content'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quaerat quo
									assumenda fugiat, adipisci similique sint. Possimus tempora laboriosam,
									itaque blanditiis obcaecati voluptatum quos, totam reprehenderit iste
									ratione recusandae assumenda?
								</p>
							</div>
						</div>
						<div className='card_sm'>
							<div className='card_sm__bg'>
								<img src={news1_img} alt='' />
							</div>
							<Link to='/#'></Link>
							<h3>Acara Peletakan Batu Pertama Pembangunan Teras FTMD ITB</h3>
							<div className='card_sm__info'>
								<img src={user_svg} alt='' />
								<h4>Author</h4>
								<img src={chart_svg} alt='' />
								<h4>Views</h4>
								<img src={date_svg} alt='' />
								<h4>Date</h4>
							</div>
							<div className='card_sm__content'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quaerat quo
									assumenda fugiat, adipisci similique sint. Possimus tempora laboriosam,
									itaque blanditiis obcaecati voluptatum quos, totam reprehenderit iste
									ratione recusandae assumenda?
								</p>
							</div>
						</div>
					</div>
				</Carousel>
			</div>
		</div>
	);
};

export default Berita;
