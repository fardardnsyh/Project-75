import { Link } from 'react-router-dom';
import errorImage from '../../assets/images/not-found.svg';
import Wrapper from '../../assets/wrappers/ErrorPage';
const Error = () => {
	return (
		<Wrapper className="full-page">
			<div className="test">
				<img src={errorImage} alt="not found" />
				<div>
					<h3>Ohh! page not found</h3>
					<p>We can't seem to find the page you're looking for</p>
				</div>
				<Link to="/">back home</Link>
			</div>
		</Wrapper>
	);
};

export default Error;
