import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const svgVariants = {
	hidden: {
		opacity: 0,
		y: '-7vw',
	},
	visible: {
		opacity: 1,
		y: '0vw',
		transition: {
			duration: 2,
			ease: 'easeOut',
		},
	},
};

const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: {
			delay: 1,
			duration: 1.5,
			ease: 'easeInOut',
		},
	},
};

const textVariants = {
	hidden: {
		opacity: 0,
		y: 75,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.25,
		},
	},
};

function HomeSection2() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const inViewControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			inViewControls.start('visible');
		}
	});

	return (
		<>
			<div className="container my-24 mx-auto md:px-6">
				<section className="mb-32 text-center">
					<h2 className="mb-16 text-3xl font-bold text-neutral">
						Planning to <u className="text-primary dark:text-accent-focus">adopt</u> a pet
					</h2>
					<div ref={ref} className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
						<div className="mb-12 md:mb-0">
							<div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
								<motion.svg
									variants={svgVariants}
									initial="hidden"
									animate={inViewControls}
									width="150px"
									height="150px"
									viewBox="0 0 24.00 24.00"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									stroke="#ffffff"
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{' '}
										<motion.path
											variants={pathVariants}
											d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
											stroke="#ffffff"
											stroke-width="1.9200000000000004"
											stroke-linecap="round"
											stroke-linejoin="round"
										></motion.path>{' '}
										<motion.path
											variants={pathVariants}
											d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
											stroke="#ffffff"
											stroke-width="1.9200000000000004"
											stroke-linecap="round"
											stroke-linejoin="round"
										></motion.path>{' '}
									</g>
								</motion.svg>
							</div>
							<motion.h5
								variants={textVariants}
								initial="hidden"
								animate={inViewControls}
								className="mb-4 text-lg font-bold text-accent-focus"
							>
								Adopt From a Another User
							</motion.h5>
							<motion.p
								variants={textVariants}
								initial="hidden"
								animate={inViewControls}
								className="text-neutral-500 dark:text-accent-content"
							>
								Laudantium totam quas cumque pariatur at doloremque hic quos quia eius.
								Reiciendis optio minus mollitia rerum labore facilis inventore voluptatem
								ad, quae quia sint. Ullam.
							</motion.p>
						</div>

						<div className="mb-12 md:mb-0">
							<div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
								<motion.svg
									variants={svgVariants}
									initial="hidden"
									animate={inViewControls}
									fill="#ffffff"
									height="150px"
									width="150px"
									version="1.1"
									id="Capa_1"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 470 470"
									stroke="#ffffff"
									stroke-width="23.970000000000002"
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{' '}
										<g>
											{' '}
											<motion.path
												variants={pathVariants}
												d="M164.238,124.387c-16.28,16.576-25.246,38.681-25.246,62.244v103.06l-38.767,38.767c-2.929,2.929-2.929,7.678,0,10.606 c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197l30.779-30.779c6.429,18.485,24.016,31.794,44.663,31.794 c26.071,0,47.282-21.21,47.282-47.282V185.394c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v107.403 c0,17.8-14.481,32.282-32.282,32.282c-17.799,0-32.28-14.48-32.281-32.28c0-0.001,0-0.003,0-0.004V186.631 c0-40.312,32.328-73.107,72.063-73.107s72.063,32.804,72.063,73.125c0,4.142,3.358,7.5,7.5,7.5h51.231 c0.054,7.006,0.122,18.299,0.122,30.93c0,17.076-13.867,30.967-30.911,30.967h-19.345c-4.142,0-7.5,3.358-7.5,7.5V432.5 c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5V271.046h11.845c25.315,0,45.911-20.621,45.911-45.967 c0-21.002-0.186-38.339-0.188-38.511c-0.045-4.11-3.389-7.418-7.5-7.418h-51.47c-1.695-20.726-10.4-39.943-24.939-54.752 c-16.381-16.685-38.335-25.873-61.819-25.873C202.572,98.524,180.618,107.709,164.238,124.387z"
											></motion.path>{' '}
											<motion.path
												variants={pathVariants}
												d="M459.752,108.252L343.191,51.677V7.5c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v36.896L238.275,0.753 c-2.068-1.004-4.481-1.004-6.55,0l-221.478,107.5c-3.727,1.809-5.281,6.295-3.472,10.022c1.809,3.726,6.295,5.282,10.022,3.472 l9.32-4.524V462.5c0,4.142,3.358,7.5,7.5,7.5h402.766c4.142,0,7.5-3.358,7.5-7.5V117.223l9.32,4.524 c1.055,0.512,2.17,0.754,3.27,0.754c2.782,0,5.456-1.555,6.752-4.227C465.034,114.548,463.479,110.061,459.752,108.252z M428.883,455H41.117V109.942L235,15.837l193.883,94.105V455z"
											></motion.path>{' '}
										</g>{' '}
									</g>
								</motion.svg>
							</div>
							<motion.h5
								variants={textVariants}
								initial="hidden"
								animate={inViewControls}
								className="mb-4 text-lg font-bold text-accent-focus"
							>
								Adopt From a Shelter
							</motion.h5>
							<motion.p
								variants={textVariants}
								initial="hidden"
								animate={inViewControls}
								className="text-neutral-500 dark:text-accent-content"
							>
								Eum nostrum fugit numquam, voluptates veniam neque quibusdam ullam
								aspernatur odio soluta, quisquam dolore animi mollitia a omnis praesentium,
								expedita nobis!
							</motion.p>
						</div>

						<div className="mb-12 md:mb-0">
							<div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
								<motion.svg
									variants={svgVariants}
									initial="hidden"
									animate={inViewControls}
									version="1.1"
									id="Layer_1"
									xmlns="http://www.w3.org/2000/svg"
									width="150px"
									height="150px"
									viewBox="0 0 64 64"
									enable-background="new 0 0 64 64"
									fill="#ffffff"
									stroke="#ffffff"
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
									></g>
									<g id="SVGRepo_iconCarrier">
										{' '}
										<title>Dog</title> <desc>Created with Sketch.</desc>{' '}
										<g id="Group" transform="translate(1.000000, 6.000000)">
											{' '}
											<motion.path
												variants={pathVariants}
												id="Shape_1_"
												fill="none"
												stroke="#ffffff"
												stroke-width="3.904"
												stroke-linejoin="round"
												d="M34.7,42c-2.8,0-6.4,4.9-6.4,8h-5.2 c-1.7,0-3.2,1.6-3.2,3.5l0,0c0,2,1.4,3.4,3.2,3.4h22.5C58.6,57,62.1,45.3,61,37.1l0,0c0,0-11.1,11.8-14.1,11.8 c0.1-12.2-8.9-23.7-14.8-29C28.8,16.9,27.9,9,27.9,9V4.8c0-4.3-0.3-8.9-1.2-9.5c-1.6-1.1-4.4,4.6-6.7,4.6c-11.7,0-10,8-12.5,8H2.2 C0,7.9,0,9.7,0,10.9c0.2,3.3,1.9,6,10,6c2,0,5.1,2.8,5.1,7.9v26.1H15h-1c-1.1,0-2,0.9-2,2v2c0,1.1,0.9,2,2,2h15.75"
											></motion.path>{' '}
											<motion.path
												variants={pathVariants}
												id="Shape_2_"
												fill="none"
												stroke="#ffffff"
												stroke-width="3.904"
												stroke-linejoin="round"
												d="M20.9,38v8.8"
											></motion.path>{' '}
											<motion.path
												variants={pathVariants}
												id="Shape_4_"
												fill="none"
												stroke="#ffffff"
												stroke-width="3.904"
												stroke-linejoin="round"
												d="M1,14h6"
											></motion.path>{' '}
										</g>{' '}
									</g>
								</motion.svg>
							</div>
							<motion.h5
								variants={textVariants}
								initial="hidden"
								animate={inViewControls}
								className="mb-4 text-lg font-bold text-accent-focus"
							>
								Put For Adoption
							</motion.h5>
							<motion.p
								variants={textVariants}
								initial="hidden"
								animate={inViewControls}
								className="text-neutral-500 dark:text-accent-content"
							>
								Enim cupiditate, minus nulla dolor cumque iure eveniet facere ullam beatae
								hic voluptatibus dolores exercitationem? Facilis debitis aspernatur amet
								nisi?
							</motion.p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default HomeSection2;
