import PeoplePage from "@pages/PeoplePage";
import HomePage from "@pages/HomePage/HomePage";
import NotFoundPage from "@pages/NotFoundPage";
import PersonPage from "@pages/PersonPage";
import FavoritePage from "@pages/FavoritePage/FavoritePage";
import SearchPage from "@pages/SearchPage/SearchPage";

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
		path: "/search",
		element: SearchPage,
	},
	{
		path: "*",
		element: NotFoundPage,
	},
];


export default routesConfig;