import {
	BrowserRouter,
	Switch,
	Route,
	Routes,
	NavLink,
} from "react-router-dom";

import routesConfig from "@routes/routesConfig";

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
					{routesConfig.map((route, index) => {
						return (
							<Route
								key={index}
								path={route.path}
								element={<route.component />}
							/>
						);
					})}
					
				</Routes>
			</BrowserRouter>
		</>
	);
};
export default App;
