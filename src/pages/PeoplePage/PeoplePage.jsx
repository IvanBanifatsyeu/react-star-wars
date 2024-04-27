import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import PeopleList from "@components/PeoplePage/PeopleList";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation";
import PeoplePagination from "@components/PeoplePage/PeoplePagination";
import { API_PEOPLE, SWAPI_PARAM_LIMIT } from "@constants/api";
import { withErrorApi } from "@hoc/withErrorApi";
import { useQueryParams } from "@hooks/useQueryParams";
import { getPeopleId, getPeopleImg } from "@services/getPeopleData";
import { getApiResource } from "@utils/network";

const PeoplePage = ({ setErrorApi }) => {
	const [people, setPeople] = useState(null);
	const [isloading, setIsLoading] = useState(false);
	const [prevPage, setPrevPage] = useState(null);
	const [nextPage, setNextPage] = useState(null);
	const [counterPage, setCounterPage] = useState(1);
	const [arrNumPages, setArrNumPages] = useState([]);

	const query = useQueryParams();
	const queryPage = query.get("page");

	const getResource = async (url) => {
		const res = await getApiResource(url);

		if (res) {
			const peopleList = res.results.map(({ name, url }) => {
				const id = getPeopleId(url);
				const urlImg = getPeopleImg(id);
				return { name, url, id, urlImg };
			});

			setPeople(peopleList);
			setPrevPage(res.previous);
			setNextPage(res.next);
			setErrorApi(false);
			setIsLoading(false);
			let i = 1;
			let arr = [];
			while (i <= res.total_pages) {
				arr.push(i);
				i++;
			}
			setArrNumPages(arr);
		} else {
			setErrorApi(true);
		}
	};

	useEffect(() => {
		getResource(API_PEOPLE + queryPage + SWAPI_PARAM_LIMIT);
	}, []);

	useEffect(() => {
		setCounterPage(Number(queryPage));
	}, [queryPage]);

	return (
		<>
			<PeopleNavigation
				getResource={getResource}
				prevPage={prevPage}
				nextPage={nextPage}
				counterPage={counterPage}
				isloading={isloading}
			/>
			{people && <PeopleList people={people} />}
			<PeoplePagination
				arrNumPages={arrNumPages}
				getResource={getResource}
				counterPage={counterPage}
			/>
		</>
	);
};

PeoplePage.propTypes = {
	setErrorApi: PropTypes.func,
};
export default withErrorApi(PeoplePage);
