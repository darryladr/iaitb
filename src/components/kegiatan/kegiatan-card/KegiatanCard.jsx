import React from 'react';
import { Link } from 'react-router-dom';
import { BiUser, BiCalendar } from 'react-icons/bi';

const KegiatanCard = (props) => {
	const link = '/' + props.id + '/';
	const bg = props.bg_path;
	const title = props.title;
	const author = props.author;
	const date = props.date;
	const content = props.content;

	return (
		<div className='card'>
			<div className='card__bg'>
				<img src={bg} alt='' />
			</div>
			<Link to={link} className='bg-link'></Link>
			<div className='card__body'>
				<h3>{title}</h3>
				<div className='info'>
					<BiUser />
					<h4>{author}</h4>
					<BiCalendar />
					<h4>{date}</h4>
				</div>
				<div className='content'>{content}</div>
				<Link to={link}>Read more...</Link>
			</div>
		</div>
	);
};

export default KegiatanCard;
