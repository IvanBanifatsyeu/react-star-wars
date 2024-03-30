import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { withErrorApi } from "@hoc/withErrorApi";
import PeopleList from "@components/PeoplePage/PeopleList";
import { getApiResource } from "@utils/network";
import { getPeopleId, getPeopleImg } from "@services/getPeopleData";
import { API_PEOPLE } from "@constants/api";
import { useQueryParams } from "@hooks/useQueryParams";

import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
	const [people, setPeople] = useState(null);
	let xx = useQueryParams()
	console.log(xx.get('page'));
	const getResource = async (url) => {
		const res = await getApiResource(url);

		if (res) {
			const peopleList = res.results.map(({ name, url }) => {
				const id = getPeopleId(url);
				const urlImg = getPeopleImg(id);
				return { name, url, id, urlImg };
			});
			setPeople(peopleList);
			setErrorApi(false);
		} else {
			setErrorApi(true);
		}
	};

	useEffect(() => {
		getResource(API_PEOPLE);
	}, []);

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
