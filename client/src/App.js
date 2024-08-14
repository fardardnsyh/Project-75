import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage, Error, Dashboard, Register } from './pages';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/register" element={<Register />} />
				<Route path="/landingPage" element={<LandingPage />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
