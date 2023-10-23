import './App.css';
// import { Route, Router, Routes } from 'react-router-dom';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Homepage from './pages/homepage/homepage';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';
import SearchPage from './pages/searchpage/searchpage';
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();

	return (
		<>
			<Navbar />
			<AnimatePresence>
				<Routes location={location} key={location.key}>
					<Route path="/" element={<Homepage />} />
					<Route path="/search" element={<SearchPage />} />
					<Route path="/sign" element={<SignInSignUp />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</>
	);
}

export default App;

