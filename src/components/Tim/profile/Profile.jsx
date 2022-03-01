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
			<div className='profile'>
				<div className='img'>
					<img src={this.img} alt='' />
				</div>
				<div className='name'>{this.name}</div>
				<div className='jabatan'>{this.jabatan}</div>
				<div className='quotes'>
					<p>{this.quotes}</p>
				</div>
			</div>
		);
	}
}
