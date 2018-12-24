import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
	<div>
		<div>
			<div>
				<h1>
					!404 || This Page Does Not Exist - <Link to="/">Go Home</Link>
				</h1>
			</div>
		</div>
	</div>
);

export default NotFoundPage;
