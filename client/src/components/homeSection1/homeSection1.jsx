import { motion } from 'framer-motion';
import Button1 from '../button1/button1';
import Card2 from '../card2/card2';
import cat1 from '../../assets/cat1.webp';
import dog1 from '../../assets/dog1.webp';
import dog2 from '../../assets/dog2.jpg';
import rabbit1 from '../../assets/rabbit1.jpg';

const sectionVariant = {
	hidden: {
		opacity: 0,
		x: -1000,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: { delay: 4, type: 'spring', stiffness: 120 },
	},
};

function HomeSection1() {
	return (
		<>
			<motion.div
				className="hero min-h-screen bg-base-100"
				variants={sectionVariant}
				initial="hidden"
				animate="visible"
			>
				<div className="hero-content flex-col lg:flex-row-reverse gap-40">
					<div className="text-center lg:text-left">
						<h1 className="text-5xl font-bold">Search Now!</h1>
						<p className="py-6">
							{
								'Start searching for your buddy right now. We offer a variatey of animals, breeds, colors and personalities :)'
							}
						</p>
						<Button1 />
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm">
						<div className="card flex-shrink-0 w-full max-w-sm">
							<form className="card-body">
								<Card2 card1={cat1} card2={dog1} card3={rabbit1} card4={dog2} />
							</form>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
}

export default HomeSection1;
