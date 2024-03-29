import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage/HomePage";
import NotFoundPage from "@containers/NotFoundPage";

 const routesConfig = [
	{
		path: "/",
		element: HomePage,
	},
	{
		path: "/people",
		element: PeoplePage,
	},
	{
		path: "*",
		element: NotFoundPage,
	},
];


export default routesConfig;