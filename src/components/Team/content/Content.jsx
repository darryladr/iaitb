import React from 'react';
import _ from 'lodash';
import './content.scss';

import Profile from '../profile/Profile';

import profile1 from '../../../assets/profile/profile1.png';
import profile2 from '../../../assets/profile/profile2.png';
import profile3 from '../../../assets/profile/profile3.png';

const ProfileData = [
	{
		img: profile1,
		name: 'John Doe',
		jabatan: 'Jabatan',
		quotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames dolor hendrerit faucibus auctor enim pharetra in.',
	},
	{
		img: profile2,
		name: 'John Doe',
		jabatan: 'Jabatan',
		quotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames dolor hendrerit faucibus auctor enim pharetra in.',
	},
	{
		img: profile3,
		name: 'Jane Doe',
		jabatan: 'Jabatan',
		quotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames dolor hendrerit faucibus auctor enim pharetra in.',
	},
	{
		img: profile1,
		name: 'John Doe',
		jabatan: 'Jabatan',
		quotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames dolor hendrerit faucibus auctor enim pharetra in.',
	},
	{
		img: profile2,
		name: 'John Doe',
		jabatan: 'Jabatan',
		quotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames dolor hendrerit faucibus auctor enim pharetra in.',
	},
	{
		img: profile3,
		name: 'Jane Doe',
		jabatan: 'Jabatan',
		quotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames dolor hendrerit faucibus auctor enim pharetra in.',
	},
];

const Content = () => {
	const profileDataArray = ProfileData.map((item, index) => {
		return (
			<Profile
				key={index}
				img={item.img}
				name={item.name}
				jabatan={item.jabatan}
				quotes={item.quotes}
			/>
		);
	});

	return (
		<div className='team-content'>
			{_.chunk(profileDataArray, 3).map((group) => {
				return (
					<>
						{group}
						<div className='break'></div>
					</>
				);
			})}
		</div>
	);
};

export default Content;
