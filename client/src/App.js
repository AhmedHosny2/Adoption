import './App.css';
// import { Route, Router, Routes } from 'react-router-dom';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Homepage from './pages/homepage/homepage';
import TestPage from './pages/testPage/testPage';
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();

	return (
		<>
			<Navbar />
			<AnimatePresence>
				<Routes location={location} key={location.key}>
					<Route path="/" element={<Homepage />} />
					<Route path="/test" element={<TestPage />} />
				</Routes>
			</AnimatePresence>
		</>
	);
}

export default App;

