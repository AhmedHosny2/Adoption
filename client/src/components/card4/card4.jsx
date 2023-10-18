import './card4.css';

function Card4({ name, animal, breed, image }) {
	return (
		<>
			<article className="article-wrapper">
				{/* <div className="rounded-lg container-project"></div> */}
				<img className="rounded-lg container-project" src={image} alt="" />
				<div className="project-info">
					<div className="flex-pr">
						<div className="project-title text-nowrap">{name}</div>
						<div className="project-hover">
							<svg
								// style="color: black;"
								xmlns="http://www.w3.org/2000/svg"
								width="2em"
								height="2em"
								color="black"
								stroke-linejoin="round"
								stroke-linecap="round"
								viewBox="0 0 24 24"
								stroke-width="2"
								fill="none"
								stroke="currentColor"
							>
								<line y2="12" x2="19" y1="12" x1="5"></line>
								<polyline points="12 5 19 12 12 19"></polyline>
							</svg>
						</div>
					</div>
					<div className="types">
						<span
							// style="background-color: rgba(165, 96, 247, 0.43); color: rgb(85, 27, 177);"
							className="project-type"
						>
							• Animal
						</span>
						<span className="project-type">• Breed</span>
					</div>
				</div>
			</article>
		</>
	);
}

export default Card4;
