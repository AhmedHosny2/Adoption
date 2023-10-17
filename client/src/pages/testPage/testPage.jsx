import '../../App.css';
import HomeSection2 from '../../components/homeSection2/homeSection2';
import Footer from '../../components/footer/footer';
import { motion } from 'framer-motion';

const containerVariants = {
	start: {
		opacity: 0,
		x: '100vw',
	},
	end: {
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
			<motion.div variants={containerVariants} initial="start" animate="end" exit="exit">
				<HomeSection2 />
			</motion.div>
			<Footer />
		</>
	);
}

export default TestPage;
