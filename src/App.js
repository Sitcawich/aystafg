import './App.css';
import Header from './Header';
import Game from './routes/Game';
import Footer from './Footer';
import { Outlet} from "react-router-dom";

function App() {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}

export default App;
