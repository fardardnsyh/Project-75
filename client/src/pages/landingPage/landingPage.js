import React from 'react';
import mainImage from '../../assets/images/main.svg';
import Wrapper from '../../assets/wrappers/landingPage';
import { Logo } from '../../components';
import { Link } from 'react-router-dom';

const LandingPage = () => {
	return (
		<div>
			<Wrapper>
				<nav>
					<Logo />
				</nav>
				<div className="container page">
					{/* info */}
					<div className="info">
						<h1>
							job <span>tracking</span> app
						</h1>
						<p>
							I'm baby art party raclette jianbing artisan freegan, tote bag health goth scenester vinyl
							swag. Next level master cleanse swag kitsch VHS, leggings flannel chillwave keffiyeh vinyl
							man bun cronut lomo. 8-bit XOXO forage tbh. Stumptown knausgaard narwhal fixie green juice
							90's cornhole.
						</p>
						<Link to="/register" className="btn btn-hero">
							Login/Register
						</Link>
					</div>
					{/* image */}
					<img src={mainImage} alt="jon hunt" className="img main-img" />
				</div>
			</Wrapper>
		</div>
	);
};

export default LandingPage;
