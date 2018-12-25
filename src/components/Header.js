import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header className="header">
		<nav className="container">
			<div className="header__content">
				<NavLink to="/" exact={true}>
					<h1 className="header__title nav-left link">NetClone</h1>
				</NavLink>

				<div>
					<NavLink to="/" activeClassName="is-active" className="link" exact={true}>
						Home Page
					</NavLink>
					<NavLink to="/popular" activeClassName="is-active" className="link">
						Popular Movies
					</NavLink>
					<NavLink to="/playing" activeClassName="is-active" className="link">
						Now Playing Movies
					</NavLink>
					<NavLink to="/top" activeClassName="is-active" className="link">
						Top Rated Movies
					</NavLink>
				</div>
			</div>
		</nav>
	</header>
);

export default Header;
