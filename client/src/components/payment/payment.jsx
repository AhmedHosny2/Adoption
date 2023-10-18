import './payment.css';

function HomeSection3() {
	return (
		<>
			<div className="payment-container">
				<div className="payment-left-side">
					<div className="payment-card">
						<div className="payment-card-line"></div>
						<div className="payment-buttons"></div>
					</div>
					<div className="payment-post">
						<div className="payment-post-line"></div>
						<div className="payment-screen">
							<div className="payment-dollar">$</div>
						</div>
						<div className="payment-numbers"></div>
						<div className="payment-numbers-line2"></div>
					</div>
				</div>
				<div className="payment-right-side">
					<div className="payment-new">Make A Donation</div>

					<svg
						viewBox="0 0 451.846 451.847"
						height="512"
						width="512"
						xmlns="http://www.w3.org/2000/svg"
						className="payment-arrow"
					>
						<path
							fill="#cfcfcf"
							data-old_color="#000000"
							className="payment-active-path"
							data-original="#000000"
							d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
						></path>
					</svg>
				</div>
			</div>
		</>
	);
}

export default HomeSection3;
