import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withErrorApi } from "@hoc/withErrorApi";
import PeopleList from "@components/PeoplePage/PeopleList";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation";
import { getApiResource } from "@utils/network";
import { getPeopleId, getPeopleImg } from "@services/getPeopleData";
import { API_PEOPLE, SWAPI_PARAM_LIMIT } from "@constants/api";
import { useQueryParams } from "@hooks/useQueryParams";

import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
	const [people, setPeople] = useState(null);
	const [prevPage, setPrevPage] = useState(null);
	const [nextPage, setNextPage] = useState(null);
	const [counterPage, setCounterPage] = useState(1);

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
			{console.log("rerend People", counterPage)}
			<PeopleNavigation
				getResource={getResource}
				prevPage={prevPage}
				nextPage={nextPage}
				counterPage={counterPage}
			/>
			{people && <PeopleList people={people} />}
		</>
	);
};

PeoplePage.propTypes = {
	setErrorApi: PropTypes.func,
};
export default withErrorApi(PeoplePage);
