import React from 'react';
import './content.scss';

import logo from '../../../assets/logo.png';

const Content = () => {
	return (
		<div className='about-us__content'>
			<div className='content-wrapper'>
				<div className='content'>
					<h2>
						Kementrian Pertanian Desa
						<br />
						Ikatan Alumni Institut Teknologi Bandung
					</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo id condimentum tincidunt
						enim pulvinar aliquam. Fames sit venenatis nec augue nunc, arcu sit gravida lectus.
						Elementum sit volutpat ultricies orci porttitor pellentesque pellentesque. Eget eget
						ac velit venenatis. Consequat quam ut natoque velit cras gravida. Placerat ullamcorper
						enim lacus nisl semper.
					</p>
				</div>
				<div className='logo'>
					<img src={logo} alt='' height={300} />
				</div>
			</div>
			<div className='break'></div>
			<div className='sejarah'>
				<h2>
					Sejarah
					<br />
					Ikatan Alumni
					<br />
					Institut Teknologi Bandung
				</h2>
				<p>
					Non culpa cupidatat duis deserunt anim irure magna cillum nulla nostrud dolore consequat
					velit officia. Tempor mollit qui ipsum ipsum Lorem fugiat ex minim dolor voluptate officia
					adipisicing veniam. Aliquip et ipsum est velit nisi adipisicing ad id. Commodo ut
					reprehenderit id cillum id. Nulla pariatur laborum voluptate non ipsum dolor. Irure in ea
					cupidatat aliqua. Amet minim velit pariatur aute sunt excepteur tempor magna officia.
					Irure deserunt ea labore duis aute laboris enim eiusmod nulla fugiat nisi nisi mollit
					amet. Incididunt labore et fugiat occaecat in ex aliqua magna ea aute. Aliquip culpa
					occaecat Lorem irure cillum sint tempor velit cillum nulla qui. Culpa consectetur culpa id
					ipsum sint. Duis magna non occaecat tempor excepteur fugiat. Do qui eiusmod velit aliquip
					reprehenderit dolor tempor quis cupidatat incididunt sunt et fugiat. Culpa sunt ullamco
					Lorem labore cillum duis aliqua excepteur aliqua. Duis do veniam non adipisicing consequat
					incididunt ipsum aute nulla. Labore ut mollit sint proident ea dolore qui dolore quis
					velit mollit elit ex. Pariatur Lorem eu voluptate fugiat cupidatat occaecat sint sit eu
					fugiat. Quis Lorem mollit Lorem esse cillum ipsum quis sit deserunt dolor in laboris id.
					Officia eu ad cillum laborum elit nulla dolore Lorem adipisicing sit. Cupidatat anim
					deserunt nostrud est ipsum dolor tempor mollit anim eiusmod laboris. Mollit dolor ut sit
					officia. Aute anim dolore sint ipsum. Commodo ut pariatur laboris sit mollit commodo
					pariatur ut. Reprehenderit est non do id sit commodo irure nisi laborum occaecat aliquip
					sit adipisicing.
				</p>
			</div>
		</div>
	);
};

export default Content;
