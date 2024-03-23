import {
	BrowserRouter,
	Switch,
	Route,
	Routes,
	NavLink,
} from "react-router-dom";
import PeoplePage from "@containers/PeoplePage";
import HomePage from "../HomePage/HomePage";

import styles from "./App.module.css";

const App = () => {
	return (
		<>
		
			<BrowserRouter>
			<nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/people">People</NavLink>
            </nav>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/people" element={<PeoplePage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
export default App;
