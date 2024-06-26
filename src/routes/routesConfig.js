import PeoplePage from "@pages/PeoplePage";
import HomePage from "@pages/HomePage/HomePage";
import NotFoundPage from "@pages/NotFoundPage";
import PersonPage from "@pages/PersonPage";
import FavoritePage from "@pages/FavoritePage/FavoritePage";
import SearchPage from "@pages/SearchPage/SearchPage";
import TopViewsPage from "@pages/TopViewsPage";
import ErrorMessage from '@components/ErrorMessage/ErrorMessage'

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
		path: "/views",
		element: TopViewsPage,
	},
	{
		path: "/fail",
		element: ErrorMessage,
	},
	{
		path: "*",
		element: NotFoundPage,
	},
];


export default routesConfig;