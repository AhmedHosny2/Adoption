import SignUpSteps from '../../components/signupsteps/signupsteps';
import { motion } from 'framer-motion';

const containerVariants = {
	hidden2: {
		y: 400,
		opacity: 0,
	},
	visible2: {
		y: 0,
		opacity: 1,
		transition: { delay: 1, duration: 0.7, ease: 'easeInOut' },
	},
	exit2: {
		y: -130,
		opacity: 0,
		transition: { delay: 0.3, duration: 0.7, ease: 'easeInOut' },
	},
};

function SignUpStepsPage({ setShowNavNFooter }) {
	return (
		<>
			<motion.div variants={containerVariants} initial="hidden2" animate="visible2" exit="exit2">
				<SignUpSteps setShowNavNFooter={setShowNavNFooter} />
			</motion.div>
		</>
	);
}

export default SignUpStepsPage;
