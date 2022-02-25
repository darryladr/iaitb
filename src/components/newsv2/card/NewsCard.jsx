import React from 'react';
import { Link } from 'react-router-dom';
import { BiUser, BiCalendar, BiCommentDetail } from 'react-icons/bi';
import './news-card.scss';

const NewsCard = (props) => {
	const link = '/' + props.id + '/';
	const bg = props.bg_path;
	const title = props.title;
	const author = props.author;
	const date = props.date;
	const comments = props.comments;
	const content = props.content;

	return (
		<div className='news'>
			<div className='news__img'>
				<Link to={link} className='news__img-link'></Link>
				<img src={bg} alt='' />
			</div>
			<div className='news__content'>
				<h3 className='title'>{title}</h3>
				<div className='info'>
					<BiUser />
					<h4>{author}</h4>
					<BiCalendar />
					<h4>{date}</h4>
					<BiCommentDetail />
					<h4>{comments}</h4>
				</div>
				<div className='body'>
					<p>{content}</p>
				</div>
				<Link to={link}>Read more...</Link>
			</div>
		</div>
	);
};

export default NewsCard;

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
