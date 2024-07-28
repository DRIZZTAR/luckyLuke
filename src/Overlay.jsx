import React, { useState, useEffect } from 'react';

export default function Overlay() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	// Close the menu when clicking outside of it
	useEffect(() => {
		const handleClickOutside = event => {
			if (
				menuOpen &&
				!event.target.closest('.menu') &&
				!event.target.closest('.hamburger')
			) {
				closeMenu();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [menuOpen]);

	return (
		<div className='container'>
			<div className='top-left'>
				<h1 className='inter-extra-bold'>
					LUCKY
					<br />
					LUKE
				</h1>
				<p>issue #O1</p>
			</div>
			<div class='bottom-right'>
				<h2 class='inter-extra-bold'>The West Is Wild</h2>
				<br />
				<p class='inter-regular'>The Word Is The Warden</p>
				<br />
				<div className='bottom-right-link'>
					<a href='https://www.TysonSkakun.dev'>TysonSkakun.Dev</a>
				</div>
			</div>
			<div
				className={`hamburger ${menuOpen ? 'active' : ''}`}
				onClick={toggleMenu}
			>
				<div />
				<div />
				<div />
			</div>
			<div className={`menu ${menuOpen ? 'active' : ''}`}>
				<div className='menu-close' onClick={closeMenu}></div>
				<div className='menu-content'>
					<div className='menu-item inter-extra-bold'>
						<a
							href='https://www.linkedin.com/in/tyson-skakun-tail/'
							target='_blank'
							rel='noopener noreferrer'
						>
							HireMe
						</a>
					</div>
					<div className='menu-item inter-regular'>Tall Tales</div>
					<div className='menu-item inter-regular'>Contact</div>
					<div className='menu-item inter-regular'>
						Cowboy Services
					</div>
				</div>
			</div>
		</div>
	);
}
