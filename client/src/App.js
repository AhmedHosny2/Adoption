import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
		</>
	);
}

export default App;

