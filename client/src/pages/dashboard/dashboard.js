import React from 'react';
import { Link } from 'react-router-dom';

const dashboard = () => {
	return (
		<div>
			<h1>DashBoard</h1>
			<Link to="/landingPage" className="btn btn-hero">
				LandingPage
			</Link>
		</div>
	);
};

export default dashboard;
