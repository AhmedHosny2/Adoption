import { useState } from 'react';
import { motion } from 'framer-motion';
import LogSignForm from '../../components/login_signup_form/logsignForm';
import HamsterLoading from '../../components/hamsterloading/hamsterloading';

const formAppearVariants = {
	hidden: {
		y: 400,
		opacity: 0,
	},
	visible: {
		y: 130,
		opacity: 1,
		transition: { delay: 1, duration: 0.7, ease: 'easeInOut' },
	},
	exit: {
		y: -130,
		opacity: 0,
		transition: { delay: 0.3, duration: 0.7, ease: 'easeInOut' },
	},
};

const hamsterAppearVariants = {
	hidden: {
		x: '100%',
		opacity: 0,
	},
	visible: {
		x: '-100%',
		opacity: 1,
		transition: { delay: 1.5, duration: 4, ease: 'linear' },
	},
};

function LogSignPage({ setShowNavNFooter }) {
	const [showForm, setShowForm] = useState(true);

	const handleLoginClick = () => {
		setShowForm(false);
	};

	return (
		<>
			<motion.div
				variants={formAppearVariants}
				initial="hidden"
				animate={showForm ? 'visible' : 'exit'}
				exit="exit"
			>
				<LogSignForm setShowNavNFooter={setShowNavNFooter} onLoginClick={handleLoginClick} />
			</motion.div>

			<motion.div
				variants={hamsterAppearVariants}
				initial="hidden"
				animate={!showForm ? 'visible' : 'exit'}
				exit="exit"
			>
				<HamsterLoading />
			</motion.div>
		</>
	);
}

export default LogSignPage;
