import { useEffect, useState } from 'react';
import './header.css';
import { useAnalyticsEventTracker } from '../../useAnalyticsEventTracker';

const Header = () => {
	const [scrolling, setScrolling] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [activeNav, setActiveNav] = useState('#home');

	const navItems = [
		{ href: '#home', text: 'Home', icon: 'estate' },
		{ href: '#about', text: 'About', icon: 'user' },
		{ href: '#skills', text: 'Skills', icon: 'file-alt' },
		{ href: '#portfolio', text: 'Portfolio', icon: 'scenery' },
		{ href: '#contact', text: 'Contact', icon: 'message' },
	];

	const eventTracker = useAnalyticsEventTracker('Header');

	return (
		<header className={`header ${scrolling ? 'scroll-header' : ''}`}>
			<nav className="nav container">
				<a href="index.html" className="nav__logo">
					Luca Becker
				</a>

				<div className={`nav__menu ${toggle ? 'show-menu' : ''}`}>
					<ul className="nav__list grid">
						{/* Map over your navigation items */}
						{navItems.map((item) => (
							<li className="nav__item" key={item.href}>
								<a
									href={item.href}
									onClick={() => {
										setActiveNav(item.href);
										eventTracker('Clicked', item.href);
									}}
									className={`${
										activeNav === item.href
											? 'nav__link active-link'
											: 'nav__link'
									}`}
								>
									<i className={`uil uil-${item.icon} nav__icon`}></i>{' '}
									{item.text}
								</a>
							</li>
						))}
					</ul>

					<i
						className="uil uil-times nav__close"
						onClick={() => setToggle(!toggle)}
					></i>
				</div>

				<div className="nav__toggle" onClick={() => setToggle(!toggle)}>
					<i className="uil uil-apps"></i>
				</div>
			</nav>
		</header>
	);
};

export default Header;
