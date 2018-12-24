import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
	<header>
		<nav>
			<div>
				<NavLink to="/" exact={true}>
					<h1 className="text-primary links">NetClone</h1>
				</NavLink>

				<div>
					<NavLink to="/" activeClassName="is-active" exact={true}>
						Home Page
					</NavLink>
					<NavLink to="/popular" activeClassName="is-active">
						Popular Movies
					</NavLink>
					<NavLink to="/playing" activeClassName="is-active">
						Now Playing Movies
					</NavLink>
					<NavLink to="/top" activeClassName="is-active">
						Top Rated Movies
					</NavLink>
				</div>
			</div>
		</nav>
	</header>
);

export default Header;
