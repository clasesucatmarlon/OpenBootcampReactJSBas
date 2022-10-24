import React from 'react';
//  import logoTask from '../../assets/images/logoTask.png';
import banner from '../../assets/images/banner1.png';
import '../../assets/styles/header.scss';

const Header = () => {
	return (
		<div className='d-flex text-center justify-content-center pt-3'>
			<div>
				<img src={banner} alt='Banner' className='shadow' />
			</div>
		</div>
	);
};

export default Header;
