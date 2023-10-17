import '../../App.css';
import HomeSection2 from '../../components/homeSection2/homeSection2';
import Footer from '../../components/footer/footer';
import { motion } from 'framer-motion';

const containerVariants = {
	hidden: {
		opacity: 0,
		x: '100vw',
	},
	visibile: {
		opacity: 1,
		x: '0vw',
		transition: { delay: 1, duration: 0.6, ease: 'easeOut' },
	},
	exit: {
		x: '-100vw',
		transition: { ease: 'easeInOut' },
	},
};

function TestPage() {
	return (
		<>
			<motion.div variants={containerVariants} initial="hidden" animate="visibile" exit="exit">
				<HomeSection2 />
			</motion.div>
			<Footer />
		</>
	);
}

export default TestPage;
