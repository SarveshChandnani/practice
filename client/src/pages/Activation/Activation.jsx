import React from 'react';
import ProfileActivate from '../profileActivate/profileActivate';
import './activation.css'
import Navbar from '../../Components/Navbar';

function Activation() {
	return (
		<div>
			{/* <Topbar/> */}
            <Navbar/>
			
			<div className='content'>
			<ProfileActivate/>
			</div>
		</div>
	);
}

export default Activation;