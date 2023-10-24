import { useNavigate } from 'react-router-dom';
import './logsignForm.css';

function LogSignForm({ setShowNavNFooter, onLoginClick }) {
	const navigate = useNavigate();

	const handleLogInClick = () => {
		onLoginClick();

		setTimeout(() => {
			navigate('/home');
			setShowNavNFooter(true);
		}, 6000);
	};

	const handleSignUpClick = () => {
		navigate('/signup-steps');
	};

	return (
		<>
			<div className="logsign-wrapper">
				<div className="logsign-card-switch">
					<label className="logsign-switch">
						<input type="checkbox" className="logsign-toggle" />
						<span className="logsign-slider"></span>
						<span className="logsign-card-side"></span>
						<div className="logsign-flip-card__inner">
							<div className="logsign-flip-card__front">
								<div className="logsign-title">Log in</div>
								<div className="logsign-flip-card__form" action="">
									<input
										className="logsign-flip-card__input"
										name="username"
										placeholder="Username"
										type="text"
									/>
									<input
										className="logsign-flip-card__input"
										name="password"
										placeholder="Password"
										type="password"
									/>
									<button className="logsign-flip-card__btn" onClick={handleLogInClick}>
										Log In
									</button>
								</div>
							</div>
							<div className="logsign-flip-card__back">
								<div className="logsign-title">Sign up</div>
								<div className="logsign-flip-card__form" action="">
									<input
										className="logsign-flip-card__input"
										placeholder="Username"
										type="name"
									/>
									<input
										className="logsign-flip-card__input"
										name="email"
										placeholder="Email"
										type="email"
									/>
									<input
										className="logsign-flip-card__input"
										name="password"
										placeholder="Password"
										type="password"
									/>

									<button className="logsign-flip-card__btn" onClick={handleSignUpClick}>
										Sign Up
									</button>
								</div>
							</div>
						</div>
					</label>
				</div>
			</div>
		</>
	);
}

export default LogSignForm;
