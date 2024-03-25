import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage/HomePage";

 const routesConfig = [
	{
		path: "/",
		component: HomePage,
	},
	{
		path: "/people",
		component: PeoplePage,
	},
];


export default routesConfig;