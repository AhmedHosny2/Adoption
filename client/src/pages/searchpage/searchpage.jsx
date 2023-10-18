import '../../App.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../../components/search/search';
import Card4 from '../../components/card4/card4';
import Select from '../../components/select/select';

import dog1 from '../../assets/dog1.webp';
import dog2 from '../../assets/dog2.jpg';
import cat1 from '../../assets/cat1.webp';
import rabbit1 from '../../assets/rabbit1.jpg';

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

const sidebarItemVariants = {
	hidden: {
		opacity: 0,
		y: '100vw',
	},
	visibile: {
		opacity: 1,
		y: '0vw',
		transition: { delay: 1, duration: 0.6, ease: 'easeOut' },
	},
};

const cardData = [
	{
		name: 'Felix',
		animal: 'Dog',
		breed: 'Golden',
		image: dog1,
	},
	{
		name: 'Joe',
		animal: 'Dog',
		breed: 'Golden',
		image: dog2,
	},
	{
		name: 'Joesey',
		animal: 'Dog',
		breed: 'Golden',
		image: cat1,
	},
	{
		name: 'Max',
		animal: 'Dog',
		breed: 'Golden',
		image: rabbit1,
	},
	{
		name: 'Stecki',
		animal: 'Dog',
		breed: 'Golden',
		image: dog1,
	},
	{
		name: 'Choco',
		animal: 'Dog',
		breed: 'Golden',
		image: dog2,
	},
	{
		name: 'Oreo',
		animal: 'Dog',
		breed: 'Golden',
		image: cat1,
	},
	{
		name: 'Funnel',
		animal: 'Dog',
		breed: 'Golden',
		image: rabbit1,
	},
	{
		name: 'Pizza',
		animal: 'Dog',
		breed: 'Golden',
		image: dog1,
	},
	{
		name: 'Hotdog',
		animal: 'Dog',
		breed: 'Golden',
		image: dog2,
	},
	{
		name: 'Penny',
		animal: 'Dog',
		breed: 'Golden',
		image: cat1,
	},
	{
		name: 'Sunny',
		animal: 'Dog',
		breed: 'Golden',
		image: rabbit1,
	},
	{
		name: 'Hammer',
		animal: 'Dog',
		breed: 'Golden',
		image: dog1,
	},
	{
		name: 'Thunder',
		animal: 'Dog',
		breed: 'Golden',
		image: dog2,
	},
];

function SearchPage() {
	const cardsPerPage = 6; // Number of cards per page
	const [currentPage, setCurrentPage] = useState(1);

	const indexOfLastCard = currentPage * cardsPerPage;
	const indexOfFirstCard = indexOfLastCard - cardsPerPage;
	const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

	const nextPage = () => {
		setCurrentPage(currentPage + 1);
	};

	const prevPage = () => {
		setCurrentPage(currentPage - 1);
	};

	const isPreviousDisabled = currentPage === 1;
	const isNextDisabled = cardData.length <= currentPage * cardsPerPage;

	return (
		<>
			<motion.div variants={containerVariants} initial="hidden" animate="visibile" exit="exit">
				<div className="drawer lg:drawer-open">
					<input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content flex flex-col items-center justify-center">
						<div className="h-full">
							<div className="flex flex-col justify-center items-center mt-14">
								<SearchBar />
								<label
									htmlFor="my-drawer-2"
									className="btn btn-wide drawer-button bg-base-300 lg:hidden"
								>
									<svg
										width="45px"
										height="45px"
										viewBox="0 0 24.00 24.00"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
										stroke="#ffffff"
										stroke-width="0.00024000000000000003"
									>
										<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
										<g
											id="SVGRepo_tracerCarrier"
											stroke-linecap="round"
											stroke-linejoin="round"
										></g>
										<g id="SVGRepo_iconCarrier">
											{' '}
											<path
												fill-rule="evenodd"
												clip-rule="evenodd"
												d="M3 7C3 6.44772 3.44772 6 4 6H20C20.5523 6 21 6.44772 21 7C21 7.55228 20.5523 8 20 8H4C3.44772 8 3 7.55228 3 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM9 17C9 16.4477 9.44772 16 10 16H14C14.5523 16 15 16.4477 15 17C15 17.5523 14.5523 18 14 18H10C9.44772 18 9 17.5523 9 17Z"
												fill="#ffffff"
											></path>{' '}
										</g>
									</svg>
								</label>

								<div className="join mt-10">
									<button
										className="join-item btn"
										onClick={prevPage}
										disabled={isPreviousDisabled}
									>
										«
									</button>
									<button className="join-item btn">Page {currentPage}</button>
									<button
										className="join-item btn"
										onClick={nextPage}
										disabled={isNextDisabled}
									>
										»
									</button>
								</div>
								<div className="my-14 flex flex-wrap gap-14 justify-center items-center">
									{currentCards.map((card, index) => (
										<Card4
											key={index}
											name={card.name}
											animal={card.animal}
											breed={card.breed}
											image={card.image}
										/>
									))}
								</div>
								<div className="join mb-10">
									<button
										className="join-item btn"
										onClick={prevPage}
										disabled={isPreviousDisabled}
									>
										«
									</button>
									<button className="join-item btn">Page {currentPage}</button>
									<button
										className="join-item btn"
										onClick={nextPage}
										disabled={isNextDisabled}
									>
										»
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="drawer-side">
						<label
							htmlFor="my-drawer-2"
							aria-label="close sidebar"
							className="drawer-overlay"
						></label>
						<motion.ul
							variants={sidebarItemVariants}
							className="menu p-4 w-80 min-h-full bg-base-200 text-base-content"
						>
							{/* Sidebar content here */}
							<li>
								<a>
									<Select
										title={'Animal'}
										optionList={['Animal1', 'Animal2', 'Animal3']}
									/>
								</a>
							</li>
							<li>
								<a>
									<Select title={'Breed'} optionList={['Breed1', 'Breed2', 'Breed3']} />
								</a>
							</li>
							<li>
								<a>
									<Select title={'Age'} optionList={['Age1', 'Age2', 'Age3']} />
								</a>
							</li>
							<li>
								<a>
									<Select
										title={'Gender'}
										optionList={['Gender1', 'Gender2', 'Gender3']}
									/>
								</a>
							</li>
							<li>
								<a>
									<Select title={'Size'} optionList={['Size1', 'Size2', 'Size3']} />
								</a>
							</li>
							<li>
								<a>
									<Select title={'Color'} optionList={['Color1', 'Color2', 'Color3']} />
								</a>
							</li>
						</motion.ul>
					</div>
				</div>
			</motion.div>
		</>
	);
}

export default SearchPage;
