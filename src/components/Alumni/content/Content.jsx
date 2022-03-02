import React from 'react';
import _ from 'lodash';
import './content.scss';

import Card from '../profile/Profile';

import profile4 from '../../../assets/profile/profile4.png';
import profile5 from '../../../assets/profile/profile5.png';
import profile6 from '../../../assets/profile/profile6.png';

const AlumniData = [
	{
		id: 1,
		img: profile4,
		name: 'John Doe',
		jurusan: 'Jurusan - Angkatan',
		company: 'Perusahaan',
		quotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
	},
	{
		id: 2,
		img: profile5,
		name: 'John Smith',
		jurusan: 'Jurusan - Angkatan',
		company: 'Perusahaan',
		quotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit ridiculus auctor dolor odio et nec elementum. At eu et fermentum in cras. Tempor mattis consectetur pharetra phasellus erat imperdiet cursus. Aliquet convallis enim, habitant natoque. Amet.',
	},
	{
		id: 3,
		img: profile6,
		name: 'John Doe',
		jurusan: 'Jurusan - Angkatan',
		company: 'Perusahaan',
		quotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit ridiculus auctor dolor odio et nec elementum. At eu et fermentum in cras. Tempor mattis consectetur pharetra phasellus erat imperdiet cursus. Aliquet convallis enim, habitant natoque. Amet.',
	},
	{
		id: 4,
		img: profile4,
		name: 'John Doe',
		jurusan: 'Jurusan - Angkatan',
		company: 'Perusahaan',
		quotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit ridiculus auctor dolor odio et nec elementum. At eu et fermentum in cras. Tempor mattis consectetur pharetra phasellus erat imperdiet cursus. Aliquet convallis enim, habitant natoque. Amet.',
	},
	{
		id: 5,
		img: profile5,
		name: 'John Smith',
		jurusan: 'Jurusan - Angkatan',
		company: 'Perusahaan',
		quotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit ridiculus auctor dolor odio et nec elementum. At eu et fermentum in cras. Tempor mattis consectetur pharetra phasellus erat imperdiet cursus. Aliquet convallis enim, habitant natoque. Amet.',
	},
	{
		id: 6,
		img: profile6,
		name: 'John Doe',
		jurusan: 'Jurusan - Angkatan',
		company: 'Perusahaan',
		quotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit ridiculus auctor dolor odio et nec elementum. At eu et fermentum in cras. Tempor mattis consectetur pharetra phasellus erat imperdiet cursus. Aliquet convallis enim, habitant natoque. Amet.',
	},
];

const Content = () => {
	const alumniDataArray = AlumniData.map((item, index) => {
		return (
			<Card
				key={index}
				img={item.img}
				name={item.name}
				jurusan={item.jurusan}
				company={item.company}
				quotes={item.quotes}
			/>
		);
	});

	return (
		<div className='alumni-content'>
			{_.chunk(alumniDataArray, 3).map((group, index) => {
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
