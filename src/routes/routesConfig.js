import PeoplePage from "@pages/PeoplePage";
import HomePage from "@pages/HomePage/HomePage";
import NotFoundPage from "@pages/NotFoundPage";
import PersonPage from "@pages/PersonPage";
import FavoritePage from "@pages/FavoritePage/FavoritePage";

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
		path: "/people/:id",
		element: PersonPage,
	},
	{
		path: "/favorite",
		element: FavoritePage,
	},
	{
		path: "*",
		element: NotFoundPage,
	},
];


export default routesConfig;