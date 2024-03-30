import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import PropTypes from "prop-types";

import { withErrorApi } from "@hoc/withErrorApi";
import PeopleList from "@components/PeoplePage/PeopleList";
import { getApiResource } from "@utils/network";
import { getPeopleId, getPeopleImg } from "@services/getPeopleData";
import { API_PEOPLE, SWAPI_PARAM_LIMIT } from "@constants/api";
import { useQueryParams } from "@hooks/useQueryParams";


import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
	const [people, setPeople] = useState(null);
	const [prevPage, setPrevPage] = useState(null);
	const [nextPage, setNextPage] = useState(null);
	const [searchParams, setSearchParams] = useSearchParams()
	const [counterPage, setCounterPage] =useState(1)
	
	console.log(counterPage)
	const query = useQueryParams();
	const queryPage = query.get("page");

	const getResource = async (url) => {
		const res = await getApiResource(url);
		//  console.log(res);
		if (res) {
			const peopleList = res.results.map(({ name, url }) => {
				const id = getPeopleId(url);
				const urlImg = getPeopleImg(id);
				return { name, url, id, urlImg };
			});
			setPeople(peopleList);
			setPrevPage(res.previous)
			setNextPage(res.next)
			setCounterPage(searchParams.get('page'))
			setErrorApi(false);
			
		} else {
			setErrorApi(true);
		}
	};


	useEffect(() => {
		getResource(API_PEOPLE + queryPage + SWAPI_PARAM_LIMIT);
		
	}, [queryPage]);

	return (
		<>
			<h1 className="header__text">Navigation</h1>
			{people && <PeopleList people={people} />}
		</>
	);
};

PeoplePage.propTypes = {
	setErrorApi: PropTypes.func,
};
export default withErrorApi(PeoplePage);
