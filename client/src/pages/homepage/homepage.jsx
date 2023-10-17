import '../../App.css';
import HomeHero from '../../components/homeHero/homeHero';
import HomeSection1 from '../../components/homeSection1/homeSection1';
import HomeSection2 from '../../components/homeSection2/homeSection2';
import Footer from '../../components/footer/footer';
import { motion } from 'framer-motion';

const containerVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: { delay: 1.5, duration: 1.5, ease: 'easeInOut' },
	},
	exit: {
		x: '-100vw',
		transition: { ease: 'easeInOut' },
	},
};

function Homepage() {
	return (
		<>
			<motion.div variants={containerVariants} initial="hidden" animate="visible" exit="exit">
				<HomeHero />
				<HomeSection1 />
				<HomeSection2 />
			</motion.div>
			<Footer />
		</>
	);
}

export default Homepage;
