import '../../App.css';
import { motion } from 'framer-motion';
import SearchBar from '../../components/search/search';
import Card3 from '../../components/card3/card3';
import Footer from '../../components/footer/footer';

import dog1 from '../../assets/dog1.webp';

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

function SearchPage() {
	return (
		<>
			<motion.div variants={containerVariants} initial="hidden" animate="visibile" exit="exit">
				<div className="h-full">
					<div className="flex flex-col justify-center items-center mt-14">
						<SearchBar />
						<div className="my-14 flex flex-wrap gap-14 justify-center items-center">
							<Card3 text1={'Felix'} text2={'Good Boy'} image={dog1} />
							<Card3 text1={'Felix'} text2={'Good Boy'} image={dog1} />
							<Card3 text1={'Felix'} text2={'Good Boy'} image={dog1} />
							<Card3 text1={'Felix'} text2={'Good Boy'} image={dog1} />
							<Card3 text1={'Felix'} text2={'Good Boy'} image={dog1} />
							<Card3 text1={'Felix'} text2={'Good Boy'} image={dog1} />
							<Card3 text1={'Felix'} text2={'Good Boy'} image={dog1} />
							<Card3 text1={'Felix'} text2={'Good Boy'} image={dog1} />
							<Card3 text1={'Felix'} text2={'Good Boy'} image={dog1} />
							<Card3 text1={'Felix'} text2={'Good Boy'} image={dog1} />
							<Card3 text1={'Felix'} text2={'Good Boy'} image={dog1} />
							<Card3 text1={'Felix'} text2={'Good Boy'} image={dog1} />
							<Card3 text1={'Felix'} text2={'Good Boy'} image={dog1} />
							<Card3 text1={'Felix'} text2={'Good Boy'} image={dog1} />
							<Card3 text1={'Felix'} text2={'Good Boy'} image={dog1} />
							<Card3 text1={'Felix'} text2={'Good Boy'} image={dog1} />
						</div>
					</div>
				</div>
			</motion.div>
		</>
	);
}

export default SearchPage;
