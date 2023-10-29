import './App.css';
// import { Route, Router, Routes } from 'react-router-dom';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Homepage from './pages/homepage/homepage';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import SearchPage from './pages/searchpage/searchpage';
import LogSignPage from './pages/logsignpage/logsignpage';
import SignUpSteps from './pages/signupstepspage/signupstepspage';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function App() {
	const location = useLocation();
	const [showNavNFooter, setShowNavNFooter] = useState(false);

	return (
		<>
			<Navbar showNavNFooter={showNavNFooter} setShowNavNFooter={setShowNavNFooter} />
			<AnimatePresence>
				<Routes location={location} key={location.key}>
					<Route path="/" element={<LogSignPage setShowNavNFooter={setShowNavNFooter} />} />
					<Route
						path="/signup-steps"
						element={<SignUpSteps setShowNavNFooter={setShowNavNFooter} />}
					/>
					<Route path="/home" element={<Homepage />} />
					<Route path="/search" element={<SearchPage />} />
					<Route path="/sign" element={<SignInSignUp />} />
				</Routes>
			</AnimatePresence>
			<Footer showNavNFooter={showNavNFooter} />
		</>
	);
}

export default App;

