import { useState, useEffect } from "react";
import { getApiResource } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImg } from "../../services/getPeopleData";

import styles from "./PeoplePage.module.css";

const PeoplePage = () => {
	const [people, setPeople] = useState(null);

	const getResource = async (url) => {
		const res = await getApiResource(url);

		const peopleList = res.results.map(({ name, url }) => {
			const id = getPeopleId(url);
			const urlImg = getPeopleImg(id);
			return { name, url, id, urlImg };
		});
		setPeople(peopleList);
	};

	useEffect(() => {
		getResource(API_PEOPLE);
	}, []);

	return (
		<>
			{people && (
				<ul>
					{people.map(({ name, url, id, urlImg }) => (
						<li key={id}>
							{" "}
							<img src={urlImg} alt={name} /> <p>{name}</p>{" "}
						</li>
					))}
				</ul>
			)}
		</>
	);
};
export default PeoplePage;
