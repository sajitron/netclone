import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header className="header">
		<nav className="header__nav">
			<div className="header__brand">
				<NavLink to="/" exact={true} className="header__title">
					<h1>NetClone</h1>
				</NavLink>
			</div>

			<div className="header__site-nav">
				<NavLink to="/" activeClassName="is-active" className="header__link" exact={true}>
					Home
				</NavLink>
				<NavLink to="/popular" activeClassName="is-active" className="header__link">
					Popular
				</NavLink>
				<NavLink to="/playing" activeClassName="is-active" className="header__link">
					Now Playing
				</NavLink>
				<NavLink to="/top" activeClassName="is-active" className="header__link">
					Top Rated
				</NavLink>
			</div>
		</nav>
	</header>
);

export default Header;
