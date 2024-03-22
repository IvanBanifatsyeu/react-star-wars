import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getApiResource } from "@utils/network";
import { API_PEOPLE } from "@constants/api";
import { getPeopleId, getPeopleImg } from "@services/getPeopleData";
import { withErrorApi } from "@hoc/withErrorApi";
import PeopleList from "@components/PeoplePage/PeopleList";

import styles from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
	const [people, setPeople] = useState(null);

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
			<h1>Navigation</h1>
			{people && <PeopleList people={people} />}
		</>
	);
};

PeoplePage.propTypes = {
	setErrorApi: PropTypes.func,
};
export default withErrorApi(PeoplePage);
