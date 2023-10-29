import { useNavigate } from 'react-router-dom';
import './signupsteps.css';

function SignUpSteps({ setShowNavNFooter }) {
	const navigate = useNavigate();

	const handleSignUpClick = () => {
		navigate('/');
	};

	return (
		<>
			<div className="signup-steps-container">
				<div className="signup-form">
					<div className="signup-title">
						Welcome,
						<br />
						<span>to finish signing up, fill out the following</span>
					</div>
					<div className="horizontal-inputs">
						<input className="signup-input" placeholder="First Name" type="text" />
						<input className="signup-input" placeholder="Last Name" type="text" />
					</div>
					<div className="vertical-inputs">
						<div>
							<input className="signup-input" placeholder="test1" type="text" />
						</div>
						<div>
							<input className="signup-input" placeholder="test2" type="text" />
						</div>
						<div>
							<input className="signup-input" placeholder="test2" type="text" />
						</div>
						<div>
							<input className="signup-input" placeholder="test2" type="text" />
						</div>
						<div>
							<input className="signup-input" placeholder="test2" type="text" />
						</div>
					</div>

					<div className="form-control">
						<label className="label cursor-pointer">
							<span className="label-text text-lg font-bold mr-16">Individual</span>
							<input
								type="radio"
								name="radio-10"
								className="radio checked:bg-warning"
								checked
							/>
						</label>
					</div>
					<div className="form-control">
						<label className="label cursor-pointer">
							<span className="label-text text-lg font-bold mr-10">Organization</span>
							<input type="radio" name="radio-10" className="radio checked:bg-warning" />
						</label>
					</div>
					<button className="signup-button-confirm" onClick={handleSignUpClick}>
						Sign Up
					</button>
				</div>
			</div>
		</>
	);
}

export default SignUpSteps;
