import React, { Component } from 'react';
import './profile.scss';

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.img = props.img;
		this.name = props.name;
		this.jabatan = props.jabatan;
		this.quotes = props.quotes;
	}

	render() {
		return (
			<div className='team-profile'>
				<div className='team-profile__img'>
					<img src={this.img} alt='' />
				</div>
				<div className='team-profile__name'>{this.name}</div>
				<div className='team-profile__jabatan'>{this.jabatan}</div>
				<div className='team-profile__quotes'>
					<p>{this.quotes}</p>
				</div>
			</div>
		);
	}
}
