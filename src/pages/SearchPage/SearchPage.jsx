import PropTypes from "prop-types";
import styles from "./SearchPage.module.css";
import { getApiResource } from "@utils/network";
import { API_SEARCH, INITIAL_ARR_SEARCH } from "@constants/api";
import { useEffect, useState } from "react";
import { withErrorApi } from "@hoc/withErrorApi";
import { getPeopleId, getPeopleImg } from "@services/getPeopleData";
import SearchPageInfo from "@components/SearchPage/SearchPageInfo";

const SearchPage = ({ setErrorApi }) => {
	const [inputSearchValue, setInputSearchValue] = useState("");
	const [people, setPeople] = useState(INITIAL_ARR_SEARCH);

	const getResponse = async (param) => {
		const paramTrim = param.trimStart()
		const res = await getApiResource(API_SEARCH + paramTrim);

		if (res.result) {
			const peopleList = res.result.map(({ properties }) => {
				const id = getPeopleId(properties.url);
				const img = getPeopleImg(id);
				return { name: properties.name, id, img };
			});
			setPeople(peopleList);
			setErrorApi(false);
		} else {
			setErrorApi(true);
		}
	};


	const handleInputChange = (e) => {
		const valueInput = e.target.value;
		setInputSearchValue(valueInput);
		if(valueInput.trimStart().length > 0) {getResponse(valueInput.trimStart());}
		
	};

	return (
		<>
			<h1 className="header__text">Search </h1>
			<input
				type="text"
				value={inputSearchValue}
				onChange={handleInputChange}
				placeholder="Input character's name"
			/>
			<SearchPageInfo people={people} />
		</>
	);
};

SearchPage.propTypes = {
	setErrorApi: PropTypes.func,
};

export default withErrorApi(SearchPage);
