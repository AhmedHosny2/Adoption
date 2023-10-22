import { Link } from 'react-router-dom';
import './button1.css';

function Button1() {
	return (
		<>
			<Link className="button1-fancy" to="/search">
				<span className="button1-top-key"></span>
				<span className="button1-text">Search . . .</span>
				<span className="button1-bottom-key-1"></span>
				<span className="button1-bottom-key-2"></span>
			</Link>
		</>
	);
}

export default Button1;
