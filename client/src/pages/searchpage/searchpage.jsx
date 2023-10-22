import '../../App.css';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../../components/search/search';
import Card4 from '../../components/card4/card4';
import Card4Skeleton from '../../components/card4/card4Skeleton';
import PaginationSkeleton from './paginationSkeleton';
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

const cardData = [
	{
		name: 'Felix',
		animal: 'Dog',
		breed: 'Golden',
		age: 6,
		gender: 'm',
		size: 'big',
		color: 'white',
		image: dog1,
	},
	{
		name: 'Joe',
		animal: 'Dog',
		breed: 'Hotdog',
		age: 6,
		gender: 'm',
		size: 'big',
		color: 'white',
		image: dog2,
	},
	{
		name: 'Joesey',
		animal: 'Cat',
		breed: 'Golden',
		age: 6,
		gender: 'm',
		size: 'big',
		color: 'white',
		image: cat1,
	},
	{
		name: 'Max',
		animal: 'Rabbit',
		breed: 'Snow Bunny',
		age: 8,
		gender: 'm',
		size: 'big',
		color: 'white',
		image: rabbit1,
	},
	{
		name: 'Stecki',
		animal: 'Dog',
		breed: 'Golden',
		age: 8,
		gender: 'm',
		size: 'big',
		color: 'white',
		image: dog1,
	},
	{
		name: 'Choco',
		animal: 'Dog',
		breed: 'Golden',
		age: 8,
		gender: 'm',
		size: 'big',
		color: 'white',
		image: dog2,
	},
	{
		name: 'Oreo',
		animal: 'Cat',
		breed: 'Golden',
		age: 8,
		gender: 'm',
		size: 'big',
		color: 'black',
		image: cat1,
	},
	{
		name: 'Funnel',
		animal: 'Rabbit',
		breed: 'Snow Bunny',
		age: 8,
		gender: 'm',
		size: 'medium',
		color: 'black',
		image: rabbit1,
	},
	{
		name: 'Pizza',
		animal: 'Dog',
		breed: 'Golden',
		age: 8,
		gender: 'm',
		size: 'medium',
		color: 'brown',
		image: dog1,
	},
	{
		name: 'Hotdog',
		animal: 'Dog',
		breed: 'Golden',
		age: 8,
		gender: 'm',
		size: 'medium',
		color: 'brown',
		image: dog2,
	},
	{
		name: 'Penny',
		animal: 'Cat',
		breed: 'Golden',
		age: 8,
		gender: 'f',
		size: 'small',
		color: 'brown',
		image: cat1,
	},
	{
		name: 'Sunny',
		animal: 'Rabbit',
		breed: 'Snow Bunny',
		age: 8,
		gender: 'f',
		size: 'small',
		color: 'brown',
		image: rabbit1,
	},
	{
		name: 'Hammer',
		animal: 'Dog',
		breed: 'Golden',
		age: 12,
		gender: 'f',
		size: 'small',
		color: 'brown',
		image: dog1,
	},
	{
		name: 'Thunder',
		animal: 'Dog',
		breed: 'Golden',
		age: 12,
		gender: 'f',
		size: 'small',
		color: 'brown',
		image: dog2,
	},
];

function SearchPage() {
	const [dataArrived, setDataArrived] = useState(false);

	useEffect(() => {
		// Set dataArrived to true after a 3-second delay
		const delay = 3000; // 3 seconds
		const timer = setTimeout(() => {
			setDataArrived(true);
		}, delay);

		// Clear the timer to prevent it from running after component unmounts
		return () => clearTimeout(timer);
	}, []);

	const ageRanges = [
		{ label: 'Any', value: 'Any' },
		{ label: '1 - 3', value: '1-3' },
		{ label: '4 - 6', value: '4-6' },
		{ label: '7 - 9', value: '7-9' },
		{ label: '10+', value: '10+' },
	];

	// Step 1: Create state variables for selected filters
	const [selectedFilters, setSelectedFilters] = useState({
		animal: 'Any',
		breed: 'Any',
		age: 'Any',
		gender: 'Any',
		size: 'Any',
		color: 'Any',
	});

	// Step 2: Filter cards based on selected filters
	const filteredCards = cardData.filter((card) => {
		const selectedAge = selectedFilters.age;

		const isAgeInRange = (age, selectedAge) => {
			if (selectedAge === 'Any') {
				return true;
			}

			const [min, max] = selectedAge.split('-').map(Number);

			if (min <= age && age <= max) {
				return true;
			}

			return false;
		};

		return (
			(selectedFilters.animal === 'Any' || card.animal === selectedFilters.animal) &&
			(selectedFilters.breed === 'Any' || card.breed === selectedFilters.breed) &&
			(selectedAge === 'Any' || isAgeInRange(card.age, selectedAge)) &&
			(selectedFilters.gender === 'Any' || card.gender === selectedFilters.gender) &&
			(selectedFilters.size === 'Any' || card.size === selectedFilters.size) &&
			(selectedFilters.color === 'Any' || card.color === selectedFilters.color)
		);
	});

	const cardsPerPage = 6; // Number of cards per page
	const [currentPage, setCurrentPage] = useState(1);

	const indexOfLastCard = currentPage * cardsPerPage;
	const indexOfFirstCard = indexOfLastCard - cardsPerPage;
	const paginatedFilteredCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

	// Calculate the number of pages based on the filtered card count
	const pagesCount = Math.ceil(filteredCards.length / 6);

	const nextPage = () => {
		if (currentPage < pagesCount) {
			setCurrentPage(currentPage + 1);
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const isPreviousDisabled = currentPage === 1;
	const isNextDisabled = filteredCards.length <= currentPage * cardsPerPage;

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

								{dataArrived ? (
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
								) : (
									<div className="mt-10">
										<PaginationSkeleton />
									</div>
								)}

								<div className="my-14 flex flex-wrap gap-14 justify-center items-center">
									{dataArrived
										? paginatedFilteredCards.map((card, index) => (
												<Card4
													key={index}
													name={card.name}
													animal={card.animal}
													breed={card.breed}
													image={card.image}
												/>
										  ))
										: [1, 2, 3, 4, 5, 6].map((_, index) => <Card4Skeleton key={index} />)}
								</div>
								{dataArrived ? (
									<div className="join my-10">
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
								) : (
									<div className="my-10">
										<PaginationSkeleton />
									</div>
								)}
							</div>
						</div>
					</div>
					<div className="drawer-side">
						<label
							htmlFor="my-drawer-2"
							aria-label="close sidebar"
							className="drawer-overlay"
						></label>
						<ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
							{/* Sidebar content here */}
							<li>
								<a>
									<Select
										title={'Animal'}
										optionList={['Any', 'Dog', 'Cat', 'Rabbit']}
										selected={selectedFilters.animal}
										onChange={(selected) =>
											setSelectedFilters({ ...selectedFilters, animal: selected })
										}
									/>
								</a>
							</li>
							<li>
								<a>
									<Select
										title={'Breed'}
										optionList={['Any', 'Snow Bunny', 'Golden', 'Hotdog']}
										selected={selectedFilters.breed}
										onChange={(selected) =>
											setSelectedFilters({ ...selectedFilters, breed: selected })
										}
									/>
								</a>
							</li>
							<li>
								<a>
									<Select
										title={'Age'}
										optionList={ageRanges.map((range) => range.label)}
										selected={selectedFilters.age}
										onChange={(selected) =>
											setSelectedFilters({ ...selectedFilters, age: selected })
										}
									/>
								</a>
							</li>
							<li>
								<a>
									<Select
										title={'Gender'}
										optionList={['Any', 'Male', 'Female']}
										selected={selectedFilters.gender}
										onChange={(selected) =>
											setSelectedFilters({ ...selectedFilters, gender: selected })
										}
									/>
								</a>
							</li>
							<li>
								<a>
									<Select
										title={'Size'}
										optionList={['Any', 'Small', 'Medium', 'Big']}
										selected={selectedFilters.size}
										onChange={(selected) =>
											setSelectedFilters({ ...selectedFilters, size: selected })
										}
									/>
								</a>
							</li>
							<li>
								<a>
									<Select
										title={'Color'}
										optionList={['Any', 'Brown', 'White', 'Black']}
										selected={selectedFilters.color}
										onChange={(selected) =>
											setSelectedFilters({ ...selectedFilters, color: selected })
										}
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</motion.div>
		</>
	);
}

export default SearchPage;
