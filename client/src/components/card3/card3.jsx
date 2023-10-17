import './card3.css';
import Button2 from '../button2/button2';

function Card3({ text1, text2, image }) {
	return (
		<>
			<div className="card3">
				<div className="card3-front">
					<img src={image} alt="Dog" />
				</div>
				<div className="card3-back">
					<p className="card3-title">{text1}</p>
					<p className="card3-subtitle mb-28">{text2}</p>
					<Button2 />
				</div>
			</div>
		</>
	);
}

export default Card3;
