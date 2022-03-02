import React, { Component } from 'react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import './profile.scss';

export default class Card extends Component {
	constructor(props) {
		super(props);
		this.img = props.img;
		this.name = props.name;
		this.jurusan = props.jurusan;
		this.quotes = props.quotes;
		this.company = props.company;
	}

	render() {
		return (
			<div className='alumni-profile'>
				<div className='alumni-profile__img'>
					<img src={this.img} alt='' />
				</div>
				<div className='alumni-profile__name'>{this.name}</div>
				<div className='alumni-profile__jurusan'>{this.jurusan}</div>
				<div className='alumni-profile__company'>{this.company}</div>
				<div className='alumni-profile__quotes'>
					<ImQuotesLeft className='quotes-left' />
					<ImQuotesRight className='quotes-right' />
					<p>{this.quotes}</p>
				</div>
			</div>
		);
	}
}
