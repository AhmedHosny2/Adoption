import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const svgVariants = {
	hidden: { rotate: -360 },
	visible: { rotate: 0, transition: { duration: 1 } },
};

const pathVariants = {
	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,
		transition: { duration: 2, ease: 'easeInOut' },
	},
};

const navigationVariants = {
	hidden: {
		y: -250,
	},
	visible: {
		y: 0,
		transition: {
			delay: 0.2,
			type: 'spring',
			stiffness: 120,
		},
	},
};

const navigation = [
	{ name: 'Adopt', href: '/search', current: true },
	{ name: 'Put for Adoption', href: '#', current: false },
	{ name: 'Donate', href: '#', current: false },
	{ name: 'Other', href: '#', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
	const navigate = useNavigate();

	return (
		<motion.div variants={navigationVariants} initial="hidden" animate="visible">
			<Disclosure as="nav" className="bg-base-200 sticky">
				{({ open }) => (
					<>
						<div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8">
							<div className="relative flex h-16 items-center justify-between sm:justify-start">
								<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
									{/* Mobile menu button*/}
									<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="absolute -inset-0.5" />
										<span className="sr-only">Open main menu</span>
										{open ? (
											<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
										) : (
											<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
										)}
									</Disclosure.Button>
								</div>
								<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
									<motion.div
										drag
										dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
										dragElastic={1}
										className="flex flex-shrink-0 items-center"
										onClick={() => navigate('/')}
									>
										<motion.svg
											variants={svgVariants}
											initial="hidden"
											animate="visible"
											xmlns="http://www.w3.org/2000/svg"
											height="2em"
											viewBox="0 0 512 512"
											style={{ fill: '#947624' }}
										>
											<motion.path
												variants={pathVariants}
												d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"
											/>
										</motion.svg>
									</motion.div>
									<div className="hidden sm:ml-6 sm:block">
										<div className="flex space-x-4">
											{navigation.map((item) => (
												<Link
													key={item.name}
													to={item.href}
													className={classNames(
														item.current
															? 'bg-accent text-white hover:bg-accent-focus hover:text-white transition-color duration-300'
															: 'text-secondary-content hover:bg-accent-focus hover:text-white transition-color duration-300',
														'rounded-md px-3 py-2 text-sm font-medium'
													)}
													aria-current={item.current ? 'page' : undefined}
												>
													{item.name}
												</Link>
											))}
										</div>
									</div>
								</div>
								<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
									<button
										type="button"
										className="relative rounded-full bg-base-300 p-1 text-secondary-content hover:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base-100"
									>
										<span className="absolute -inset-1.5" />
										<span className="sr-only">View notifications</span>
										<BellIcon className="h-6 w-6" aria-hidden="true" />
									</button>

									{/* Profile dropdown */}
									<Menu as="div" className="relative ml-3">
										<div>
											<Menu.Button className="relative flex rounded-full bg-accent text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-base-100">
												<span className="absolute -inset-1.5" />
												<span className="sr-only">Open user menu</span>
												<img
													className="h-8 w-8 rounded-full"
													src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
													alt=""
												/>
											</Menu.Button>
										</div>
										<Transition
											as={Fragment}
											enter="transition ease-out duration-100"
											enterFrom="transform opacity-0 scale-95"
											enterTo="transform opacity-100 scale-100"
											leave="transition ease-in duration-75"
											leaveFrom="transform opacity-100 scale-100"
											leaveTo="transform opacity-0 scale-95"
										>
											<Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-base-300 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
												<Menu.Item>
													{({ active }) => (
														<Link
															to="#"
															className={classNames(
																active ? 'bg-base-100' : '',
																'block px-4 py-2 text-sm text-gray-700'
															)}
														>
															Your Profile
														</Link>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<Link
															to="#"
															className={classNames(
																active ? 'bg-base-100' : '',
																'block px-4 py-2 text-sm text-gray-700'
															)}
														>
															Settings
														</Link>
													)}
												</Menu.Item>
												<Menu.Item>
													{({ active }) => (
														<Link
															to="#"
															className={classNames(
																active ? 'bg-base-100' : '',
																'block px-4 py-2 text-sm text-gray-700'
															)}
														>
															Log Out
														</Link>
													)}
												</Menu.Item>
											</Menu.Items>
										</Transition>
									</Menu>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="sm:hidden">
							<div className="space-y-1 px-2 pb-3 pt-2">
								{navigation.map((item) => (
									<Link
										key={item.name}
										to={item.href}
										className={classNames(
											item.current
												? 'bg-accent text-white hover:bg-accent-focus hover:text-white transition-color duration-300'
												: 'text-secondary-content hover:bg-accent-focus hover:text-white transition-color duration-300',
											'block rounded-md px-3 py-2 text-base font-medium'
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</Link>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</motion.div>
	);
}
