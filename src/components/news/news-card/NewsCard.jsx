import React from 'react';
import { Link } from 'react-router-dom';
import './news-card.scss';

import user_svg from '../../../assets/svg/user.svg';
import date_svg from '../../../assets/svg/calendar.svg';

const NewsCardLG = (props) => {
	const link = '/' + props.id + '/';
	const bg = props.bg_path;
	const title = props.title;
	const author = props.author;
	const date = props.date;
	const content = props.conent;

	return (
		<div className='card_lg'>
			<div className='card_lg__bg'>
				<img src={bg} alt='' />
			</div>
			<Link to={link}></Link>
			<h3>{title}</h3>
			<div className='card_lg__info'>
				<img src={user_svg} alt='' />
				<h4>{author}</h4>
				<img src={date_svg} alt='' />
				<h4>{date}</h4>
			</div>
			<div className='card_lg__content'>
				<p>{content}</p>
			</div>
		</div>
	);
};

const NewsCardSM = (props) => {
	const link = '/' + props.id + '/';
	const bg = props.bg_path;
	const title = props.title;
	const author = props.author;
	const date = props.date;
	const content = props.conent;

	return (
		<div className='card_sm'>
			<div className='card_sm__bg'>
				<img src={bg} alt='' />
			</div>
			<Link to={link}></Link>
			<h3>{title}</h3>
			<div className='card_sm__info'>
				<img src={user_svg} alt='' />
				<h4>{author}</h4>
				<img src={date_svg} alt='' />
				<h4>{date}</h4>
			</div>
			<div className='card_sm__content'>
				<p>{content}</p>
			</div>
		</div>
	);
};

export { NewsCardLG, NewsCardSM };

// class NewsCard_LG extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { views: views };
// 	}

// 	render() {
// 		const props = props.props;
// 		const link = '/' + props.id + '/';
// 		const bg = props.bg_path;
// 		const title = props.title;
// 		const author = props.author;
// 		// const views = props.views;
// 		const date = props.date;
// 		const content = props.conent;

// 		return (
// 			<div className='card_lg'>
// 				<div className='card_lg__bg'>
// 					<img src={bg} alt='' />
// 				</div>
// 				<Link to={link}></Link>
// 				<h3>{title}</h3>
// 				<div className='card_lg__info'>
// 					<img src={user_svg} alt='' />
// 					<h4>{author}</h4>
// 					<img src={chart_svg} alt='' />
// 					<h4>{views}</h4>
// 					<img src={date_svg} alt='' />
// 					<h4>{date}</h4>
// 				</div>
// 				<div className='card_lg__content'>
// 					<p>{content}</p>
// 				</div>
// 			</div>
// 		);
// 	}
// }
